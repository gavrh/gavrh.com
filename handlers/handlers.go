package handlers

import (
	"gav.codes/site/store"
	"gav.codes/site/templates"

	"net/http"
	"sync/atomic"

	"github.com/labstack/echo/v4"
)

func HandleRequests(e *echo.Echo, consts *store.Constants, atom *atomic.Value) {

    // get
    e.GET("/", func (c echo.Context) error { return HandleGet(c, consts, atom) })
    e.GET("/:path", func (c echo.Context) error { return HandleGet(c, consts, atom) })

}

func HandleGet(c echo.Context, consts *store.Constants, atom *atomic.Value) error {

    path := c.Param("path")

    switch path {

        // temp while has no favicon.ico
        case "favicon.ico":
            return nil

    }
    
	return c.Render(http.StatusOK, templates.Index, templates.NewIndexTemplate(consts, atom.Load().(store.Store).Repos))
}
