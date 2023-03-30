/*Everything should be ID. If class it needs other syntax( not .quertSelectot)
addEvent Listner for making things happen */
const firstButton = document.querySelector(".first_b");
const firstImg = document.querySelector("#first-img");

firstButton.addEventListener("click", () => {
  firstImg.style.filter = "none";
});

const secondButton = document.querySelector(".second_b");
const secondImg = document.querySelector("#second-img");

secondButton.addEventListener("click", () => {
  secondImg.style.filter = "none";
});

const thirdButton = document.querySelector(".third_b");
const thirdImg = document.querySelector("#third-img");

thirdButton.addEventListener("click", () => {
  thirdImg.style.filter = "none";
});

const fourthButton = document.querySelector(".fourth_b");
const fourthImg = document.querySelector("#fourth-img");

fourthButton.addEventListener("click", () => {
  fourthImg.style.filter = "none";
});
