/*
TOD0 
✅ general grid 
allow for changing grid square count
allow for different color styling
*/

const gridContainer = document.querySelector(".grid__container");

function sketch(e) {
  hoveredSquare = e.target;
  console.log(hoveredSquare.id);
  hoveredSquare.setAttribute("class", "sketched");
}

let squareCount = 50;

for (let i = 0; i < squareCount * squareCount; i++) {
  const square = document.createElement("div");
  square.id = "square" + (i + 1);
  square.setAttribute("class", "square");

  if (squareCount > 100) {
    squareCount = 100;
  }
  let adjustedDimension = 480 / squareCount;

  square.style.width = adjustedDimension + "px";
  square.style.height = adjustedDimension + "px";
  gridContainer.appendChild(square);
  console.log(adjustedDimension);
  square.addEventListener("mouseover", sketch);
}
