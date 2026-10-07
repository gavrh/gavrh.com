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
	Age       int
	Repos     []store.Repo
	AvatarUrl string
	Year      int
}

func age(birthday, now time.Time) int {
	years := now.Year() - birthday.Year()
	birthdayThisYear := time.Date(now.Year(), birthday.Month(), birthday.Day(), 0, 0, 0, 0, now.Location())
	if now.Before(birthdayThisYear) {
		years--
	}
	return years
}

func sentenceList(items [][]string) string {
	names := make([]string, 0, len(items))
	for _, item := range items {
		if len(item) == 0 {
			continue
		}
		names = append(names, item[0])
	}

	switch len(names) {
	case 0:
		return ""
	case 1:
		return names[0]
	default:
		return fmt.Sprintf("%s, and %s", strings.Join(names[:len(names)-1], ", "), names[len(names)-1])
	}
}

func NewIndexTemplate(consts *store.Constants, repos []store.Repo, avatar store.Avatar) IndexTemplate {
	now := time.Now()

	return IndexTemplate{
		Consts: consts,
		Text: strings.ToLower(fmt.Sprintf(
			"%s %s is a %s in %s, %s. he is interested in %s.",
			consts.FirstName, consts.LastName, consts.Role, consts.City, consts.State,
			sentenceList(consts.Interests))),
		Age:       age(consts.Birthday, now),
		Repos:     repos,
		AvatarUrl: avatar.Url,
		Year:      now.Year(),
	}
}
