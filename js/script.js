document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navbarLinks = document.getElementById('navbar-links');

  mobileMenuButton.addEventListener('click', function () {
    document.addEventListener("DOMContentLoaded", function () {
      // Your script code here
    });
  })
  document.addEventListener("DOMContentLoaded", function () {
    var Btn = document.querySelector(".btn--gsap");

    var section1 = document.querySelector(".section-1");


    section1.addEventListener("mousemove", function (event) {
      console.log("ok");

      gsap.to(Btn, {
        x: event.x,
        y: event.y
      });
    });
  }); 
  

var Btn = document.querySelector(".btn--gsap");
var section1 = document.querySelector(".section-1");

section1.addEventListener("mouseenter", function (event) {

  gsap.to(Btn, {
    scale: 1,
    opacity: 1
  });
});
section1.addEventListener("mouseleave", function (event) {

  gsap.to(Btn, {
    scale: 0,
    opacity: 0
  });
});


});