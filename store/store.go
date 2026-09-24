package store

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"sync/atomic"
	"time"
)

type Store struct {
	Avatar Avatar
	Repos  []Repo
}

func RefreshStore(atom *atomic.Value, username string, repoNames []string) {
	var languageColors map[string]string

	for {
		if languageColors == nil {
			if colors, err := fetchLanguageColors(); err == nil {
				languageColors = colors
			}
		}

		var store Store = atom.Load().(Store)
		var repos []Repo

		res, err := githubClient.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", username))

		if err == nil {
			var repoData []Repo
			if res.StatusCode == http.StatusOK {
				err = json.NewDecoder(res.Body).Decode(&repoData)
			}
			res.Body.Close()

			if err == nil && res.StatusCode == http.StatusOK {
			names:
				for _, n := range repoNames {
					for _, r := range repoData {
						if r.Name == n {
							r.Name = strings.ToLower(r.Name)
							r.Description = strings.ToLower(r.Description)
							r.Language = strings.ToLower(r.Language)
							r.Color = languageColor(r.Language, languageColors)
							repos = append(repos, r)
							continue names
						}
					}
				}
			}
		}

		res, err = githubClient.Get(fmt.Sprintf("https://api.github.com/users/%s", username))
		if err == nil {
			var avatar Avatar
			if res.StatusCode == http.StatusOK {
				err = json.NewDecoder(res.Body).Decode(&avatar)
			}
			res.Body.Close()

			if err == nil && res.StatusCode == http.StatusOK {
				store.Avatar = avatar
			}
		}

		if len(repos) != 0 {
			store.Repos = repos
		}

		atom.Store(store)
		time.Sleep(time.Duration(5) * time.Minute)
	}
}
