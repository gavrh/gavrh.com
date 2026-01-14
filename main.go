package main

import (
	"gav.rh/site/handlers"
	"gav.rh/site/store"
	"gav.rh/site/templates"

	"sync/atomic"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	consts := store.Constants {
		Name: "gavin holmes",
		Age: 20,
		City: "san francisco",
		State: "ca",
		Socials: [][]string {
			{
				"github",
				"https://github.com/gavrh",
			}, {
				"discord",
				"https://discord.com/users/1111386258908917862",
			}, {
				"email",
				"mailto:gavin@gav.rh",
			},
		},
		Experience: [][]string {
			{
				"computer science tutor",
				"freelance",
				"",
				"apr 2023",
				"dec 2025",
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
			"noslate",
			"librespot-c",
			"scrapbook",
			"gav.rh",
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
