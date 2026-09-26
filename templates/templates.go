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
	funcs := template.FuncMap{
		"sub": func(a, b int) int { return a - b },
	}

	return &Templates {
		Templates: template.Must(template.New("views").Funcs(funcs).ParseGlob("views/*.html")),
	}
}

const (
	Index = "index"
)
