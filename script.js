const grid = document.querySelector(".sketchpad"); 
let color = "white"; // The default color of the pen

const whiteBtn = document.querySelector("#white");
const blackBtn = document.querySelector("#black");
const brownBtn = document.querySelector("#brown");
const purpleBtn = document.querySelector("#purple");
const pinkBtn = document.querySelector("#pink");
const redBtn = document.querySelector("#red");
const orangeBtn = document.querySelector("#orange");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");

const eraserBtn = document.querySelector("#eraser")
const clearBtn = document.querySelector("#clear");

// The loop below creates 16x16 grid.
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const block = document.createElement("div");
        block.style.height = "37.5px";
        block.style.width = "37.5px";
        block.classList.add("grid-block"); 

        grid.appendChild(block); 
    }
}

// This is the function which actually creates the hover effect
function addHoverEffect() {
    for(let k = 0; k < gridItems.length; k++) {
        gridItems[k].addEventListener("mouseenter", () => { 
            gridItems[k].style.backgroundColor = color;
        });
    }
}

// This function clears the grid
function clearGrid() {
    for(let k = 0; k < gridItems.length; k++) {
            gridItems[k].style.backgroundColor = "";
        }    
}

// This code snippet creates the hover effect for every block.
let gridItems = document.querySelectorAll(".grid-block");
addHoverEffect();

whiteBtn.addEventListener("click", () => {
    color = "#ffffff";
    addHoverEffect();
});

blackBtn.addEventListener("click", () => {
    color = "#000000";
    addHoverEffect();
});

brownBtn.addEventListener("click", () => {
    color = "#a52a2a";
    addHoverEffect();
});

purpleBtn.addEventListener("click", () => {
    color = "#800080";
    addHoverEffect();
});

pinkBtn.addEventListener("click", () => {
    color = "#d87093";
    addHoverEffect();
});

redBtn.addEventListener("click", () => {
    color = "#ff0000";
    addHoverEffect();
});

orangeBtn.addEventListener("click", () => {
    color = "#ff4500";
    addHoverEffect();
});

greenBtn.addEventListener("click", () => {
    color = "#008000";
    addHoverEffect();
});

yellowBtn.addEventListener("click", () => {
    color = "#ffff00";
    addHoverEffect();
});

eraserBtn.addEventListener("click", () => {
    color = "";
    addHoverEffect();
});

clearBtn.addEventListener("click", clearGrid);

// Make the function run when we click on the button
const gridButton = document.querySelector(".grid-size");
gridButton.addEventListener("click", selectGridSize); 

// This function prompts the user to input grid size and creates a new grid, depending on the user's input
function selectGridSize() {
    let gridSize = prompt("Enter the desired grid size: ");
    +gridSize
    if (gridSize > 100) {
        return alert("Please enter a smaller number and try again");
    } else {
        let blockSize = 600 / gridSize;
        for (gridItem of gridItems) {
            gridItem.remove();
        }

        for (let p = 0; p < gridSize; p++) { 
            for (let f = 0; f < gridSize; f++) {
                const block = document.createElement("div");
                block.style.height = blockSize + "px";
                block.style.width = blockSize + "px";
                block.classList.add("grid-block");
                grid.appendChild(block);
                gridItems = document.querySelectorAll(".grid-block");
                addHoverEffect();
                }
            }
        }
    }

// Make the function toggleRainbow run when we click on the button
const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", toggleRainbow);

// The function which adds hover effect for every block.
function toggleRainbow() {
    for(let k = 0; k < gridItems.length; k++) {
        gridItems[k].addEventListener("mouseenter", () => { 
            gridItems[k].style.backgroundColor = randomColor();
        });
    }
}

// The function which returns us a random bright color
function randomColor() {
    randomNumber = Math.floor((Math.random() * 6) + 1); 
    if (randomNumber === 1) {
        return "#0066CC";
    } else if (randomNumber === 2) {
        return "#FF00CC";
    } else if (randomNumber === 3) {
        return "#33CC99";
    } else if (randomNumber === 4) {
        return "#C46210";
    } else if (randomNumber === 5) {
        return "#FD0E35";
    } else {
        return "#FFFF38";
    }
}