/* Table-of-contents highlighting and the image lightbox. Everything else - drawer,
   navigation, version selector - is markup and CSS, and the search is a Pagefind
   component. */
(function () {
  "use strict";

  const tocLinks = [...document.querySelectorAll('.usp-toc a[href^="#"]')]
    .map((link) => [link, document.getElementById(decodeURIComponent(link.hash.slice(1)))])
    .filter(([, heading]) => heading);

  if (tocLinks.length) {
    /* The line the current heading is measured against: just below the header. */
    const header = document.querySelector(".usp-header");
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const highlight = () => {
      const line = (header ? header.offsetHeight : 0) + rem;
      const current = tocLinks.findLastIndex(([, h]) => h.getBoundingClientRect().top <= line);
      tocLinks.forEach(([link], i) => {
        link.classList.toggle("usp-toc--active", i === current);
        link.classList.toggle("usp-toc--passed", i < current);
      });
    };
    addEventListener("scroll", highlight, { passive: true });
    highlight();
  }

  const dialog = document.querySelector("dialog.usp-lightbox");
  const dialogBody = dialog && dialog.querySelector(".usp-lightbox__body");

  if (dialog && dialogBody) {
    const open = (content) => {
      dialogBody.replaceChildren(content);
      dialog.showModal();
    };

    /* An image only earns a zoom affordance once we know it's actually being
       scaled down - i.e. expanding it would show more detail. */
    const makeZoomable = (img) => {
      if (img.naturalWidth <= img.clientWidth && img.naturalHeight <= img.clientHeight) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "usp-zoomable";
      button.setAttribute("aria-label", "Expand image");
      img.replaceWith(button);
      button.append(img);
      button.addEventListener("click", () => {
        const preview = document.createElement("img");
        preview.className = "usp-lightbox__image";
        preview.src = img.currentSrc || img.src;
        preview.alt = img.alt;
        open(preview);
      });
    };

    document.querySelectorAll(".usp-prose img").forEach((img) => {
      if (img.closest("a")) return;
      if (img.complete) makeZoomable(img);
      else img.addEventListener("load", () => makeZoomable(img), { once: true });
    });

    const expandIcon =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm16 0v6h-6v-2h4v-4h2z"/></svg>';

    /* A table only earns an expand button once we know it's actually
       overflowing - regardless of whether it's a Markdown table (wrapped in
       .usp-table by the render hook) or a raw HTML table pasted into the
       content (which isn't). */
    document.querySelectorAll(".usp-prose table").forEach((table) => {
      if (table.scrollWidth <= table.clientWidth) return;

      let wrapper = table.closest(".usp-table");
      if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.className = "usp-table";
        table.replaceWith(wrapper);
        wrapper.append(table);
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "usp-table__expand";
      button.setAttribute("aria-label", "Expand table");
      button.innerHTML = expandIcon;
      wrapper.append(button);
      button.addEventListener("click", () => {
        const clone = wrapper.cloneNode(true);
        clone.querySelector(".usp-table__expand")?.remove();
        const container = document.createElement("div");
        container.className = "usp-prose";
        container.append(clone);
        open(container);
      });
    });

    dialog.querySelector(".usp-lightbox__close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      dialogBody.replaceChildren();
    });
  }
})();
