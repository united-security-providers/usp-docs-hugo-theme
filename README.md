# USP Docs

The Hugo theme for USP product documentation.

## How the content is organised

A documentation site covers one or more products, and every product has one or
more versions. You express both by naming and nesting directories under
`content/`. The theme builds the header dropdowns, the sidebar, the breadcrumb
and the search from that. There is nothing to configure for the navigation
itself.

### Several products on one site

Example: https://github.com/united-security-providers/usp-aero

Give every product a directory, and every version of a product a directory
inside it:

```
content/en/
├── _index.md          the landing page
├── <product-a>/
│   ├── _index.md      layout: redirect
│   ├── latest/
│   ├── 1.2.x/
│   └── 0.9.x/
└── <product-b>/
    ├── _index.md      layout: redirect
    ├── latest/
    └── 2.0.x/
```

Visitors get two dropdowns in the header, one to switch product and one to
switch version. The landing page at the top is what the "All products" entry of
the product dropdown leads back to.

A product directory holds no text of its own. There is no page for the product,
only for its versions. So anyone who opens `/<product-a>/` should be sent on to
a version. That is what the `_index.md` of a product is for:

```yaml
---
title: 'USP <Product A>'
linkTitle: '<Product A>'
layout: redirect
weight: 10
---
```

`layout: redirect` forwards the visitor to the current version and keeps the
address itself out of search engines. `linkTitle` is the short name shown in the
dropdown and the sidebar, `title` the longer one used for the browser tab.
`weight` puts the products in order, lowest first.

### A single product on the site

Put the version directories directly under the content root, with no product
directory around them:

```
content/en/
├── _index.md
├── latest/
├── 1.2.x/
└── 0.9.x/
```

The header then shows the site title where the product dropdown would be, and
only the version dropdown is left.

One rule to keep in mind: a `latest` directory at this level is how the theme
recognises a single-product site, so it has to be there even while there is
nothing under development yet. Without it the theme looks for products one level
down, finds none, and the navigation comes out empty.

### Versions

A version directory can be named however you release - `1.2.x`, `2.0`,
`v2.1.0`. Whatever you choose is what visitors read in the version dropdown, so
keep it short and use the same style throughout.

One name has a meaning: `latest` is the documentation being written for the next
release. It always comes first in the dropdown, and every page in it shows a
notice that this is not a release and can still change, with a link to the
current release.

Everything else counts as a release, listed newest first. They are ordered by
version number and not alphabetically, so `0.10.x` correctly ends up above
`0.5.x`, and a leading `v` makes no difference.

A site that writes its `latest` in the open but does not want to invite readers
into it can keep it out of the version dropdown:

```yaml
params:
  hideLatest: true
```

The pages stay published and keep working, links into them included, they are
only missing from the dropdown. It applies to every product on the site, so a
product whose only version is `latest` is left with no version dropdown at all.

### The version visitors land on

Anything that points at a product without naming a version:

* the forward from `/<product-a>/`
* the product dropdown
* the links on the landing page

lead to the newest release that is still maintained.
For a product that has no maintained release yet, it leads to `latest` instead.

### Landing page

The landing page can also be skipped altogether. Give the root `_index.md` a
`layout: redirect` and whoever opens the site is forwarded straight into the
newest version, the same way a product directory is on a multi-product site.

The logo then leads back to the top of the version being read.
Set `params.homepage` if the logo should leave the documentation entirely and that address wins in either shape.

### Marking a release end of life

List the releases you no longer maintain under `params.eol`, written the way
they appear in the URL:

```yaml
params:
  eol: ['<product-a>/0.9.x', '<product-b>/1.0.x']   # just '0.9.x' on a single-product site
```

Such a release stays online and stays in the version dropdown, so existing links
keep working, but every page in it shows a notice that it is no longer
maintained together with a link to the newest maintained release or to the
documentation under development, if that is all there is. It is also passed over
when visitors arrive without naming a version. A release that is merely older
than the newest one shows no notice.

### Pages inside a version

Inside a version the directory tree becomes the sidebar. Each directory appears
as a heading with its pages listed underneath, and `weight` in a page's front
matter decides the order among its neighbours. A page with `hidden: true` is
published as usual but left out of the sidebar.

The headings of a page make up the table of contents on the right. A page that
is better read without one says so in its front matter:

```yaml
toc: false
```

## Configuration

The following snippet is an example configuration:

