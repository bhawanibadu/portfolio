//Get the language button
const langBtn= document.getElementByID('langBtn')

//Get all English and Japanese elements
const enElements = document.querySelectorAll('.en');
const jaElements = document.querySelectorAll('.ja');

//Start with English
let isEnglish = true;

// when button is clicked
langBtn.addEventListener('click',function() {
  if(isEnglish) {
    //switch to japanese
    enElements.forEach(function(en) {
      el.style.display = 'none';
    });
    jaElements.forEach(function(ja) {
      el.style.dispaly = 'inline';
    });
    langBtn.textcontent = 'GB English';
    isEnglish = false;
  } else {
    //Switch to English
    enElements.forEach(function(el){
      el.style.display = 'inline';
    });
    jaElements.forEach(function(ja){
      el.style.display='none';
    });
    langBtn.textcontent= 'JP 日本語';
    isEnglish = true;
  }
});
    



       
