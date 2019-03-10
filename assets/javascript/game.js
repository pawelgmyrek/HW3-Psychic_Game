var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var randomLetter = [];

window.onload = function() {
	var computerLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
	randomLetter.push(computerLetter);
	console.log(randomLetter[0]);
}

function getLetter() {
	var computerLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
	randomLetter.push(computerLetter);
	console.log(randomLetter[0]);
}

document.onkeyup = function(game) {
	var guess = event.key;
	lettersGuessed.push(guess);
	console.log(randomLetter[0]);

if ((guess === randomLetter[0]) && (guessesLeft >= 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	randomLetter.length = 0;
	getLetter();
}

else if ((guess !== randomLetter[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	randomLetter.length = 0;
	getLetter();
}

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
var userChoiceText = document.getElementById("userchoice-text")

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesText.textContent = "Guesses Left: " + guessesLeft;
userChoiceText.textContent = "Your Guesses so far: " + lettersGuessed;
}
