package main

import (
	"gavrh.com/site/handlers"
	"gavrh.com/site/store"
	"gavrh.com/site/templates"

	"sync/atomic"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	consts := store.Constants{
		FirstName: "gavin",
		LastName:  "holmes",

		Birthday: time.Date(2005, time.May, 27, 0, 0, 0, 0, time.Local),

		Role:  "software engineer",
		City:  "san francisco",
		State: "ca",
		About: "i like to create, test, and break software. i'm especially interested in networks, security, encryption, and systems level programming.",

		ExperienceIntro: "where i've been useful",
		ProjectsIntro: "things made public",
		ProjectsEmpty: "github is taking a moment. the work is still there.",

		ContactEmail: "gavinholmie (at) gmail (dot) com",
		CopyrightPrefix: "all rights reserved",
		Socials: [][]string{
			{
				"linkedin",
				"https://www.linkedin.com/in/gavrh",
			}, {
				"github",
				"https://github.com/gavrh",
			},
		},
		Experience: [][]string{
			{
				"gameplay engineer",
				"locked in studios",
				"https://locked.dev",
				"jul 2026",
				"present",
			}, {
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
	atom.Store(store.Store{Repos: []store.Repo{}})
	go store.RefreshStore(
		&atom,
		"gavrh",
		[]string{
			"fault",
			"rojo-placepack",
			"noslate",
			"spotless",
			"librespot-c",
			"scrapbook",
			"gavrh.com",
		},
	)

	e := echo.New()
	e.Use(middleware.RequestLogger())
	e.IPExtractor = echo.ExtractIPFromXFFHeader()
	e.Static("/static/assets", "assets")
	e.Static("/static/css", "css")
	e.Static("/static/scripts", "scripts")
	e.Renderer = templates.NewTemplate()
	handlers.HandleRequests(e, &consts, &atom)
	e.Start(":6969")
}
