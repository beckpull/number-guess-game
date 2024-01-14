var userInput = document.getElementById('input');
const guessButton = document.querySelector('#button');
const resetButton = document.querySelector('#reset');
var message = document.body.querySelector('p');
var scores = document.body.querySelector('h6');
var botNum = Math.floor(Math.random() * 10);
let wins = 0;
let losses = 0;

var game = function() {

    var userGuess = parseInt(userInput.value);
 

    while (
        isNaN(userGuess) ||
        userGuess < 0 ||
        userGuess > 10
    ) {
        message.textContent = 'Please enter a valid integer in between 0 and 10.'
        return;
    }
        // console.log(botNum);
        // console.log(userGuess);

    if (userGuess === botNum) {
        message.textContent = 'Congratulations!';
        wins++;
        scores.textContent = 'Wins: ' + wins + ' Losses: ' + losses 
    } else if (userGuess !== botNum) {
        message.textContent = 'Try again!';
        losses++; 
        scores.textContent = 'Wins: ' + wins + ' Losses: ' + losses  
    } 
}

guessButton.addEventListener('click', function() {
    if (losses <= 2) {
        game();
    } else if (losses > 2) {
        message.textContent = 'Computer chose: ' + botNum + '. Click "Clear" to try again!'
    }
    userInput.value = '';
});

resetButton.addEventListener('click', function() {
    message.textContent = ''
    botNum = Math.floor(Math.random() * 10);
    wins = 0;
    losses = 0;
    userInput.value = '';
    scores.textContent = 'Wins: ' + wins + ' Losses: ' + losses 
});


