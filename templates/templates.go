package templates

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
)

type Templates struct {
	Templates *template.Template
}

func (t *Templates) Render(
	W io.Writer,
	Name string,
	Data any,
	C echo.Context,
) error {
	return t.Templates.ExecuteTemplate(W, Name, Data)
}

func NewTemplate() *Templates {
	return &Templates {
		Templates: template.Must(template.ParseGlob("view/*.html")),
	}
}
