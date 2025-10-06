package main

import (
	"gav.codes/site/handlers"
	"gav.codes/site/store"
	"gav.codes/site/templates"

	"sync/atomic"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	consts := store.Constants {
		Name: "gavin holmes",
		Age: 19,
		City: "San Francisco",
		State: "CA",
		Socials: [][]string {
			{
				"github",
				"https://github.com/gavrh",
			}, {
				"linkedin",
				"https://linkedin.com/in/gavrh",
			}, {
				"email",
				"mailto:gavin@gav.codes",
			},
		},
		Experience: [][]string {
			{
				"computer science tutor",
				"freelance",
				"",
				"apr 2023",
				"present",
			}, {
				"freelance swe",
				"fiverr",
				"https://fiverr.com",
				"jan 2021",
				"apr 2025",
			},
		},
	}

	var atom atomic.Value
	atom.Store(store.Store { Repos: []store.Repo{} })
	go store.RefreshStore(
		&atom,
		"gavrh",
		[]string {
			"conve",
			"germ",
			"noslate",
			"spotless",
			"librespot-c",
			"scrapbook",
			"gav.codes",
		},
	)

	e := echo.New()
	e.Use(middleware.Logger())
	e.IPExtractor = echo.ExtractIPDirect()
	e.Static("/static/assets", "assets")
	e.Static("/static/css", "css")
	e.Renderer = templates.NewTemplate()
	handlers.HandleRequests(e, &consts, &atom)
	e.Start(":6969")

}
