package main

import (
	"log"
	"os"
	"path"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	output := api.Build(api.BuildOptions{
		EntryPoints:       []string{"src/script.ts", "src/style.css", "src/index.html", "public/cookie.png"},
		Bundle:            true,
		MinifySyntax:      true,
		MinifyWhitespace:  true,
		MinifyIdentifiers: true,
		Outdir:            "dist",
		Loader: map[string]api.Loader{
			".html": api.LoaderCopy,
			".png":  api.LoaderCopy,
		},
	})
	for _, err := range output.Errors {
		log.Println("ERROR:", err)
	}
	for _, warn := range output.Warnings {
		log.Println("WARNING:", warn)
	}

	if err := os.RemoveAll("dist"); err != nil {
		log.Fatalln(err)
	}
	if err := os.MkdirAll("dist", 0o750); err != nil {
		log.Fatalln(err)
	}
	for _, out := range output.OutputFiles {
		base := path.Base(out.Path)
		if err := os.WriteFile("dist/"+base, out.Contents, 0o660); err != nil {
			log.Fatalln(err)
		}
	}
}
