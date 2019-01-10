// Open burger menu and play dropdown menu animation on click

const bm = document.querySelector('.bm'); // burger menu
const dd = document.querySelector('.dd'); // dropdowm menu
const bars = document.querySelectorAll('.bar');

bm.onclick = openMenu;

function openMenu() {
  dd.classList.toggle('ddshow');
  bars.forEach((element, i) => {
    element.classList.toggle('changebar' + [i + 1]);
  })
};

// Scroll to section on click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(() => {
      dd.classList.remove('ddshow');
      bars.forEach((element, i) => {
        element.classList.remove('changebar' + [i + 1]);
      })
    }, 600);
  });
});

// Change navbar appearance on scroll

window.onscroll = function() {
  solidBar();
};

function solidBar() {
  const navbarswitch = document.querySelector('.navbarswitch');
  const topbar = document.querySelector('.tb');
  const joe = document.querySelector('.lj');
  const sm = document.querySelector('.smwd');
  const navlinkItems = document.querySelectorAll('.navlink');
  const solid = navbarswitch.offsetTop;

  if (window.pageYOffset >= solid) {
    topbar.classList.add('solidnav');
    dd.classList.add('changedd');
    joe.classList.add('amendedjoe');
    sm.classList.add('smallsmwd');
    navlinkItems.forEach(function(element) {
      element.classList.add('changenavlink');
    })
  } else {
    topbar.classList.remove('solidnav');
    dd.classList.remove('changedd');
    joe.classList.remove('amendedjoe');
    sm.classList.remove('smallsmwd');
    navlinkItems.forEach(function(element) {
      element.classList.remove('changenavlink');
    })
  }
}

// Slideshow arrow functions

let projIndex = 1;
showProj(projIndex);

function projCardSwitcher(n) {
  showProj(projIndex += n);
}

function currentProj(n) {
  showProj(projIndex = n);
}

function showProj(n) {
  let projects = document.querySelectorAll('.projectcard');
  // Forces projects carousel to loop if user gets to the end
  if (n > projects.length) {
    projIndex = 1;
  }
  // Similarly, if user
  if (n < 1) {
    projIndex = projects.length;
  }
  projects.forEach((element) => {
    element.classList.add('deactivecard');
    element.classList.remove('actiecard');
  })
  projects[projIndex - 1].classList.remove('deactivecard');
  projects[projIndex - 1].classList.add('activecard');
}

// Modal controls

const modal = document.querySelector('#myModal');
const tyModalContent = document.querySelector('#tyModalContent');
const form = document.querySelector('#contactform');
const sadmodal = document.querySelector('#sadModal');
const sadModalContent = document.querySelector('#sadModalContent');

function thankyoumodal() {
  modal.classList.add('showmodal');
  tyModalContent.classList.add('show-modal-content');
  setTimeout(() => {
    modal.classList.remove('showmodal');
    tyModalContent.classList.remove('show-modal-content');
    form.reset();
  }, 2800);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('showmodal');
    tyModalContent.classList.remove('show-modal-content');
  }
}

const contactbutton = document.querySelector('#contactbutton');

contactbutton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
})

function validateForm() {
  const form = document.forms['contactform'];
  const a = form['name'].value;
  const b = form['mail'].value;
  const c = form['howicanhelp'].value;
  if (!a || !b || !c) {
    sadmodal.classList.add('showmodal');
    sadModalContent.classList.add('show-modal-content');
    setTimeout(() => {
      sadmodal.classList.remove('showmodal');
      sadModalContent.classList.remove('show-modal-content');
    }, 2800);
  } else if (a || b || c) {
    const form = document.querySelector('#contactform');
    const data = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'email.php', true);
    request.send(data);

    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        thankyoumodal();
      }
    }
    request.onerror = function(err) {
      console.error('Oh dear, something has gone wrong. Please try again.')
      console.error(err);
    }
  }
}
