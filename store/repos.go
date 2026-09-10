package store

type Repo struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Stars       uint   `json:"stargazers_count"`
	Forks       uint   `json:"forks_count"`
	Language    string `json:"language"`
	Href        string `json:"html_url"`
	Color       string
}

func languageColor(language string) string {
	colors := map[string]string{
		"c":          "#555555",
		"c++":        "#f34b7d",
		"css":        "#563d7c",
		"go":         "#00add8",
		"html":       "#e34c26",
		"java":       "#b07219",
		"javascript": "#f1e05a",
		"lua":        "#000080",
		"rust":       "#dea584",
		"typescript": "#3178c6",
	}

	if color, ok := colors[language]; ok {
		return color
	}
	return "#8b949e"
}
