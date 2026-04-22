(function () {
  function openLightbox(src, alt) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", alt || "Image preview");

    var img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "lightbox-close";
    close.setAttribute("aria-label", "Close image preview");
    close.textContent = "\u2715";

    box.appendChild(img);
    box.appendChild(close);
    document.body.appendChild(box);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(function () {
      box.classList.add("is-open");
    });

    function dismiss() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () {
        if (box.parentNode) box.parentNode.removeChild(box);
        document.removeEventListener("keydown", onKey);
      }, 180);
    }

    function onKey(e) {
      if (e.key === "Escape") dismiss();
    }

    box.addEventListener("click", function (e) {
      if (e.target === img) return;
      dismiss();
    });
    close.addEventListener("click", dismiss);
    document.addEventListener("keydown", onKey);
  }

  function init() {
    var imgs = document.querySelectorAll(".prose img");
    imgs.forEach(function (img) {
      if (img.dataset.noZoom !== undefined) return;
      img.addEventListener("click", function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
