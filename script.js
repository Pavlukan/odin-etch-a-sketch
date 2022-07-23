const grid = document.querySelector(".sketchpad"); // assign the variable grid to the div with the class of sketchpad

for (let i = 0; i < 16; i++) { // create 16x16 grid
    for (let j = 0; j < 16; j++) {
        const block = document.createElement("div"); // create a div and assign it the variable of block

        block.classList.add("grid-block"); // add the class of grid-block to every grid item

        grid.appendChild(block); // attach the block to the grid
    }
}

let gridItems = document.querySelectorAll(".grid-block"); // create a node list of all the items with the class of grid-block
for (let k = 0; k < gridItems.length; k++) { // loop through every item
    gridItems[k].addEventListener("mouseenter", () => { // when the mouse enters, change the color of the square to red
        gridItems[k].style.backgroundColor = "red"
    });
}

const button = document.querySelector("button"); // assign the variable button to the button in HTML
button.addEventListener("click", selectGridSize); // when we click on the button, run the function selectGridSize()

function selectGridSize() {
    let gridSize = prompt("Enter the desired grid size: ");
    +gridSize
    if (gridSize > 100) {
        return alert("Please enter a smaller number and try again");
    } else {
        for (gridItem of gridItems) { // remove every block from gridItems
            gridItem.remove();
        }

        for (let p = 0; p < gridSize; p++) { // create new grid, using the user's input.
            for (let f = 0; f < gridSize; f++) {
                const block = document.createElement("div");
                block.classList.add("grid-block");
                grid.appendChild(block);
                gridItems = document.querySelectorAll(".grid-block");
                for (let k = 0; k < gridItems.length; k++) { // loop through every item
                    gridItems[k].addEventListener("mouseenter", () => { // when the mouse enters, change the color of the square to red
                        gridItems[k].style.backgroundColor = "red"
                    });
                }
            }
        }
    }
}

