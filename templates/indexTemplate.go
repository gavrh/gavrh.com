package templates

import (
	"gavrh.com/site/store"

	"fmt"
	"strings"
	"time"
)

type IndexTemplate struct {
	Consts    *store.Constants
	Text      string
	Repos     []store.Repo
	AvatarUrl string
	Year      int
	Timestamp int64
}

func NewIndexTemplate(consts *store.Constants, repos []store.Repo, avatar store.Avatar) IndexTemplate {
	now := time.Now()
	age := now.Year() - consts.Birthday.Year()
	birthdayThisYear := time.Date(now.Year(), consts.Birthday.Month(), consts.Birthday.Day(), 0, 0, 0, 0, now.Location())
	if now.Before(birthdayThisYear) {
		age--
	}

	return IndexTemplate{
		Consts: consts,
		Text: strings.ToLower(fmt.Sprintf(
			"i'm a %d year old %s from %s, %s. %s",
			age, consts.Role, consts.City, consts.State, consts.About)),
		Repos:     repos,
		AvatarUrl: avatar.Url,
		Year:      now.Year(),
		Timestamp: now.UnixNano(),
	}
}
