package store

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sort"
	"strings"
	"time"

	"gopkg.in/yaml.v3"
)

const languageColorsURL = "https://raw.githubusercontent.com/github-linguist/linguist/main/lib/linguist/languages.yml"

var githubClient = &http.Client{Timeout: 10 * time.Second}

type Repo struct {
	Name         string `json:"name"`
	Description  string `json:"description"`
	Stars        uint   `json:"stargazers_count"`
	Forks        uint   `json:"forks_count"`
	Href         string `json:"html_url"`
	LanguagesURL string `json:"languages_url"`
	Languages    []RepoLanguage
}

type RepoLanguage struct {
	Name  string
	Color string
	bytes uint64
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

func fetchRepoLanguages(url string) ([]RepoLanguage, error) {
	res, err := githubClient.Get(url)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("fetch repository languages: %s", res.Status)
	}

	var byteCounts map[string]uint64
	if err := json.NewDecoder(res.Body).Decode(&byteCounts); err != nil {
		return nil, err
	}

	languages := make([]RepoLanguage, 0, len(byteCounts))
	for name, bytes := range byteCounts {
		languages = append(languages, RepoLanguage{
			Name:  strings.ToLower(name),
			bytes: bytes,
		})
	}

	sort.Slice(languages, func(i, j int) bool {
		return languages[i].bytes > languages[j].bytes
	})

	return languages, nil
}
