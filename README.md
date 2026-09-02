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

### The version visitors land on

Anything that points at a product without naming a version:

* the forward from `/<product-a>/`
* the product dropdown
* the links on the landing page

lead to the newest release that is still maintained.
For a product that has no maintained release yet, it leads to `latest` instead.

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

## Configuration

The following snippet is an example configuration:

```yaml
theme: usp-docs
title: 'USP <Product> documentation'
copyright: '&copy; 2026 United Security Providers AG. All Rights Reserved.'

# Bare baseURL plus relativeURLs, so the output works under any path prefix.
baseURL: 'https://docs.united-security-providers.ch/'
relativeURLs: true

defaultContentLanguage: en
defaultContentLanguageInSubdir: false
languages:
  en:
    contentDir: content/en

markup:
  goldmark:
    renderer:
      unsafe: true                      # only if the content contains raw HTML

params:
  canonicalBase: 'https://docs.united-security-providers.ch/usp-<product>/'
  description: 'Documentation of the USP <Product>'
  logo: images/USP-Logo-2023-ohne-claim-lang-white1.webp
  customStylesheet: stylesheets/site.css   # optional, in the site's own assets/
  eol: ['<product>/0.9.x']                 # releases no longer maintained
  search:
    enabled: true                          # needs the Pagefind index, see below
  social:
    - icon: linkedin                       # linkedin and youtube are bundled
      link: https://www.linkedin.com/company/united-security-providers/
      name: United Security Providers on Linkedin
```

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
