const squareContainer = document.querySelector(".square-container");

function createSquares() {
    for (let i = 0; i < 256; i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        squareContainer.appendChild(squares);
    }
}

createSquares();