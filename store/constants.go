package store

import "time"

type Constants struct {
	FirstName       string
	LastName        string
	Birthday        time.Time
	Role            string
	City            string
	State           string
	About           string
	ExperienceIntro string
	ProjectsIntro   string
	ProjectsEmpty   string
	ContactEmail    string
	CopyrightPrefix string
	Socials         [][]string
	Experience      [][]string
}
