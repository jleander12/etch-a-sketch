let gridWidth = 960;
let squaresX = 16;
let squaresY = 16;
let mouseDownFlag = false;

//locate container to add columns and squares into
const container = document.querySelector('#container');


generateGrid();

//generate grid 
function generateGrid() {
    let squareSize = gridWidth/squaresX;
    for (let i = 0; i < squaresX; i++) {
        //create div element to hold each column of squares
        const column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < squaresY; j++) {
            //create div element for individual squares
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
        container.appendChild(column);
    }
    sizeSquares(squareSize);
    initSquareEvents();    
}

function eraseGrid() {
    squares.forEach(square => square.classList.remove('drawn'));
}

function drawSquare(e) {
    console.log(e.type);
    if (e.type === 'mouseover' && mouseDownFlag != true) return;
    this.classList.add('drawn');
}

function updateControls(e) {
    if (this.id === 'clear') {
        eraseGrid();
    }
    if (this.id === 'resize') {
        let gridSize = Number(document.getElementById('grid-size').value);
        if (typeof gridSize != 'number') return;
        if (gridSize > 100) {
            squaresX = 100;
            squaresY = 100;
        } else if (gridSize < 1) {
            squaresX = 1;
            squaresY = 1;
        } else {
            squaresX = gridSize;
            squaresY = gridSize;
        }
        container.replaceChildren();
        generateGrid();
    }

}

function sizeSquares(squareSize) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.width=squareSize);
    squares.forEach(square => square.style.height=squareSize);
}

function initSquareEvents() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mousedown', drawSquare));
    squares.forEach(square => square.addEventListener('mouseover', drawSquare));
}

//track mouse down vs up position and set to global mouse down flag for use when drawing
document.body.onmousedown = function() {
    mouseDownFlag = true;
}
document.body.onmouseup = function() {
    mouseDownFlag = false;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',updateControls));