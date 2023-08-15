const squareContainer = document.querySelector(".square-container");

function createSquares() {
    for (let i = 0; i < 256; i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        squareContainer.appendChild(squares);
    }
}

function changeSquareColor() {
    const getSquares = document.querySelectorAll(".squares");
    getSquares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.classList.add("change-square-color");
        });
    });
}

createSquares();
changeSquareColor();