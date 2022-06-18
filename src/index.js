const rangeBar = document.querySelector("#range-bar");
rangeBar.defaultValue = 16;
rangeBar.addEventListener("change", () => {
  updateTextInput(rangeBar.value);
  outputText();
});

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container", "is-centered");
gridContainer.style.setProperty("grid-template-columns", "repeat(" + rangeBar.value + ", 1fr)");
gridContainer.style.setProperty("grid-template-rows", "repeat(" + rangeBar.value + ", 1fr)");
const container = document.querySelector(".container");
container.appendChild(gridContainer);

function updateTextInput(val) {
  document.querySelector(".square-range").textContent = `${val}x${val}`;
};

const colorMode = document.querySelector(".color");
colorMode.addEventListener("click", () => outputColor());
const black = document.querySelector(".black");
black.addEventListener("click", () => outputBlack());
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => outputEraser());
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => outputClear());

function outputText() {
  const gridCont = document.querySelector(".grid-container");
  gridCont.innerHTML = "";
  const output = (document.querySelector("#range-bar").value) * (document.querySelector("#range-bar").value);
  for (let i = 0; i < output; i++) {
    const red = Math.floor(Math.random() * 245);
    const green = Math.floor(Math.random() * 245);
    const blue = Math.floor(Math.random() * 245);
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.setAttribute("id", "square");
    divs.addEventListener("mouseenter", () => {
      event.target.style.background = randomColor;
    });
    gridContainer.appendChild(divs);
  }
  gridContainer.style.setProperty("grid-template-columns", "repeat(" + rangeBar.value + ", 1fr)");
  gridContainer.style.setProperty("grid-template-rows", "repeat(" + rangeBar.value + ", 1fr)");
}

function outputColor() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    const red = Math.floor(Math.random() * 245);
    const green = Math.floor(Math.random() * 245);
    const blue = Math.floor(Math.random() * 245);
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    square.addEventListener("mouseenter", () => {
      event.target.style.background = randomColor;
    });
  });
}

function outputBlack() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      event.target.style.background = "black";
    });
  });
}

function outputEraser() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      event.target.style.background = "white";
    });
  });
}

function outputClear() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.background = "white";
  });
}

updateTextInput("16");
outputText();
