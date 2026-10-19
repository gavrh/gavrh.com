package main

import (
	"gavrh.com/site/handlers"
	"gavrh.com/site/store"
	"gavrh.com/site/templates"

	"os"
	"sync/atomic"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	_ = godotenv.Load()

	consts := store.LoadConstants()

	var atom atomic.Value
	atom.Store(store.Store{Repos: []store.Repo{}})
	go store.RefreshStore(
		&atom,
		os.Getenv("GITHUB_USERNAME"),
		store.LoadRepoConfigs(),
	)

	e := echo.New()
	e.Use(middleware.RequestLogger())
	e.IPExtractor = echo.ExtractIPFromXFFHeader()
	e.Renderer = templates.NewTemplate()
	handlers.HandleRequests(e, &consts, &atom)
	e.Start(":6969")
}
