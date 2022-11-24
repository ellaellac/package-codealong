import "./style.scss";
import confetti from "canvas-confetti";
import colorthief from "colorthief";

const colorThief = new colorthief();
const confettiButton = document.querySelector(".confettiButton");
const dogImage = document.querySelector("#dog-image");

console.log("Welcome to NPM!");
console.log(colorThief);

const fireConfetti = () => {
  confetti();
};

const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);
  const body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
};

confettiButton.addEventListener("click", fireConfetti);

if (dogImage.complete) {
  onImageLoad();
} else {
  dogImage.addEventListener("load", onImageLoad);
}
