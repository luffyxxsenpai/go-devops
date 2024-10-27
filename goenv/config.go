// config.go
package main

import (
	"os"
)

type Config struct {
	Name     string
	Age      string
	Password string
	Number   string
}

// LoadConfig reads environment variables directly (no .env needed in Kubernetes)
func LoadConfig() Config {
	return Config{
		Name:     getEnv("NAME", "Unknown"),
		Age:      getEnv("AGE", "0"),
		Password: getEnv("PASSWORD", "password"),
		Number:   getEnv("NUMBER", "000-000-0000"),
	}
}

// getEnv retrieves environment variables with a fallback
func getEnv(key, fallback string) string {
	value := os.Getenv(key)
	if value == "" {
		return fallback
	}
	return value
}

