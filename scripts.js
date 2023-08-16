const GIRD_TOTAL_SIZE = 560;
const squareContainer = document.querySelector(".square-container");

function createSquares(size = 16) {
    for (let i = 0; i < (size * size); i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        squareContainer.appendChild(squares);
    }
    changeSquareColor();
}

function changeSquareColor() {
    const allBtn = document.querySelectorAll(".buttons");

    getAllSquares().forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    });

    allBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            getAllSquares().forEach((square) => {
                square.addEventListener("mouseenter", () => {
                    if (btn.id === "rgb-color-btn") {
                        square.style.backgroundColor = getRandomColor();
                    }
                    else if (btn.id === "black-color-btn") {
                        square.style.backgroundColor = "black";
                    }
                });
            });
        });
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getAllSquares() {
    return document.querySelectorAll(".squares");
}

function changeNumberOfSquares() {
    const changeSizeBtn = document.querySelector(".change-size-btn");
    changeSizeBtn.addEventListener("click", () => {
        const inputSize = prompt("Please enter a grid size between number 1 to 64.");
        if (inputSize && inputSize > 0 && inputSize <= 64) {
            removeSquares();
            createSquares(inputSize);
            editSquareSize(inputSize);
        }
        else {
            alert("Please enter a grid size between number 1 to 64.");
        }
    });
}

function removeSquares() {
    getAllSquares().forEach((square) => {
        squareContainer.removeChild(square);
    });
}

function editSquareSize(size) {
    /**
     * Calculate the percentage of each part(square) of 
     * the grid total size(total width and total height).
     */
    const percentage = GIRD_TOTAL_SIZE / size / GIRD_TOTAL_SIZE * 100;
    getAllSquares().forEach((square) => {
        square.style.cssText = `width: ${percentage}%; height: ${percentage}%;`;
    });
}

createSquares();
changeNumberOfSquares();