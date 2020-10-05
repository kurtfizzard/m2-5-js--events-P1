// Exercise 1.2
// ------------
const body = document.querySelector("body");
body.style.background = "rgb(2,4,43)";
body.style.background =
  "radial-gradient(circle, rgba(2,4,43,1) 0%, rgba(27,117,222,1) 75%)";
body.style.fontFamily = "Comic Sans MS";
const header = document.getElementsByClassName("time-text")[0];
header.style.color = "white";
header.style.fontSize = "50px";
header.style.paddingLeft = "40px";
header.style.paddingTop = "20px";
const number = document.getElementById("time");
number.style.color = "yellow";
number.style.fontSize = "75px";
const message = document.getElementById("result");
message.style.color = "violet";
message.style.fontSize = "200px";
message.style.textAlign = "center";

let click = false;
const randomizer = Math.floor(Math.random() * 5) + 1;
number.innerText = `${randomizer}`;

body.addEventListener("click", (event) => {
  click = true;
});

const challenge = setTimeout(function () {
  if (click === true) {
    clearTimeout(challenge);
    message.innerText = "YOU WIN!";
  } else {
    message.innerText = "YOU LOSE!";
  }
  //   body.appendChild(message);
}, randomizer * 1000);
