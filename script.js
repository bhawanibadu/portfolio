const langBtn = document.getElementById('langBtn');
const enElements = document.querySelectorAll('.en');
const jaElements = document.querySelectorAll('.ja');

let isEnglish = true;

langBtn.addEventListener('click', function() {
  if (isEnglish) {
    enElements.forEach(function(el) {
      el.style.display = 'none';
    });
    jaElements.forEach(function(el) {
      el.style.display = 'inline';
    });
    langBtn.textContent = '🇬🇧 English';
    isEnglish = false;
  } else {
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
