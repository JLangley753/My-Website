// Open burger menu and play dropdown menu animation on click

var bm = document.querySelector('.bm'); // burger menu
var dd = document.querySelector('.dd'); // dropdowm menu
var bars = document.getElementsByClassName('bar');
var barsArray = [].slice.call(bars);

bm.onclick = openMenu;

function openMenu() {

  dd.classList.toggle('ddshow');
  for (var i = 0; i < barsArray.length; i++) {
    barsArray[i].classList.toggle('changebar' + [i + 1]);
  }
}

// Scroll to section on click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    setTimeout(function closeMenu() {
      dd.classList.remove('ddshow');
      for (var i = 0; i < barsArray.length; i++) {
        barsArray[i].classList.remove('changebar' + [i + 1]);
      }
    }, 600);
  });
});

// Change navbar appearance on scroll

window.onscroll = function() {
  solidBar();
};

function solidBar() {
  var navbarswitch = document.querySelector('.navbarswitch');
  var topbar = document.querySelector('.tb');
  var joe = document.querySelector('.lj');
  var sm = document.querySelector('.smwd');

  var navlinkItems = document.getElementsByClassName('navlink');
  var nlArray = [].slice.call(navlinkItems);

  var solid = navbarswitch.offsetTop;

  if (window.pageYOffset >= solid) {
    topbar.classList.add('solidnav');
    dd.classList.add('changedd');
    joe.classList.add('amendedjoe');
    sm.classList.add('smallsmwd');
    for (var j = 0; j < nlArray.length; j++) {
      nlArray[j].classList.add('changenavlink');
    }
  } else {
    topbar.classList.remove('solidnav');
    dd.classList.remove('changedd');
    joe.classList.remove('amendedjoe');
    sm.classList.remove('smallsmwd');
    for (var k = 0; k < nlArray.length; k++) {
      nlArray[k].classList.remove('changenavlink');
    }
  }
}

// Slideshow arrow functions

var projIndex = 1;
showProj(projIndex);

function projCardSwitcher(n) {
  showProj(projIndex += n);
}

function currentProj(n) {
  showProj(projIndex = n);
}

function showProj(n) {
  var projects = document.getElementsByClassName('projectcard');
  if (n > projects.length) {
    projIndex = 1;
  }
  if (n < 1) {
    projIndex = projects.length;
  }
  for (var k = 0; k < projects.length; k++) {
    projects[k].classList.add('deactivecard');
    projects[k].classList.remove('activecard');
  }
  projects[projIndex - 1].classList.remove('deactivecard');
  projects[projIndex - 1].classList.add('activecard');
}

// Modal controls

var modal = document.getElementById('myModal');
var form = document.getElementById('contactform');
var sadmodal = document.getElementById('sadModal');

function thankyoumodal() {
  modal.classList.add('showmodal');
  setTimeout(function autoclose() {
    modal.classList.remove('showmodal');
    form.reset();
  }, 3000);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('showmodal');
  }
}

function validateForm() {
  var a = document.forms['contactform']['name'].value;
  var b = document.forms['contactform']['mail'].value;
  var c = document.forms['contactform']['howicanhelp'].value;
  if (!a || !b || !c) {
    sadmodal.classList.add('showmodal');
    setTimeout(function autoclosesad() {
      sadmodal.classList.remove('showmodal');
    }, 2800);
  } else if (a || b || c) {
    $.ajax({
      type: 'POST',
      url: 'email.php',
      data: $('#contactform').serialize(),
      success: function() {
        console.log("Form submitted");
        thankyoumodal();
      },
      error: function() {
        console.log("Form submission unsuccessful");
      }
    });
  }
}

$(document).ready(function() {
  $('#contactbutton').click(function(e) {
    e.preventDefault();
    validateForm();
  });
})
