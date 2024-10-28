// main.go
package main

import (
	"html/template"
	"log"
	"net/http"
)

var config Config

// Initialize the app with configuration
func init() {
	config = LoadConfig()
}

// HomeHandler handles the home page and displays environment variables
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/index.html"))

	// Pass config values to the template
	data := map[string]string{
		"Name":     config.Name,
		"Age":      config.Age,
		"Password": config.Password,
		"Number":   config.Number,
    "Version":  config.Version,
  }

	err := tmpl.Execute(w, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// main function starts the server
func main() {
	http.HandleFunc("/", HomeHandler)

	log.Printf("Starting server on port 8080...\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed: %s", err)
	}
}

