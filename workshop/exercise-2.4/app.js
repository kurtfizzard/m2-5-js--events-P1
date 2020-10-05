const body = document.querySelector("body");

const header = document.createElement("header");
header.style.alignItems = "center";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.backgroundColor = "grey";
header.style.height = "100px";
header.style.width = "100vw";
body.appendChild(header);

const span = document.createElement("span");
span.innerText = "";
span.style.fontSize = "25px";
span.style.fontWeight = "bold";
span.style.textAlign = "center";
span.style.color = "white";
header.appendChild(span);

const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.style.backgroundColor = "yellow";
startButton.style.border = "none";
startButton.style.borderRadius = "2px";
startButton.style.color = "grey";
startButton.style.fontSize = "25px";
startButton.style.height = "50px";
startButton.style.width = "150px";
span.appendChild(startButton);

const divContainer = document.createElement("div");
divContainer.style.alignItems = "center";
divContainer.style.display = "flex";
divContainer.style.justifyContent = "center";
divContainer.style.height = "100%";
divContainer.style.width = "100vw";
body.appendChild(divContainer);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.display = "flex";
div.style.justifyContent = "center  ";
div.style.alignItems = "center";
div.style.height = "400px";
div.style.margin = "10px";
div.style.padding = "15px";
div.style.position = "relative";
div.style.width = "600px";
divContainer.appendChild(div);

const result = document.createElement("span");
result.innerText = "";
result.style.alignItems = "center";
result.style.borderRadius = "5px";
result.style.backgroundColor = "green";
result.style.boxShadow = "5px 5px 5px black";
result.style.color = "white";
result.style.display = "none";
result.style.fontSize = "25px";
result.style.fontWeight = "bold";
result.style.height = "100px";
result.style.justifyContent = "center";
result.style.width = "200px";
result.style.zIndex = "100";
div.append(result);

let randomizer = Math.floor(Math.random() * 10) + 1;

let seconds = 5;

let hasWon = false;

function greenBackground(event) {
  event.target.style.backgroundColor = "green";
  let allGreen = Array.from(document.querySelectorAll(".game-button")).every(
    (b, index, array) => {
      console.log(array);
      if (b.style.backgroundColor === "green") {
        return true;
      }
    }
  );
  if (allGreen) {
    hasWon = true;
    result.backgroundColor = "green";
    result.innerText = "YOU WIN!";
    result.style.display = "flex";
  }
}

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  span.innerText = `${seconds}`;
  const countdown = setInterval(function () {
    if (hasWon) {
      clearInterval(countdown);
      span.innerText = "CONGRATULATIONS!";
    } else {
      seconds -= 1;
      span.innerText = `${seconds}`;
      if (seconds === 0) {
        span.innerText = "TIME'S UP!";
        clearInterval(countdown);
      }
    }
  }, 1000);

  for (x = 0; x < randomizer; x++) {
    const button = document.createElement("button");
    button.classList.add("game-button");
    button.innerText = x + 1;
    button.style.backgroundColor = "red";
    button.style.border = "none";
    button.style.borderRadius = "45px";
    button.style.color = "white";
    button.style.fontSize = "20px";
    button.style.fontWeight = "bold";
    button.style.height = "50px";
    button.style.position = "absolute";
    button.style.top = `${Math.random() * 370}px`;
    button.style.left = `${Math.random() * 570}px`;
    button.style.width = "50px";
    button.addEventListener("click", greenBackground);
    div.appendChild(button);
  }

  const challenge = setTimeout(function () {
    document.querySelectorAll("button").forEach((b) => {
      if (!hasWon) {
        result.style.backgroundColor = "red";
        result.innerText = "YOU LOSE!";
        result.style.display = "flex";
      }
    });
  }, 5000);
});

// for (let i = 0; i < buttonList.length; i++) {
//   buttonList[i].removeEventListener("click", greenBackground);
// }
