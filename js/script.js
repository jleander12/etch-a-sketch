const SQUARES_X = 16;
const SQUARES_Y = 16;


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


