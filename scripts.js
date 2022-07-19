function drawGrid(numOfCells) {

    const body = document.querySelector('body');
    const oldGrid = document.querySelector(".grid");
    body.removeChild(oldGrid);

    const grid = document.createElement('div');
    grid.classList.add('grid');
    body.appendChild(grid);

    for (let i = 0; i < numOfCells; i++) {
    let column = document.createElement('div')
    column.classList.add('column');
    grid.appendChild(column);
    for (let j = 0; j < numOfCells; j++) {
        let square = document.createElement('div')
        square.classList.add("square");

        // Cells were created draggable which would cause issues if the user clicked on the very edge of a square, so this was removed
        square.setAttribute('ondragstart', 'return false');
        square.setAttribute('ondrop', 'return false');

        column.appendChild(square);}    
    }

    const cells = document.querySelectorAll('.square');

    cells.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            cell.classList.add("active");
            clicked = true
        });   
    });

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            if (clicked == true) {
                cell.classList.add("active");
            }              
        });  
    });

    // When the mouse is let go, dragging over a cell will no longer activate it
    cells.forEach((cell) => {
        cell.addEventListener('mouseup', () => {
            clicked = false;             
        });  
    });
}

let clicked = false // When a cell is clicked, all other cells will become active if the mouse is moved over them. This allows the user to click and drag to draw

const button = document.querySelector('button');
let numOfCells = 25;
drawGrid(numOfCells); // Draws initial 25x25 grid
let slider = document.getElementById("myRange");
let output = document.querySelector(".output");



slider.oninput = function() {
    numOfCells = this.value;
    output.textContent = this.value + "x" + this.value;    
}

slider.onmouseup = function() {
    drawGrid(numOfCells);
}
