package store

import (
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"gopkg.in/yaml.v3"
)

const languageColorsURL = "https://raw.githubusercontent.com/github-linguist/linguist/main/lib/linguist/languages.yml"

var githubClient = &http.Client{Timeout: 10 * time.Second}

type Repo struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Stars       uint   `json:"stargazers_count"`
	Forks       uint   `json:"forks_count"`
	Language    string `json:"language"`
	Href        string `json:"html_url"`
	Color       string
	StarsShort  string
	ForksShort  string
}

type RepoConfig struct {
	Name string
	Href string
}

func prepareRepo(repo Repo, languageColors map[string]string) Repo {
	repo.Name = strings.ToLower(repo.Name)
	repo.Description = strings.ToLower(repo.Description)
	repo.Language = strings.ToLower(repo.Language)
	repo.Color = languageColor(repo.Language, languageColors)
	repo.StarsShort = abbreviate(repo.Stars)
	repo.ForksShort = abbreviate(repo.Forks)
	return repo
}

func fetchRepo(href string) (Repo, error) {
	var repo Repo

	u, err := url.Parse(href)
	if err != nil {
		return repo, err
	}

	host := strings.ToLower(u.Hostname())
	if host != "github.com" && host != "www.github.com" {
		return repo, fmt.Errorf("not a github repo: %s", href)
	}

	parts := strings.Split(strings.Trim(u.Path, "/"), "/")
	if len(parts) < 2 {
		return repo, fmt.Errorf("invalid github repo: %s", href)
	}

	owner, name := parts[0], strings.TrimSuffix(parts[1], ".git")
	res, err := githubClient.Get(fmt.Sprintf("https://api.github.com/repos/%s/%s", url.PathEscape(owner), url.PathEscape(name)))
	if err != nil {
		return repo, err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return repo, fmt.Errorf("fetch repo %s/%s: %s", owner, name, res.Status)
	}

	if err := json.NewDecoder(res.Body).Decode(&repo); err != nil {
		return repo, err
	}

	return repo, nil
}

func fetchLanguageColors() (map[string]string, error) {
	res, err := githubClient.Get(languageColorsURL)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("fetch language colors: %s", res.Status)
	}

	var languages map[string]struct {
		Color string `yaml:"color"`
	}
	if err := yaml.NewDecoder(res.Body).Decode(&languages); err != nil {
		return nil, err
	}

	colors := make(map[string]string, len(languages))
	for language, details := range languages {
		if details.Color != "" {
			colors[strings.ToLower(language)] = details.Color
		}
	}

	return colors, nil
}

func languageColor(language string, colors map[string]string) string {
	if color, ok := colors[strings.ToLower(language)]; ok {
		return color
	}
	return "#8b949e"
}

func abbreviate(count uint) string {
	if count < 1000 {
		return strconv.FormatUint(uint64(count), 10)
	}

	suffixes := []string{"", "k", "m", "b", "t"}
	value := float64(count)
	unit := 0
	for value >= 1000 && unit < len(suffixes)-1 {
		value /= 1000
		unit++
	}

	value = math.Round(value*10) / 10
	if value >= 1000 && unit < len(suffixes)-1 {
		value /= 1000
		unit++
	}

	return strconv.FormatFloat(value, 'f', -1, 64) + suffixes[unit]
}
