// toggel class active
const navbarNav = document.querySelector('navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classlist.toggle('active');
};




