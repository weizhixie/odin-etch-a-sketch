const GIRD_TOTAL_SIZE = 560;
const squareContainer = document.querySelector(".square-container");

function createSquares(size = 16) {
    for (let i = 0; i < (size * size); i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        squareContainer.appendChild(squares);
    }
    changeSquareColor();
    clearSquareColor();
}

function changeSquareColor() {
    const allBtn = document.querySelectorAll(".buttons");
    let clickedButton;

    allBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            allBtn.forEach((btn) => btn.classList.remove("buttons-active"));
            btn.classList.add("buttons-active");

            clickedButton = btn.id;
        });
    });

    getAllSquares().forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (clickedButton === "rgb-color-btn") {
                square.style.backgroundColor = getRandomColor();
                square.style.filter = "";
            }
            else if (clickedButton === "darken-color-btn") {
                if (square.style.backgroundColor !== "" && square.style.filter === "") {
                    square.style.filter = "brightness(90%)";
                }
                else if (square.style.filter === "") {
                    square.style.backgroundColor = "white";
                    square.style.filter = "brightness(90%)";
                }
                else {
                    square.style.filter = `brightness(${square.style.filter.replace(/\D/g, "") - 10}%)`;
                }
            }
            else if (clickedButton === "eraser-color-btn") {
                square.style.backgroundColor = "";
                square.style.filter = "";
            }
            else if (clickedButton === "pick-color-btn") {
                const colorPickerValue = document.querySelector("#color-picker").value;
                square.style.backgroundColor = colorPickerValue;
                square.style.filter = "";
            }
            else {
                square.style.backgroundColor = "black";
                square.style.filter = "";
            }
        });
    });
}

function toggleGrid() {
    const toggleGriBtn = document.querySelector("#toggle-grid-btn");
    toggleGriBtn.addEventListener("click", () => {
        getAllSquares().forEach((square) => {
            square.classList.toggle("squares-grid-deactivate");
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
    const gridSizeSlider = document.querySelector(".grid-size-slider");
    const outputSliderValue = document.querySelector(".grid-size-slider-value");
    gridSizeSlider.addEventListener("click", () => {
        removeSquares();
        createSquares(gridSizeSlider.value);
        editSquareSize(gridSizeSlider.value);
        outputSliderValue.textContent = `Grid size: ${gridSizeSlider.value} X ${gridSizeSlider.value}`;
    });
}

function removeSquares() {
    getAllSquares().forEach((square) => {
        squareContainer.removeChild(square);
    });
}

function clearSquareColor() {
    const clearColorBtn = document.querySelector("#clear-color-btn");
    clearColorBtn.addEventListener("click", () => {
        getAllSquares().forEach((square) => square.style.backgroundColor = "");
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
toggleGrid();