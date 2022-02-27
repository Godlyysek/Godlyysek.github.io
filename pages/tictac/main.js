let size = 5; // size of the array

let states = ['O', 'X'];
let turn = states[0]; // starting player is "O"


let table = document.getElementById('game'); // get table element

class Square {
    constructor(x, y) {
        this.x;
        this.y;
        this.val = null;
        this.object;
    }
}

let squares = new Array(); // 2D array with every square


function createTable() { // create an array of the square objects and append every "td" element to it's corresponding "tr" and that then to the table
    for (let i = 0; i < size; i++) {
        let row = new Array();
        let obj = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let s = document.createElement('td');
            s.setAttribute('class', 'square');
            s.setAttribute('id', `${i},${j}`);
            s.setAttribute('onclick', 'clickedSquare(this.id)');
            s.style.cursor = 'pointer';
            let square = new Square(i, j);
            square.object = s;
            row.push(square);
            obj.appendChild(s);
        }
        table.appendChild(obj);
        squares.push(row);
    }
}


function clickedSquare(id) { // get id of clicked square and set it to the current turn's index (O or X)
    console.log(id);
    let clicked = document.getElementById(id);
    clicked.innerHTML = `${turn}`;
    if (turn == states[0]) {
        turn = states[1];
        clicked.style.color = 'blue';
    } else {
        turn = states[0];
        clicked.style.color = 'red';
    }
}

createTable();