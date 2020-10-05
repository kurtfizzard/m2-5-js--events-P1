const body = document.querySelector("body");

const viewportHeight = window.innerHeight * 0.9;
const viewportWidth = window.innerWidth * 0.9;

for (x = 0; x < 20; x++) {
  const button = document.createElement("button");
  button.innerText = x + 1;
  button.style.backgroundColor = "red";
  button.style.border = "none";
  button.style.borderRadius = "90px";
  button.style.color = "white";
  button.style.fontSize = "30px";
  button.style.fontWeight = "bold";
  button.style.height = "50px";
  button.style.position = "absolute";
  button.style.top = `${Math.random() * viewportHeight}px`;
  button.style.left = `${Math.random() * viewportWidth}px`;
  button.style.width = "50px";
  body.appendChild(button);
}

document.querySelectorAll("button").forEach((a) => {
  a.addEventListener("click", () => {
    a.style.backgroundColor = "green";
    a.addEventListener("click", () => {
      a.style.backgroundColor = "red";
    });
  });
});
