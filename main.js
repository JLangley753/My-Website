var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
};

window.onscroll = function() {
  showWhatDo();
  secASlide();
  secBSlide();
  secCSlide();
  showBullet();
};

function showWhatDo() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('whatwedo').className = "whatwedoactive";
  } else {
    document.getElementById('whatwedo').className = 'whatwedo';
  }
};

function secASlide() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById('secATab').className = "section-a tabs secaactive";
  } else {
    document.getElementById('secATab').className = 'section-a tabs';
  }
};

function secBSlide() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById('secBTab').className = "section-b tabs secbactive";
  } else {
    document.getElementById('secBTab').className = 'section-b tabs';
  }
};

function secCSlide() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('secCTab').className = "section-c tabs seccactive";
  } else {
    document.getElementById('secCTab').className = 'section-c tabs';
  }
};

function showBullet() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById('bullet').className = "bulletactive";
  } else {
    document.getElementById('bullet').className = 'bullet';
  }
};
