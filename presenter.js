(function () {
  "use strict";

  const statusEl = document.getElementById("presenterStatus");
  const metaEl = document.getElementById("slideMeta");
  const titleEl = document.getElementById("slideTitle");
  const notesEl = document.getElementById("notesText");
  const nextEl = document.getElementById("nextTitle");
  const jumpSelect = document.getElementById("slideJump");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const presenterTimer = document.getElementById("presenterTimer");

  let total = 0;
  let current = 0;
  const openerOrigin = window.location.origin;

  function setStatus(text, kind) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = "presenter-status" + (kind ? " is-" + kind : "");
  }

  function send(type, payload) {
    if (!window.opener || window.opener.closed) {
      setStatus("Präsentationsfenster nicht verbunden. Bitte index.html erneut öffnen.", "error");
      return;
    }
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

    if (nextEl) {
      nextEl.textContent = data.nextTitle ? "Als Nächstes: " + data.nextTitle : "Letzte Folie";
    }

    if (jumpSelect && jumpSelect.value !== String(current)) {
      jumpSelect.value = String(current);
    }

    if (prevBtn) prevBtn.disabled = current <= 0;
    if (nextBtn) nextBtn.disabled = current >= total - 1;

    setStatus("Verbunden — Steuerung über dieses Fenster.", "ok");
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

  function fillJumpList(slides) {
    if (!jumpSelect) return;
    jumpSelect.innerHTML = "";
    slides.forEach(function (slide) {
      const option = document.createElement("option");
      option.value = String(slide.index);
      option.textContent = (slide.index + 1) + ". " + slide.title;
      jumpSelect.appendChild(option);
    });
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== window.location.origin) return;

    switch (e.data.type) {
      case "init":
        fillJumpList(e.data.slides || []);
        break;
      case "slide-update":
        updateView(e.data);
        break;
      case "timer-update":
        updateTimer(e.data);
        break;
      default:
        break;
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

  if (jumpSelect) {
    jumpSelect.addEventListener("change", function () {
      send("nav-goto", { index: parseInt(jumpSelect.value, 10) });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.target.matches("select")) return;

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
      case "Home":
        e.preventDefault();
        send("nav-goto", { index: 0 });
        break;
      case "End":
        e.preventDefault();
        send("nav-goto", { index: total - 1 });
        break;
      default:
        break;
    }
  });

  if (window.opener && !window.opener.closed) {
    setStatus("Verbinde mit Präsentation …", "");
    window.opener.postMessage({ type: "presenter-ready" }, openerOrigin);
  } else {
    setStatus("Kein Präsentationsfenster gefunden. Bitte zuerst index.html öffnen.", "error");
  }
})();
