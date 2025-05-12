package templates

import (
	"gav.codes/site/store"
)

type IndexTemplate struct {
	Repos []store.Repo
}

func NewIndexTemplate() IndexTemplate {
    return IndexTemplate {
		Repos: []store.Repo{},
    }
}
