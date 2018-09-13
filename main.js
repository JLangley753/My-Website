var bm = document.getElementById('burgermenu');
var dd = document.getElementById('dropdown');
var bar1 = document.querySelector('.bar1');
var bar2 = document.querySelector('.bar2');
var bar3 = document.querySelector('.bar3');

bm.onclick = openMenu;

function openMenu() {
  dd.classList.toggle('ddshow'); //Toggles dropdown menu
  bar1.classList.toggle('changebar1');
  bar2.classList.toggle('changebar2');
  bar3.classList.toggle('changebar3');
};
