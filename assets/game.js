var letters = ["d", "a", "v", "e"];

var letterToGuess = null;
var guessedLetters = [];
var guessesLeft = 15;
var wins = 0;
var losses = 0;


var updateLetterGuess = function() {  
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
var updateGuesses = function() {  
  document.querySelector("#guesses").innerHTML = guessedLetters.join(", ");
};

var updateGuessesLeft = function() {  
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var reset = function() {
  guessesLeft = 10;
  guessedLetters = [];
  
  updateLetterGuess();
  updateGuesses();
  updateGuessesLeft();
  
};

document.onkeydown = function(event) {  
  guessesLeft--;  
  var letter = String.fromCharCode(event.which).toLowerCase();
 
  guessedLetters.push(letter);  
  updateGuesses();
  updateGuessesLeft();
  
  if (letter === letterToGuess) {   
    wins++;
    document.querySelector("#wins").innerHTML = wins;    
    reset();
  }
  
  if (guessesLeft === 0) {    
    losses++;
    document.querySelector("#losses").innerHTML = losses;    
    reset();
  }
};