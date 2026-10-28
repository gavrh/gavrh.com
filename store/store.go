package store

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync/atomic"
	"time"
)

type Store struct {
	Avatar Avatar
	Repos  []Repo
}

func RefreshStore(atom *atomic.Value, username string, repoConfigs []RepoConfig) {
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

		var repoData []Repo
		if err == nil {
			if res.StatusCode == http.StatusOK {
				err = json.NewDecoder(res.Body).Decode(&repoData)
			}
			res.Body.Close()
		}

		for _, config := range repoConfigs {
			if config.Href != "" {
				repo, err := fetchRepo(config.Href)
				if err != nil {
					continue
				}

				repo = prepareRepo(repo, languageColors)
				repo.Href = config.Href
				repos = append(repos, repo)
				continue
			}

			for _, r := range repoData {
				if r.Name == config.Name {
					repos = append(repos, prepareRepo(r, languageColors))
					break
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
