"use strict";

let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  navigationElement.classList.toggle("navActive");
});
