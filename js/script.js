document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navbarLinks = document.getElementById('navbar-links');

  mobileMenuButton.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
  });
});
