"use strict";

let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  navigationElement.classList.toggle("navActive");
});

let accordionContainers = document.querySelectorAll(".container-accor");

//for loop
for (let i = 0; i < accordionContainers.length; i++) {
  const element = accordionContainers[i];

  element.addEventListener("click", function () {
    this.classList.toggle("activeNew");
  });
}
//forEach
// accordionContainers.forEach(function (e) {
//   e.addEventListener("click", function () {
//     this.classList.toggle("activeNew");
//   });
// });

// for of
// for (let item of accordionContainers) {
//   item.addEventListener("click", function () {
//     this.classList.toggle("activeNew");
//   });
// }
