// 
let words = ['table', 'crane', 'world', 'adult'];

let word = selectWord(); // choose random word
console.log(word);

let table = document.getElementById('game'); // get table element

let row = 0; // starting row

let array = new Array();

function createGame() { // append all the "td" and "tr" elements appropriately
    for (let row = 0; row < 5; row++) {
        let currentRow = document.createElement('tr');
        let arrRow = new Array();
        for (let col = 0; col < 5; col++) {
            let currentCol = document.createElement('td');
            currentCol.setAttribute('id', `${row},${col}`);
            currentCol.setAttribute('class', 'square');
            currentRow.appendChild(currentCol);
            arrRow.push(currentCol);
        }
        table.appendChild(currentRow);
        array.push(arrRow);
    }
}

function selectWord() {
    return words[Math.floor(Math.random() * words.length)]; // select random index of the array
}

function processGuess() {

    let input = document.getElementById('input').value; // get value of user input
    input = input.toLowerCase(); // make everything lowecase

    if (input.length != 5) { // if it's longer or shorter than 5, don't do anything
        console.log('Input is not the length of 5..');
        return;
    }

    for (let letter = 0; letter < 5; letter++) { // else we compare every letter and if it's in the correct place, we make it green
        array[row][letter].innerHTML = `${input[letter].toUpperCase()}`;
        if (input[letter] == word[letter]) {
            array[row][letter].style.backgroundColor = 'rgb(43, 199, 43)';
        } else if (word.includes(input[letter])) {
            array[row][letter].style.backgroundColor = 'rgb(207, 205, 41)'; // if the word contains the letter but it's not in the correct spot, we make it yellow
        } else {
            array[row][letter].style.backgroundColor = 'rgb(255, 0, 0)'; // else we make it red
        }
    }

    row++;

    document.getElementById('input').value = ''; // after every guess we reset the input field
}


document.getElementById('input') // allow using enter as a submit. Pressing enter simulated a click of the "Guess" button
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.getElementById('sb').click();
        }
    });

createGame();