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

function checkLetters(letter) {
    // check if letter exists in code at all
    var isLetterInWord = false;
    
    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
            // alert('letter found');
        }
    }


// Check where in the word the letters exists and then populate blanksAndSuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
        }
   
     }
} // letter wasn't found
    else {
        wrongLetters.push(letter);
        numGuesses--;
    }
    // Testing / debugging
    console.log(blanksAndSuccesses);

}

function roundComplete () {
    console.log("Win count: " + winCount);
    console.log("Loss count: " + lossCount);
    console.log("Guesses left: " + guessesLeft);

    // Finally, update the HTML to reflect most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(' ');


    // Check if user won
    if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You won!");
        // update the win counter in the html ** put before startGame function in order to see that user has won
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCounter++;
        alert("You lost!");

        // Update the hTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }

}



// MAIN PROCESS
// ========================================================


// Initiates the code the first time
startGame();

// Documents key clicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();



    // Testing / debuggging
    console.log(letterGuessed);


}