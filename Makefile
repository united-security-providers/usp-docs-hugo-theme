HUGO_VERSION := 0.165.0
PAGEFIND_VERSION := 1.5.2

BIN := bin
HUGO := $(BIN)/hugo-$(HUGO_VERSION)
PAGEFIND := $(BIN)/pagefind-$(PAGEFIND_VERSION)

HUGO_BASE := https://github.com/gohugoio/hugo/releases/download/v$(HUGO_VERSION)
HUGO_ASSET := hugo_extended_$(HUGO_VERSION)_linux-amd64.tar.gz
PAGEFIND_BASE := https://github.com/Pagefind/pagefind/releases/download/v$(PAGEFIND_VERSION)
PAGEFIND_ASSET := pagefind_extended-v$(PAGEFIND_VERSION)-x86_64-unknown-linux-musl.tar.gz

EXAMPLES := multi-product single-product
THEMES_DIR := $(CURDIR)/examples/themes
HUGO_FLAGS := --themesDir $(THEMES_DIR) --gc --cleanDestinationDir --panicOnWarning

.PHONY: download-tools
download-tools: $(HUGO) $(PAGEFIND)

$(HUGO):
	@mkdir -p $(BIN)
	@echo "Fetching Hugo $(HUGO_VERSION) into $(BIN)/"
	@tmp=$$(mktemp -d) && trap 'rm -rf "$$tmp"' EXIT && \
	  curl -sSfL -o "$$tmp/asset" "$(HUGO_BASE)/$(HUGO_ASSET)" && \
	  curl -sSfL "$(HUGO_BASE)/hugo_$(HUGO_VERSION)_checksums.txt" \
	    | grep " $(HUGO_ASSET)$$" | sed 's|$(HUGO_ASSET)|asset|' > "$$tmp/sum" && \
	  (cd "$$tmp" && sha256sum -c sum > /dev/null) && \
	  tar -xzf "$$tmp/asset" -C "$$tmp" hugo && \
	  mv "$$tmp/hugo" "$@" && chmod +x "$@"

$(PAGEFIND):
	@mkdir -p $(BIN)
	@echo "Fetching Pagefind $(PAGEFIND_VERSION) into $(BIN)/"
	@tmp=$$(mktemp -d) && trap 'rm -rf "$$tmp"' EXIT && \
	  curl -sSfL -o "$$tmp/asset" "$(PAGEFIND_BASE)/$(PAGEFIND_ASSET)" && \
	  curl -sSfL "$(PAGEFIND_BASE)/$(PAGEFIND_ASSET).sha256" \
	    | sed 's|$(PAGEFIND_ASSET)|asset|' > "$$tmp/sum" && \
	  (cd "$$tmp" && sha256sum -c sum > /dev/null) && \
	  tar -xzf "$$tmp/asset" -C "$$tmp" pagefind_extended && \
	  mv "$$tmp/pagefind_extended" "$@" && chmod +x "$@"

# The theme has no content of its own, so every target works on one of the
# example sites under examples/ - the same two the README describes.
BUILD_TARGETS := $(addprefix build-,$(EXAMPLES))
SERVE_TARGETS := $(addprefix serve-,$(EXAMPLES))

.PHONY: $(BUILD_TARGETS)
$(BUILD_TARGETS): build-%: download-tools
	$(HUGO) --source examples/$* $(HUGO_FLAGS)
	rm -rf examples/$*/static/pagefind
	$(PAGEFIND) --site examples/$*/public \
	            --output-path examples/$*/static/pagefind \
	            --root-selector 'article.usp-prose'
	$(HUGO) --source examples/$* $(HUGO_FLAGS)

.PHONY: $(SERVE_TARGETS)
$(SERVE_TARGETS): serve-%: build-%
	$(HUGO) server --source examples/$* --themesDir $(THEMES_DIR)

.PHONY: build-all
build-all: $(BUILD_TARGETS)

.PHONY: clean
clean:
	rm -rf $(foreach site,$(EXAMPLES),examples/$(site)/public \
	                                  examples/$(site)/resources \
	                                  examples/$(site)/static/pagefind \
	                                  examples/$(site)/.hugo_build.lock)

.PHONY: clean-tools
clean-tools:
	rm -rf $(BIN)
