(function () {
  "use strict";

  function loadVideo(container) {
    var id = container.getAttribute("data-yt-id");
    var title = container.getAttribute("data-yt-title") || "YouTube video";
    if (!id) return;

    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(id) +
        "?autoplay=1&rel=0"
    );
    iframe.setAttribute("title", title);
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

    container.innerHTML = "";
    container.classList.add("yt-embed--loaded");
    container.appendChild(iframe);
  }

  function init() {
    var nodes = document.querySelectorAll(".yt-embed");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var btn = node.querySelector(".yt-embed__btn");
      if (!btn) continue;
      btn.addEventListener("click", function (container) {
        return function () {
          loadVideo(container);
        };
      }(node));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
