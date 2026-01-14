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
	Repos []Repo
}

func RefreshStore(atom *atomic.Value, username string, repoNames []string) {
	for {

		var store Store = atom.Load().(Store)
		var repos []Repo

		res, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", username))

		if err == nil {
			var repoData []Repo
			err = json.NewDecoder(res.Body).Decode(&repoData)

			if err == nil {
				names: for _, n := range repoNames {
					for _, r := range repoData {
						if r.Name == n {
							r.Name = strings.ToLower(r.Name)
							r.Description = strings.ToLower(r.Description)
							r.Language = strings.ToLower(r.Language)
							repos = append(repos, r)
							continue names;
						}
					}
				}
			}
		}

		res, err = http.Get(fmt.Sprintf("https://api.github.com/users/%s", username))
		if err == nil {
			var avatar Avatar
			err = json.NewDecoder(res.Body).Decode(&avatar)

			if err == nil {
				store.Avatar = avatar
			}
		}

		if len(repos) != 0 {
			store.Repos = repos
		}

		atom.Store(store)
		time.Sleep(time.Duration(5) * time.Minute);
	}
}
