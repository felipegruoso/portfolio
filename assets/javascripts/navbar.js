setNavbarColor = function () {
  // let brandWhite = document.getElementById('brand-white');
  // let brandBlue = document.getElementById('brand-blue');
  // let navbar = document.getElementById('navbar');

  // let navbarSize = navbar.offsetHeight;
  // let offsetTop = document.scrollingElement.scrollTop;

  // if (offsetTop > navbarSize) {
  //   navbar.classList.remove('navbar-dark');
  //   navbar.classList.remove('bg-dark-blue');

  //   navbar.classList.add('bg-white');
  //   navbar.classList.add('border-bottom-gray');

  //   brandWhite.classList.add('d-none');
  //   brandWhite.classList.remove('d-block');

  //   brandBlue.classList.add('d-block');
  //   brandBlue.classList.remove('d-none');
  // } else {
  //   navbar.classList.add('navbar-dark');
  //   navbar.classList.add('bg-dark-blue');

  //   navbar.classList.remove('bg-white');
  //   navbar.classList.remove('border-bottom-gray');

  //   brandWhite.classList.add('d-block');
  //   brandWhite.classList.remove('d-none');

  //   brandBlue.classList.add('d-none');
  //   brandBlue.classList.remove('d-block');
  // }
}

window.addEventListener('scroll', function() {
  setNavbarColor();
});

setNavbarColor();
