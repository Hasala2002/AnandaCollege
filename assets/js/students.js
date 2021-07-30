window.onscroll = function () {
  if (window.pageYOffset >= 100) {
    $("#navigation").addClass("nav_attach");
    $("#modal").hide();
  } else {
    $("#navigation").removeClass("nav_attach");
  }
};

const mobileNav = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});
