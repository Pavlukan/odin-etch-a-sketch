const grid = document.querySelector(".sketchpad"); 

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

// This code snippet creates the hover effect for every block.
let gridItems = document.querySelectorAll(".grid-block");
addHoverEffect();

// This is the function which actually creates the hover effect
function addHoverEffect() {
    for(let k = 0; k < gridItems.length; k++) {
        gridItems[k].addEventListener("mouseenter", () => { 
            gridItems[k].style.backgroundColor = "red"
        });
    }
}

// Make the function run when we click on the button
const button = document.querySelector("button");
button.addEventListener("click", selectGridSize); 

// This function prompts the user to input grid size and creates a new grid, depending on the user's input
function selectGridSize() {
    let gridSize = prompt("Enter the desired grid size: ");
    +gridSize
    if (gridSize > 100) {
        return alert("Please enter a smaller number and try again");
    } else {
        blockSize = 600 / gridSize;
        for (gridItem of gridItems) { // remove every block from gridItems
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

