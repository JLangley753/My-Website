var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
};

window.onscroll = function() {
  secASlide();
  secBSlide();
  secCSlide();
};

function secASlide() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById('secATab').className = "section-a tabs secaactive";
} else {
  document.getElementById('secATab').className = 'section-a tabs';
}
};

function secBSlide() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
document.getElementById('secBTab').className = "section-b tabs secbactive";
} else {
  document.getElementById('secBTab').className = 'section-b tabs';
}
};

function secCSlide() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
document.getElementById('secCTab').className = "section-c tabs seccactive";
} else {
  document.getElementById('secCTab').className = 'section-c tabs';
}
};
