var bm = document.getElementById('burgermenu');
var dd = document.getElementById('dropdownmob');

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


window.onscroll = function() {solidBar()};

var navbarswitch = document.getElementById('navbarswitch');
var topbar = document.getElementById('topbar');
var joe = document.getElementById('joe');
var sm = document.getElementById('smwd');

var pcaItems = document.getElementsByClassName('pca');
var pcaArray = [].slice.call(pcaItems);

var solid = navbarswitch.offsetTop;

function solidBar() {
  if (window.pageYOffset >= solid) {
    topbar.classList.add('solidnav')
    dd.classList.add('changedd')
    joe.classList.add('amendedjoe')
    sm.classList.add('smallsmwd');
    for (var j = 0; j < pcaArray.length; j++) {
      pcaArray[j].classList.add('changepca');
    }
  } else {
    topbar.classList.remove('solidnav')
    dd.classList.remove('changedd');
    joe.classList.remove('amendedjoe');
    sm.classList.remove('smallsmwd');    for (var j = 0; j < pcaArray.length; j++) {
          pcaArray[j].classList.remove('changepca');
        }
  }
}