```yaml
theme: usp-docs
title: 'USP <Product> documentation'
copyright: '&copy; 2026 United Security Providers AG. All Rights Reserved.'

# The full public address, path prefix included; every URL is built from it.
baseURL: 'https://docs.united-security-providers.ch/usp-<product>/'

disableKinds: ['taxonomy', 'term', 'rss']  # a documentation site needs none of these

defaultContentLanguage: en
defaultContentLanguageInSubdir: false
languages:
  en:
    contentDir: content/en

# These two blocks produce llms.txt and the markdown copy of every page.
outputFormats:
  llms:
    mediaType: text/plain
    baseName: llms
    isPlainText: true
  markdown:
    mediaType: text/markdown
    baseName: index
    isPlainText: true

outputs:
  home: ['html', 'llms', 'markdown']
  section: ['html', 'markdown']
  page: ['html', 'markdown']

markup:
  goldmark:
    renderer:
      unsafe: true                      # only if the content contains raw HTML

params:
  description: 'Documentation of the USP <Product>'
  logo: images/usp-logo.svg
  customStylesheet: stylesheets/site.css   # optional, in the site's own assets/
  contentMaxWidth: 48rem                   # optional, default 36.8rem
  eol: ['<product>/0.9.x']                 # releases no longer maintained
  search:
    enabled: true                          # needs the Pagefind index, see below
  social:
    - icon: linkedin                       # linkedin and youtube are bundled
      link: https://www.linkedin.com/company/united-security-providers/
      name: United Security Providers on Linkedin
```

`contentMaxWidth` caps how wide the content column in the middle can grow on
a wide window. It takes any CSS length, `48rem` or `900px` alike, and defaults
to `36.8rem`. The header, the footer and the two sidebars stay aligned with it.

Every page tells AI agents that the documentation is indexed at `llms.txt` and
that the page itself is available as markdown, so leaving the `outputFormats`
and `outputs` blocks out builds a site whose own pointers lead nowhere.

### Where the site is served

Every URL the site emits - navigation, canonical tags, the sitemap, `llms.txt` -
is built from `baseURL`, so it has to carry the path prefix the site is served
under. That ties a build to one address. To publish the same content elsewhere,
a preview of a branch or a staging host, build it again with that address:

```bash
hugo --baseURL https://preview.united-security-providers.ch/pr-412/
```

Links, sitemap and redirects all move together; nothing else needs changing.

### Moved pages

A page that has moved keeps its old address working by naming it in the front
matter, Hugo's built-in `aliases`:

```yaml
aliases:
  - /latest/install/
```

The path is written from the site root, without the prefix. Hugo publishes a
small redirect page at each old address, built from `baseURL` like everything
else.

## Code blocks

A fenced block with a language is highlighted, with nothing to configure:

````markdown
```yaml
server:
  tls: true
```
````

A fence without a language, or with one Chroma does not know, stays plain text.

### Turning the highlighting off

Highlighting is on unless the site says otherwise, and the switch is the site's
own `hugo.yaml`, in the `markup` block next to the `goldmark` settings above:

```yaml
markup:
  highlight:
    codeFences: false
```

It applies to the whole site, there is no per-page or per-block variant.

### Changing the colours

The colours belong to the theme, not to the site, so `markup.highlight.style` in
a site's configuration has no effect. They live in
`assets/stylesheets/highlight.css` of this repository, generated from the Chroma
`github` style. To move to another one, pick it from
https://gohugo.io/quick-reference/syntax-highlighting-styles/ and regenerate the
file:

```bash
hugo gen chromastyles --style=<style> > assets/stylesheets/highlight.css
```

The file is used exactly as generated: the theme overrides the background the
style brings along with its own, so a regenerated file needs no editing. Pick a
light style - the surrounding code block stays light. A single site that needs
its own colours instead can override the `.chroma` classes from its
`customStylesheet`, which is loaded last.

## Search

[Pagefind](https://pagefind.app/) indexes the built pages, so Hugo runs twice:

```bash
hugo --gc --cleanDestinationDir
pagefind --site public --output-path static/pagefind --root-selector 'article.usp-prose'
hugo --gc --cleanDestinationDir
```

The bundle goes to `static/pagefind` so that `hugo server` serves it too;
gitignore that path.

One index covers the whole site, but results stay where the reader is: a search
started on a page of `1.2.x` returns pages of `1.2.x` only. Where no version
applies - the landing page, the error page - the search instead covers the
current release of every product, plus the pages that belong to no product at
all.

## Working on the theme

The theme carries no content of its own, so it is developed against the two
example sites under `examples/`, one for each arrangement above - the same two
that CI builds:

```bash
make serve-multi-product
make serve-single-product
make clean
```

Both example sites carry a path prefix in their `baseURL`, so the server prints
an address that includes it - `http://localhost:1313/product-c/` and not the
bare root.
