const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".item");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("toggle-nav-display");
  displayNav();
  body.classList.toggle("body-overflow");
});

const displayNav = () => {
  navItems.forEach((item) => {
    item.classList.toggle("toggle-items-display");
  });
};
