/*
TOD0 
✅ general grid 
✅ allow for changing grid square count
✅ add userInput box for squareCount
allow for different color styling
allow user to select their color
*/

// Variables
const gridContainer = document.querySelector(".grid__container");
const inputForm = document.querySelector(".input__form");
const submitButton = document.querySelector(".submit__button");
const inputNumber = document.querySelector(".input__number");

//Functions

buildGrid(16);

function handleSubmit(e) {
  e.preventDefault();
  let selectedSquareCount = inputNumber.value;
  console.log("submitted", selectedSquareCount);
  buildGrid(selectedSquareCount);
}

function sketch(e) {
  hoveredSquare = e.target;
  console.log(hoveredSquare.id);
  hoveredSquare.setAttribute("class", "sketched");
}

function buildGrid(squareCount) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < squareCount * squareCount; i++) {
    const square = document.createElement("div");
    square.id = "square" + (i + 1);
    square.setAttribute("class", "square");

    if (squareCount > 50) {
      squareCount = 50;
    }
    let adjustedDimension = 480 / squareCount;

    square.style.width = adjustedDimension + "px";
    square.style.height = adjustedDimension + "px";
    gridContainer.appendChild(square);
    square.addEventListener("mouseover", sketch);
  }
}

// Event listeners
submitButton.addEventListener("click", (e) => handleSubmit(e));
inputNumber.addEventListener("input", () => {
  if (inputNumber.value > 50) {
    inputNumber.value = 50;
    alert("Please select a number between 1–50");
  }
});
