for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.querySelector(".sketchpad");
        const block = document.createElement("div");

        block.classList.add("grid-block");

        grid.appendChild(block);
    }
}