package main

import (
	"gav.codes/site/templates"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	e := echo.New()
	e.Use(middleware.Logger())
	e.IPExtractor = echo.ExtractIPDirect()
	e.Static("/static/assets", "assets")
	e.Static("/static/css", "css")
	e.Renderer = templates.NewTemplate()
	e.Start(":6969")

}
