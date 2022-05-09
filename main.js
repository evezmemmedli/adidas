"use strict";

const fixedNav = document.querySelector(".fixed-nav");

window.addEventListener("scroll", (e) => {
  if (window.scrollY < 200) {
    fixedNav.style.display = "block";
    fixedNav.classList.add(".fixed-transition");
  } else {
    fixedNav.style.display = "none";
  }
});
