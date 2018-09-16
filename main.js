var bm = document.getElementById('burgermenu');
var dd = document.getElementById('dropdown');

var bars = document.getElementsByClassName('bar');
var barsArray = [].slice.call(bars);

bm.onclick = openMenu

function openMenu() {
  dd.classList.toggle('ddshow');
  for (var i = 0; i < barsArray.length; i++) {
    barsArray[i].classList.toggle('changebar' + [i+1]);
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* Disused for the time being

window.onscroll = function() {stickyNav()};

 var navbarswitch = document.getElementById('navbarswitch');
var navbar = document.getElementById('navbar');

var sticky = navbarswitch.offsetTop

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('stickynav')
  } else {
    navbar.classList.remove('stickynav');
  }
}

*/
