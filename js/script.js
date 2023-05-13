const SQUARES_X = 16;
const SQUARES_Y = 16;
let mouseDownFlag = false;

//locate container to add columns and squares into
const container = document.querySelector('#container');

//generate grid 
for (let i = 0; i < SQUARES_X; i++) {
    //create div element to hold each column of squares
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < SQUARES_Y; j++) {
        //create div element for individual squares
        const square = document.createElement('div');
        square.classList.add('square');
        column.appendChild(square);
    }
    container.appendChild(column);
}

function changeColor(e) {
    if (mouseDownFlag) {
        this.classList.add('drawn');
    }
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover',changeColor));

document.body.onmousedown = function() {
    mouseDownFlag = true;
}

document.body.onmouseup = function() {
    mouseDownFlag = false;
}