const words = ['word', 'world', 'car', 'skyscraper', 'book'];

const choice = words[Math.floor(Math.random() * words.length)];
// picking random word
let h1 = document.getElementById('word');

let lives = 5; // to be implemented maybe one day

let result = makeWord();

// create an array of underscores with the length of the word
function makeWord() {
    let wordString = choice.split('');
    console.log(wordString);

    let word = [];

    for (let i = 0; i < wordString.length; i++) {
        word.push('_');
    }
    console.log(word);
    showWord(word);
    return word;
}
// take input letter
function guess(letter) {
    document.getElementById(letter).remove();
    // remove the button with the letter
    let error = 0;

    for (let i = 0; i < result.length; i++) {
        console.log(choice[i]);
        console.log(letter);
        if (choice[i] == letter) {
            console.log('found');
            result[i] = letter;
        }
    }
    // replace the current text with the new one, including the correctly guessed new letter (if there is one)
    showWord(result);
    // lives system not implemented yet
    if (error != 0) {
        lives -= 1;
    }
    if (lives == 0) {

    }
}
// debug function
function printLetter(letter) {
    console.log(letter);
}

// shows the array of underscores with the correctly guessed being replaced by letters
function showWord(arr) {
    let word = '';
    for (let i = 0; i < arr.length; i++) {
        word += arr[i];
    }
    h1.innerHTML = word;
}
// not implemented yet
function revealWord() {

}