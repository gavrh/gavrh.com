package handlers

import (
	"gav.codes/site/templates"

	"net/http"

	"github.com/labstack/echo/v4"
)

func HandleRequests(e *echo.Echo) {

    // get
    e.GET("/", func (c echo.Context) error { return HandleGet(c) })
    e.GET("/:path", func (c echo.Context) error { return HandleGet(c) })

}

func HandleGet(c echo.Context) error {

    path := c.Param("path")

    switch path {

        // temp while has no favicon.ico
        case "favicon.ico":
            return nil

    }
    
	return c.Render(http.StatusOK, templates.Index, templates.NewIndexTemplate())
}
