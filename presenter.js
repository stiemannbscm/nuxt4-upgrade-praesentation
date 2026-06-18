(function () {
  "use strict";

  const metaEl = document.getElementById("slideMeta");
  const titleEl = document.getElementById("slideTitle");
  const notesEl = document.getElementById("notesText");
  const jumpSelect = document.getElementById("slideJump");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const presenterTimer = document.getElementById("presenterTimer");
  const presenterExtra = document.getElementById("presenterExtra");
  const glossaryBlock = document.getElementById("glossaryBlock");
  const glossaryList = document.getElementById("glossaryList");
  const faqBlock = document.getElementById("faqBlock");
  const faqList = document.getElementById("faqList");

  let total = 0;
  let current = 0;
  const openerOrigin = window.location.origin;
  const guide = window.PRESENTER_GUIDE || {};

  function focusPresenter() {
    window.focus();
    if (document.body) document.body.focus();
  }

  function send(type, payload) {
    if (!window.opener || window.opener.closed) return false;
    window.opener.postMessage(Object.assign({ type: type }, payload || {}), openerOrigin);
    return true;
  }

  function formatNote(note) {
    return (note || "")
      .replace(/&#10;/g, "\n")
      .replace(/\r\n/g, "\n")
      .trim();
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
    jumpSelect.value = String(current);
  }

  function renderGlossary(items) {
    if (!glossaryList || !glossaryBlock) return;
    glossaryList.innerHTML = "";

    if (!items || !items.length) {
      glossaryBlock.hidden = true;
      return;
    }

    items.forEach(function (item) {
      const dt = document.createElement("dt");
      dt.textContent = item.term;
      const dd = document.createElement("dd");
      dd.textContent = item.desc;
      glossaryList.appendChild(dt);
      glossaryList.appendChild(dd);
    });

    glossaryBlock.hidden = false;
  }

  function renderFaq(items) {
    if (!faqList || !faqBlock) return;
    faqList.innerHTML = "";

    if (!items || !items.length) {
      faqBlock.hidden = true;
      return;
    }

    items.forEach(function (item) {
      const article = document.createElement("article");
      article.className = "presenter-faq__item";

      const question = document.createElement("p");
      question.className = "presenter-faq__question";
      question.textContent = item.q;

      const answer = document.createElement("p");
      answer.className = "presenter-faq__answer";
      answer.textContent = item.a;

      article.appendChild(question);
      article.appendChild(answer);
      faqList.appendChild(article);
    });

    faqBlock.hidden = false;
  }

  function renderGuide(index) {
    const slideGuide = guide[index] || {};
    const glossary = slideGuide.glossary || [];
    const faq = slideGuide.faq || [];

    renderGlossary(glossary);
    renderFaq(faq);

    if (presenterExtra) {
      presenterExtra.hidden = !glossary.length && !faq.length;
    }
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

    renderGuide(current);

    if (jumpSelect && jumpSelect.value !== String(current)) {
      jumpSelect.value = String(current);
    }

    if (prevBtn) prevBtn.disabled = current <= 0;
    if (nextBtn) nextBtn.disabled = current >= total - 1;

    if (data.timer) {
      updateTimer(data.timer);
    }
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

  function nav(type, payload) {
    send(type, payload);
    focusPresenter();
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      nav("nav-prev");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      nav("nav-next");
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", function () {
      nav("nav-fullscreen");
    });
  }

  if (jumpSelect) {
    jumpSelect.addEventListener("change", function () {
      nav("nav-goto", { index: parseInt(jumpSelect.value, 10) });
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.target.matches("select, input, textarea")) return;
    if (e.key === " " && e.target.matches("button")) return;

    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
        e.preventDefault();
        nav("nav-next");
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        nav("nav-prev");
        break;
      case " ":
        e.preventDefault();
        nav("nav-next");
        break;
      case "Home":
        e.preventDefault();
        nav("nav-goto", { index: 0 });
        break;
      case "End":
        e.preventDefault();
        nav("nav-goto", { index: total - 1 });
        break;
      case "f":
      case "F":
        e.preventDefault();
        nav("nav-fullscreen");
        break;
      default:
        break;
    }
  });

  document.body.setAttribute("tabindex", "-1");
  focusPresenter();

  if (window.opener && !window.opener.closed) {
    window.opener.postMessage({ type: "presenter-ready" }, openerOrigin);
  }
})();
