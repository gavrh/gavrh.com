import { useTheme } from 'styled-components'
import tw from 'tailwind-styled-components'

// Styled Components //

// container
export const WebAppContainer = tw.div`
    flex
    bg-primary-bg
    w-full
    h-[100dvh]
    text-zinc-100
    overflow-y-scroll
    overflow-x-hidden
`
// wrapper
export const WebAppWrapper = tw.div`
    flex
    flex-col
    w-full
    max-w-[1220px]
    h-full
    mx-auto
`
// top
export const WebAppTop = tw.div`
    flex
    flex-col
    lg:flex-row
    justify-between
    mx-[10px]
`

// profile
export const ProfileContainer = tw.div`
    flex
    flex-col
    lg:min-w-[400px]
    lg:max-w-[400px]
    pr-[20px]
`
// experience
export const ExperienceContainer = tw.div`
    flex
    flex-col
    w-full
`
// projects
export const ProjectsContainer = tw.div`
    flex
    flex-col
    w-full
    mx-[10px]
`
// section title
export const SectionTitle = tw.h1`
    w-full
    text-3xl
    underline
    decoration-emerald-600
    my-[20px]
    font-semibold
`
// section title
export const SubSectionTitle = tw.h1`
    w-full
    text-2xl

    my-[20px]
`