// ============================
// Language Toggle
// ============================

const langBtn = document.getElementById("langBtn");

const enElements = document.querySelectorAll(".en");
const jaElements = document.querySelectorAll(".ja");

let isEnglish = true;

langBtn.addEventListener("click", () => {

  if (isEnglish) {

    enElements.forEach(el => {
      el.style.display = "none";
    });

    jaElements.forEach(el => {
      el.style.display = "inline";
    });

    langBtn.innerHTML = "English";

    isEnglish = false;

  } else {

    enElements.forEach(el => {
      el.style.display = "inline";
    });

    jaElements.forEach(el => {
      el.style.display = "none";
    });

    langBtn.innerHTML = "日本語";

    isEnglish = true;
  }
});


// ============================
// Scroll Reveal Animation
// ============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {

  section.classList.add("hidden");

  observer.observe(section);

});


// ============================
// Neon Active Section Effect
// ============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 200;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  sections.forEach((section) => {

    if (section.getAttribute("id") === current) {

      section.style.boxShadow =
        "0 0 40px rgba(0,191,255,0.25)";

      section.style.borderColor =
        "rgba(0,191,255,0.4)";

    } else {

      section.style.boxShadow =
        "0 0 30px rgba(0,191,255,0.08)";

      section.style.borderColor =
        "rgba(255,255,255,0.08)";
    }

  });

});


// ============================
// Mouse Glow Effect
// ============================

document.addEventListener("mousemove", (e) => {

  const glow = document.querySelector(".cursor-glow");

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


// ============================
// Floating Cards Animation
// ============================

const cards = document.querySelectorAll(
  ".skill-card, .project-item, .stat-box"
);

cards.forEach((card, index) => {

  card.style.animation =
    `float 4s ease-in-out infinite`;

  card.style.animationDelay =
    `${index * 0.2}s`;

});


