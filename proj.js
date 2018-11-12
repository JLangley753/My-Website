var tmcslideIndex = 0;
var xoslideIndex = 0;
var jcslidesIndex = 0;
var aftvslidesIndex = 0;
var boxslidesIndex = 0;
showXOSlides();
showTMCSlides();
showJCslides();
showAFTVslides();
showboxslides();

function showTMCSlides() {
  var i;
  var slides = document.getElementsByClassName("tmcslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  tmcslideIndex++;
  if (tmcslideIndex > slides.length) {
    tmcslideIndex = 1
  }
  slides[tmcslideIndex - 1].style.display = "block";
  setTimeout(showTMCSlides, 9000);
};

function showXOSlides() {
  var i;
  var slides = document.getElementsByClassName("xoslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  xoslideIndex++;
  if (xoslideIndex > slides.length) {
    xoslideIndex = 1
  }
  slides[xoslideIndex - 1].style.display = "block";
  setTimeout(showXOSlides, 9000);
};

function showJCslides() {
  var i;
  var slides = document.getElementsByClassName("jcslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  jcslidesIndex++;
  if (jcslidesIndex > slides.length) {
    jcslidesIndex = 1
  }
  slides[jcslidesIndex - 1].style.display = "block";
  setTimeout(showJCslides, 9000);
};

function showAFTVslides() {
  var i;
  var slides = document.getElementsByClassName("aftvslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  aftvslidesIndex++;
  if (aftvslidesIndex > slides.length) {
    aftvslidesIndex = 1
  }
  slides[aftvslidesIndex - 1].style.display = "block";
  setTimeout(showAFTVslides, 9000);
};

function showboxslides() {
  var i;
  var slides = document.getElementsByClassName("boxslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  boxslidesIndex++;
  if (boxslidesIndex > slides.length) {
    boxslidesIndex = 1
  }
  slides[boxslidesIndex - 1].style.display = "block";
  setTimeout(showboxslides, 9000);
};
