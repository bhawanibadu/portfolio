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

