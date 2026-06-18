(function () {
  "use strict";

  const metaEl = document.getElementById("slideMeta");
  const titleEl = document.getElementById("slideTitle");
  const notesEl = document.getElementById("notesText");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const presenterTimer = document.getElementById("presenterTimer");

  let total = 0;
  let current = 0;
  const openerOrigin = window.location.origin;

  function send(type, payload) {
    if (!window.opener || window.opener.closed) return;
    window.opener.postMessage(Object.assign({ type: type }, payload || {}), openerOrigin);
  }

  function formatNote(note) {
    return (note || "")
      .replace(/&#10;/g, "\n")
      .replace(/\r\n/g, "\n")
      .trim();
  }

  function updateView(data) {
    current = data.index;
    total = data.total;

    if (metaEl) metaEl.textContent = "Folie " + (current + 1) + " / " + total;
    if (titleEl) titleEl.textContent = data.title || "Folie " + (current + 1);

    const note = formatNote(data.note);
    if (notesEl) {
      notesEl.textContent = note || "Keine Sprechernotiz für diese Folie.";
      notesEl.classList.toggle("is-empty", !note);
    }

    if (prevBtn) prevBtn.disabled = current <= 0;
    if (nextBtn) nextBtn.disabled = current >= total - 1;
  }

  function updateTimer(data) {
    if (!presenterTimer) return;

    if (data.hidden) {
      presenterTimer.hidden = true;
      presenterTimer.setAttribute("aria-hidden", "true");
      return;
    }

    presenterTimer.hidden = false;
    presenterTimer.setAttribute("aria-hidden", "false");
    presenterTimer.textContent = data.display || "00:00";
    presenterTimer.classList.toggle("is-frozen", !!data.frozen);
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== window.location.origin) return;

    if (e.data.type === "slide-update") {
      updateView(e.data);
    }

    if (e.data.type === "timer-update") {
      updateTimer(e.data);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      send("nav-prev");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      send("nav-next");
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", function () {
      send("nav-fullscreen");
    });
  }

  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowRight":
      case " ":
      case "PageDown":
        e.preventDefault();
        send("nav-next");
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        send("nav-prev");
        break;
      case "f":
      case "F":
        e.preventDefault();
        send("nav-fullscreen");
        break;
      default:
        break;
    }
  });

  if (window.opener && !window.opener.closed) {
    window.opener.postMessage({ type: "presenter-ready" }, openerOrigin);
  }
})();
