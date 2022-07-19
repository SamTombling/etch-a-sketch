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
        column.appendChild(square);}    
    }

    const cells = document.querySelectorAll('.square');

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add("active");
        });
    });
}

const button = document.querySelector('button');
let numOfCells = 10;
drawGrid(numOfCells);
button.addEventListener('click', () => {
    numOfCells = parseInt(prompt('Enter a number between 1 and 100'));
    if (numOfCells > 1 && numOfCells <= 100){
        drawGrid(numOfCells);
    } else {
        alert("Cell size must be between 1 and 100!")
    }    
});
