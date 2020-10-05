const body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
const div = document.createElement("div");
div.style.display = "flex";
div.style.flexFlow = "wrap";
div.style.height = "300px";
div.style.justifyContent = "center  ";
div.style.margin = "10px";
div.style.width = "55%";
body.appendChild(div);

for (x = 0; x < 20; x++) {
  const button = document.createElement("button");
  button.innerText = x + 1;
  button.style.backgroundColor = "red";
  button.style.border = "none";
  button.style.color = "white";
  button.style.fontSize = "30px";
  button.style.fontWeight = "bold";
  button.style.margin = "1px";
  button.style.height = "100px";
  button.style.width = "100px";
  div.appendChild(button);
  button.addEventListener("click", function (event) {
    button.style.backgroundColor = "green";
  });
}
