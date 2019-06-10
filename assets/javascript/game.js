//  alert("TEST!");
 
// GLOBAL VARIABLES
// ==========================================================================
// Arrays and variables for holding data
var wordOptions = ["plum", "kiwi", "honeydew", "canteloupe", "grape"];
var selectedWord = ""; // empty string
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
   

// FUNCTIONS (Reusable blocks of code to call upon when needed)
// ==============================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split('');
    numBlanks = lettersInWord.length;

    // Reset - run at start of each new game
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanksAndSuccesses with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join('  ');
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


// Testing / Debugging
console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}




// MAIN PROCESS
// ========================================================

startGame();