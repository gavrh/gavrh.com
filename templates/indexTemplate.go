package templates

import (
	"gavrh.com/site/store"

	"fmt"
	"strings"
	"time"
)

type IndexTemplate struct {
	Consts *store.Constants
	Text string
	Repos []store.Repo
	AvatarUrl string
	Year int
}

func NewIndexTemplate(consts *store.Constants, repos []store.Repo, avatar store.Avatar) IndexTemplate {
    return IndexTemplate {
		Consts: consts,
		Text: strings.ToLower(fmt.Sprintf(`
			i'm a %d year old software engineer from %s, %s.
			i like to create, test, and break software. i'm especially
			interested in networks, security, encryption, and systems
			level programming.
		`, consts.Age, consts.City, consts.State)),
		Repos: repos,
		AvatarUrl: avatar.Url,
		Year: time.Now().Year(),
    }
}
