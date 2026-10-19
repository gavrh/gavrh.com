package store

import (
	"os"
	"strings"
	"time"
)

func LoadConstants() Constants {
	birthday, _ := time.Parse("2006-01-02", os.Getenv("BIRTHDAY"))

	return Constants{
		FirstName:       os.Getenv("FIRST_NAME"),
		LastName:        os.Getenv("LAST_NAME"),
		Birthday:        birthday,
		Role:            os.Getenv("ROLE"),
		City:            os.Getenv("CITY"),
		State:           os.Getenv("STATE"),
		Interests:       parseLinks(os.Getenv("INTERESTS")),
		ProjectsEmpty:   os.Getenv("PROJECTS_EMPTY"),
		ContactEmail:    os.Getenv("CONTACT_EMAIL"),
		CopyrightPrefix: os.Getenv("COPYRIGHT_PREFIX"),
		Socials:         parseSocials(os.Getenv("SOCIALS")),
		Experience:      parseExperience(os.Getenv("EXPERIENCE")),
	}
}

func LoadRepoConfigs() []RepoConfig {
	entries := splitList(os.Getenv("GITHUB_REPOS"))
	configs := make([]RepoConfig, 0, len(entries))

	for _, entry := range entries {
		name, href, _ := strings.Cut(entry, ":")
		configs = append(configs, RepoConfig{
			Name: strings.TrimSpace(name),
			Href: strings.TrimSpace(href),
		})
	}

	return configs
}

func parseLinks(value string) [][]string {
	entries := splitList(value)
	links := make([][]string, 0, len(entries))

	for _, entry := range entries {
		name, href, _ := strings.Cut(entry, ":")
		links = append(links, []string{strings.TrimSpace(name), strings.TrimSpace(href)})
	}

	return links
}

func parseSocials(value string) [][]string {
	return parseLinks(strings.Join(strings.Fields(strings.ReplaceAll(value, ",", " ")), ","))
}

func parseExperience(value string) [][]string {
	entries := splitList(value)
	experience := make([][]string, 0, len(entries))

	for _, entry := range entries {
		parts := strings.Split(entry, ":")
		if len(parts) < 5 {
			continue
		}

		url := strings.Join(parts[2:len(parts)-2], ":")
		experience = append(experience, []string{
			strings.TrimSpace(parts[0]),
			strings.TrimSpace(parts[1]),
			strings.TrimSpace(url),
			strings.TrimSpace(parts[len(parts)-2]),
			strings.TrimSpace(parts[len(parts)-1]),
		})
	}

	return experience
}

func splitList(value string) []string {
	parts := strings.Split(value, ",")
	items := make([]string, 0, len(parts))

	for _, part := range parts {
		part = strings.TrimSpace(part)
		if part != "" {
			items = append(items, part)
		}
	}

	return items
}
