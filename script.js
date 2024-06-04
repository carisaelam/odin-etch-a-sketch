const gridContainer = document.querySelector(".grid__container");

function sketch(e) {
  hoveredSquare = e.target;
  console.log(hoveredSquare.id);
  hoveredSquare.setAttribute('class', 'sketched')
}

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.id = "square" + (i + 1);
  square.setAttribute("class", "square");
  square.addEventListener("mouseover", sketch);

  gridContainer.appendChild(square);
}
