package store

type Repo struct {
	Name string			`json:"name"`				
	Description string	`json:"description"`
	Stars uint			`json:"stargazers_count"`
	Forks uint			`json:"forks_count"`
	Language string		`json:"language"`
	Href string			`json:"html_url"`
	Color string
}
