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
				"resume",
				"https://gav.codes/static/assets/Gavin_Holmes_Resume.pdf",
			}, {
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
				"systems software intern",
				"subtrace",
				"https://subtrace.dev",
				"jun 2025",
				"present",
			}, {
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
