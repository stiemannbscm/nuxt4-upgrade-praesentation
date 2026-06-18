(function () {
  "use strict";

  const STAGE_W = 1920;
  const STAGE_H = 1080;

  const viewport = document.getElementById("viewport");
  const stage = document.getElementById("stage");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const progressBar = document.getElementById("progressBar");
  const slideCounter = document.getElementById("slideCounter");
  const agendaViewport = document.getElementById("chromeAgendaViewport");
  const agendaTrack = document.getElementById("chromeAgendaTrack");
  const notesPanel = document.getElementById("speakerNotes");
  const notesText = document.getElementById("notesText");
  const help = document.getElementById("help");
  const presentation = document.getElementById("presentation");
  const chrome = document.querySelector(".chrome");

  if (!slides.length) return;

  let current = 0;
  let notesVisible = false;
  let agendaItems = [];
  let navSlideIndices = [];

  function fitStage() {
    if (!viewport || !stage) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / STAGE_W, vh / STAGE_H);
    stage.style.transform = "scale(" + scale + ")";
  }

  function getSlideTitle(slide, index) {
    const h2 = slide.querySelector(".slide-header h2");
    if (h2) return h2.textContent.trim();

    const h1 = slide.querySelector(".slide-title__content h1");
    if (h1) {
      const text = h1.textContent.trim();
      if (slide.classList.contains("slide--title") && index > 0) {
        return "Fragen & Danke";
      }
      return text;
    }

    return "Folie " + (index + 1);
  }

  function buildAgendaFromSlides() {
    if (!agendaTrack) return;

    agendaTrack.innerHTML = "";
    agendaItems = [];
    navSlideIndices = [];

    slides.forEach(function (slide, index) {
      if (index === 0) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "chrome-agenda__item";
      button.dataset.slide = String(index);

      const title = document.createElement("span");
      title.className = "chrome-agenda__title";
      title.textContent = getSlideTitle(slide, index);
      button.appendChild(title);

      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        updateSlide(index);
        button.blur();
      });
      button.addEventListener("pointerdown", function (e) {
        e.stopPropagation();
      });

      agendaTrack.appendChild(button);
      agendaItems.push(button);
      navSlideIndices.push(index);
    });
  }

  function findAgendaItemIndex(slideIndex) {
    return navSlideIndices.indexOf(slideIndex);
  }

  function isLastSlide(index) {
    return index === slides.length - 1;
  }

  function updateAgendaFade() {
    if (!agendaViewport || !agendaTrack || !chrome) return;

    if (chrome.classList.contains("chrome--agenda-expanded")) {
      agendaViewport.classList.remove("fade-left", "fade-right");
      return;
    }

    const maxScroll = agendaTrack.scrollWidth - agendaViewport.clientWidth;
    if (maxScroll <= 4) {
      agendaViewport.classList.remove("fade-left", "fade-right");
      return;
    }

    agendaViewport.classList.toggle("fade-left", agendaTrack.scrollLeft > 8);
    agendaViewport.classList.toggle("fade-right", agendaTrack.scrollLeft < maxScroll - 8);
  }

  function scrollAgendaToActive(slideIndex) {
    if (!agendaViewport || !agendaTrack || slideIndex <= 0) return;

    if (chrome && chrome.classList.contains("chrome--agenda-expanded")) {
      agendaTrack.scrollLeft = 0;
      updateAgendaFade();
      return;
    }

    const itemIndex = findAgendaItemIndex(slideIndex);
    const activeItem = agendaItems[itemIndex];
    if (!activeItem) return;

    const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
    const targetScroll = itemCenter - agendaViewport.clientWidth / 2;
    const maxScroll = Math.max(0, agendaTrack.scrollWidth - agendaViewport.clientWidth);

    agendaTrack.scrollTo({
      left: Math.min(maxScroll, Math.max(0, targetScroll)),
      behavior: "smooth",
    });

    window.setTimeout(updateAgendaFade, 280);
  }

  function updateAgendaNav(slideIndex) {
    const expanded = isLastSlide(slideIndex);
    const activeItemIndex = findAgendaItemIndex(slideIndex);

    if (chrome) chrome.classList.toggle("chrome--agenda-expanded", expanded);

    agendaItems.forEach(function (item, i) {
      item.classList.remove("active", "done");
      if (slideIndex <= 0 || activeItemIndex < 0) return;
      if (i === activeItemIndex) item.classList.add("active");
      else if (i < activeItemIndex) item.classList.add("done");
    });

    scrollAgendaToActive(slideIndex);
    updateAgendaFade();
  }

  function isOpeningSlide(index) {
    return index === 0;
  }

  function updateChrome(index) {
    const hideChrome = isOpeningSlide(index);

    if (stage) stage.classList.toggle("stage--chrome-hidden", hideChrome);
    if (chrome) chrome.hidden = hideChrome;

    if (!hideChrome && progressBar) {
      progressBar.style.width = ((index + 1) / slides.length) * 100 + "%";
    }
  }

  function updateSlideCounter(index) {
    if (!slideCounter) return;

    const slide = slides[index];
    if (slide.classList.contains("slide--title")) {
      slideCounter.hidden = true;
      slideCounter.setAttribute("aria-hidden", "true");
      return;
    }

    slideCounter.hidden = false;
    slideCounter.setAttribute("aria-hidden", "false");
    slideCounter.textContent = (index + 1) + " / " + slides.length;
  }

  function updateSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach(function (slide, i) {
      slide.classList.remove("active", "prev");
      if (i === index) slide.classList.add("active");
      else if (i < index) slide.classList.add("prev");
    });

    current = index;
    if (notesText) notesText.textContent = slides[index].dataset.note || "";
    updateAgendaNav(index);
    updateChrome(index);
    updateSlideCounter(index);
  }

  function next() {
    if (current < slides.length - 1) updateSlide(current + 1);
  }

  function prev() {
    if (current > 0) updateSlide(current - 1);
  }

  function toggleNotes() {
    notesVisible = !notesVisible;
    if (notesPanel) notesPanel.hidden = !notesVisible;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen();
    }
  }

  buildAgendaFromSlides();

  if (agendaTrack) {
    agendaTrack.addEventListener("scroll", updateAgendaFade, { passive: true });
  }

  if (chrome) {
    chrome.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.target.matches("input, textarea")) return;

    switch (e.key) {
      case "ArrowRight":
      case " ":
      case "PageDown":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        updateSlide(0);
        break;
      case "End":
        e.preventDefault();
        updateSlide(slides.length - 1);
        break;
      case "n":
      case "N":
        toggleNotes();
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      default:
        break;
    }
  });

  if (presentation) {
    presentation.addEventListener("click", function (e) {
      if (e.target.closest("button, a, code")) return;

      var rect = presentation.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      if (x < 0.2) prev();
      else if (x > 0.8) next();
    });
  }

  if (help) {
    setTimeout(function () {
      help.classList.add("hidden");
    }, 6000);
  }

  window.addEventListener("resize", function () {
    fitStage();
    scrollAgendaToActive(current);
    updateAgendaFade();
  });
  document.addEventListener("fullscreenchange", fitStage);

  fitStage();
  updateSlide(0);
})();
