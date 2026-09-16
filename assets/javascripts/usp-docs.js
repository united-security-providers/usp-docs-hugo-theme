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
  const dialogImage = dialog && dialog.querySelector(".usp-lightbox__image");

  if (dialog && dialogImage) {
    const open = (img) => {
      dialogImage.src = img.currentSrc || img.src;
      dialogImage.alt = img.alt;
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
      button.addEventListener("click", () => open(img));
    };

    document.querySelectorAll(".usp-prose img").forEach((img) => {
      if (img.closest("a")) return;
      if (img.complete) makeZoomable(img);
      else img.addEventListener("load", () => makeZoomable(img), { once: true });
    });

    dialog.querySelector(".usp-lightbox__close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      dialogImage.src = "";
    });
  }
})();
