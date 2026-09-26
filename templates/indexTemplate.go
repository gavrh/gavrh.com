package templates

import (
	"gavrh.com/site/store"

	"fmt"
	"strings"
	"time"
)

type CurrentRole struct {
	Role    string
	Company string
	Href    string
}

type IndexTemplate struct {
	Consts       *store.Constants
	Text         string
	Age          string
	CurrentRoles []CurrentRole
	Repos        []store.Repo
	AvatarUrl    string
	Year         int
	Timestamp    int64
}

func currentRoles(experience [][]string) []CurrentRole {
	var roles []CurrentRole
	for _, entry := range experience {
		if len(entry) < 5 || entry[4] != "present" {
			continue
		}

		roles = append(roles, CurrentRole{
			Role:    entry[0],
			Company: entry[1],
			Href:    entry[2],
		})
	}
	return roles
}

func decimalAge(birthday, now time.Time) float64 {
	anniversary := func(year int) time.Time {
		return time.Date(year, birthday.Month(), birthday.Day(), 0, 0, 0, 0, now.Location())
	}

	last := anniversary(now.Year())
	if last.After(now) {
		last = anniversary(now.Year() - 1)
	}
	next := anniversary(last.Year() + 1)

	years := last.Year() - birthday.Year()
	return float64(years) + float64(now.Sub(last))/float64(next.Sub(last))
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
		Age:          fmt.Sprintf("%.10f", decimalAge(consts.Birthday, now)),
		CurrentRoles: currentRoles(consts.Experience),
		Repos:        repos,
		AvatarUrl:    avatar.Url,
		Year:         now.Year(),
		Timestamp:    now.UnixNano(),
	}
}
