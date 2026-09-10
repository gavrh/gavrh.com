document.addEventListener("DOMContentLoaded", () => {
    window.history.replaceState({}, "", "/")

    const focusableElements = [...document.querySelectorAll("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    const sheets = [...document.querySelectorAll(".sheet")]
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let activeSheet = 0
    let animationDirection = 0
    let animationFrame
    let isAnimating = false
    let touchStartX = 0
    let touchStartY = 0
    let wheelDelta = 0
    let wheelDirection = 0
    let wheelHandled = false
    let wheelTimer

    const sheetTop = index => sheets
        .slice(0, index)
        .reduce((top, sheet) => top + sheet.offsetHeight, 0)

    const closestSheet = () => sheets.reduce((closest, _, index) => {
        const distance = Math.abs(sheetTop(index) - window.scrollY)
        return distance < closest.distance ? { index, distance } : closest
    }, { index: 0, distance: Infinity }).index

    const scrollToSheet = index => {
        const nextSheet = Math.max(0, Math.min(index, sheets.length - 1))
        const targetY = sheetTop(nextSheet)
        if (nextSheet === activeSheet && Math.abs(window.scrollY - targetY) < 1) return

        cancelAnimationFrame(animationFrame)
        activeSheet = nextSheet

        const startY = window.scrollY
        const distance = targetY - startY

        if (reducedMotion.matches) {
            window.scrollTo(0, targetY)
            animationDirection = 0
            isAnimating = false
            return
        }

        const duration = Math.min(700, Math.max(250, Math.abs(distance) / window.innerHeight * 700))
        const startedAt = performance.now()
        animationDirection = Math.sign(distance)
        isAnimating = true

        const animate = now => {
            const progress = Math.min((now - startedAt) / duration, 1)
            const eased = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2

            window.scrollTo(0, startY + distance * eased)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
                return
            }

            animationDirection = 0
            isAnimating = false
        }

        animationFrame = requestAnimationFrame(animate)
    }

    const navigate = direction => {
        if (isAnimating && direction === animationDirection) return
        scrollToSheet(activeSheet + direction)
    }

    document.addEventListener("wheel", event => {
        if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
        event.preventDefault()

        const multiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
            ? 16
            : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? window.innerHeight : 1
        const delta = event.deltaY * multiplier
        const direction = Math.sign(delta)

        clearTimeout(wheelTimer)
        wheelTimer = setTimeout(() => {
            wheelDelta = 0
            wheelDirection = 0
            wheelHandled = false
        }, 160)

        if (direction !== wheelDirection) {
            wheelDelta = 0
            wheelDirection = direction
            wheelHandled = false
        }

        wheelDelta += delta
        if (wheelHandled || Math.abs(wheelDelta) < 24) return

        wheelHandled = true
        navigate(direction)
    }, { passive: false })

    document.addEventListener("touchstart", event => {
        touchStartX = event.touches[0].clientX
        touchStartY = event.touches[0].clientY
    }, { passive: true })

    document.addEventListener("touchmove", event => {
        const deltaX = touchStartX - event.touches[0].clientX
        const deltaY = touchStartY - event.touches[0].clientY
        if (Math.abs(deltaY) > Math.abs(deltaX)) event.preventDefault()
    }, { passive: false })

    document.addEventListener("touchend", event => {
        const deltaX = touchStartX - event.changedTouches[0].clientX
        const deltaY = touchStartY - event.changedTouches[0].clientY
        if (Math.abs(deltaY) < 50 || Math.abs(deltaX) > Math.abs(deltaY)) return
        navigate(Math.sign(deltaY))
    }, { passive: true })

    document.addEventListener("keydown", event => {
        if (event.key === "Tab") {
            const currentIndex = focusableElements.indexOf(document.activeElement)
            const nextIndex = currentIndex + (event.shiftKey ? -1 : 1)
            if (nextIndex < 0 || nextIndex >= focusableElements.length) return

            event.preventDefault()
            focusableElements[nextIndex].focus({ preventScroll: true })
            return
        }

        if (event.repeat) return

        const previous = event.key === "ArrowUp" || event.key === "PageUp" || (event.key === " " && event.shiftKey)
        const next = event.key === "ArrowDown" || event.key === "PageDown" || (event.key === " " && !event.shiftKey)
        if (!previous && !next) return

        event.preventDefault()
        navigate(previous ? -1 : 1)
    })

    document.addEventListener("focusin", event => {
        const sheet = event.target.closest(".sheet")
        if (!sheet) return

        requestAnimationFrame(() => scrollToSheet(sheets.indexOf(sheet)))
    })

    window.addEventListener("scroll", () => {
        if (!isAnimating) activeSheet = closestSheet()
    }, { passive: true })

    activeSheet = closestSheet()
})
