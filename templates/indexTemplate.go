package templates

import (
	"gav.codes/site/store"

	"strings"
)

type IndexTemplate struct {
	Consts *store.Constants
	Text string
	Repos []store.Repo
}

func NewIndexTemplate(consts *store.Constants, repos []store.Repo) IndexTemplate {
    return IndexTemplate {
		Consts: consts,
		Text: strings.ToLower("ABOUT ME TEXT"),
		Repos: repos,
    }
}
