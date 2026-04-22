(function () {
  function getCodeText(block) {
    var codeEl =
      block.querySelector(".lntd:last-child pre code") ||
      block.querySelector(".highlight pre code") ||
      block.querySelector("pre code");
    return codeEl ? codeEl.innerText : "";
  }

  function addCopyButton(block) {
    var header = block.querySelector(".code-block-header");
    if (!header) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy-btn";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML =
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
      '<rect x="5" y="5" width="8" height="9" rx="1.5"/>' +
      '<path d="M3 11V3.5A1.5 1.5 0 0 1 4.5 2H11"/>' +
      "</svg>";

    btn.addEventListener("click", function () {
      var text = getCodeText(block);
      if (!text) return;
      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add("is-copied");
        btn.setAttribute("aria-label", "Copied!");
        setTimeout(function () {
          btn.classList.remove("is-copied");
          btn.setAttribute("aria-label", "Copy code");
        }, 2000);
      });
    });

    header.appendChild(btn);
  }

  function init() {
    document.querySelectorAll(".code-block").forEach(addCopyButton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
