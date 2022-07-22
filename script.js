for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const grid = document.querySelector(".sketchpad");
        const block = document.createElement("div");

        block.style.border = "1px solid gray";
        block.style.height = "10px";
        block.style.width = "10px";

        grid.appendChild(block);
    }
}