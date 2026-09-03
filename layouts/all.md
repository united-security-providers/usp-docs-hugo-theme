{{- /* The markdown copy of a page: the source as written, plus its navigation. */ -}}
{{- $llms := absURL "llms.txt" -}}
{{- $body := trim .RawContent "\n" -}}
{{- if not (findRE "<h1" .Content 1) }}{{ $body = printf "# %s\n\n%s" (.Title | default site.Title) $body }}{{ end -}}
> For AI agents: this documentation is indexed at {{ $llms }}, and every page is available as markdown at its own address plus index.md.

{{ $body }}
{{ with partial "func/nav-pages.html" . }}
## Pages

{{ range . -}}
- [{{ partial "func/label.html" . }}]({{ .Permalink }}index.md){{ with .Description }}: {{ . }}{{ end }}
{{ end -}}
{{ end -}}
