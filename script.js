var userInput = document.getElementById('input');
const guessButton = document.querySelector('#button');
const resetButton = document.querySelector('#reset');
var message = document.body.querySelector('p')
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
        console.log('Wins: ' + wins + ' Losses: ' + losses);
    } else if (userGuess !== botNum) {
        message.textContent = 'Try again!';
        losses++; 
        console.log('Wins: ' + wins + ' Losses: ' + losses);
    } 
}

guessButton.addEventListener('click', function() {
    if (losses <= 2) {
        game();
    } else if (losses > 2) {
        message.textContent = 'Click "Clear" to try again!'
    }
});

resetButton.addEventListener('click', function() {
    message.textContent = ''
    botNum = Math.floor(Math.random() * 10);
    wins = 0;
    losses = 0;
});


