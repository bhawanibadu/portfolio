// Get the language button
const langBtn = document.getElementById('langBtn');

// Get all English and Japanese elements
const enElements = document.querySelectorAll('.en');
const jaElements = document.querySelectorAll('.ja');

// Start with English
let isEnglish = true;

// When button is clicked
langBtn.addEventListener('click', function() {
  if (isEnglish) {
    // Switch to Japanese
    enElements.forEach(function(el) {
      el.style.display = 'none';
    });
    jaElements.forEach(function(el) {
      el.style.display = 'inline';
    });
    langBtn.textContent = '🇬🇧 English';
    isEnglish = false;
  } else {
    // Switch to English
    enElements.forEach(function(el) {
      el.style.display = 'inline';
    });
    jaElements.forEach(function(el) {
      el.style.display = 'none';
    });
    langBtn.textContent = '🇯🇵 日本語';
    isEnglish = true;
  }
});

// Scroll animation
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Active nav highlight
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  sections.forEach(function(section) {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      section.style.borderLeft = '3px solid #00ff88';
    } else {
      section.style.borderLeft = 'none';
    }
  });
});
