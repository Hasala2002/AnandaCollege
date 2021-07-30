let body = document.getElementById("body");
const mobileNav = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");

window.onscroll = function () {
  let value = window.pageYOffset / ($("section").offset().top + 10000) + 1;
  $(".inner").css("transform", `scale(${value})`);
  if (window.pageYOffset >= 100) {
    $("#navigation").addClass("nav_attach");
  } else {
    $("#navigation").removeClass("nav_attach");
  }
};

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});
