var Word = require("./word");
var inquirer = require("inquirer");

var wordPool = ["Titanic", "Frozen", "Ratatouille"]
var randomPosition = Math.floor(Math.random() * 3)
var wordToGuess = wordPool[randomPosition]

var unknownWord = new Word()
unknownWord.makeLetter(wordToGuess)

var chances = 5;

//print information for the user and call inquirer
function printArrayToScreen() {
    var printToScreen = [];
    unknownWord.printArray(printToScreen)
    console.log("Remaining Guesses: " + chances)
    console.log("Wrong Guesses:")
    console.log(unknownWord.wrongGuesses.join(" "))
    console.log("Movie to Guess:")
    console.log(printToScreen.join(" "))
    if (printToScreen.join("") === wordToGuess) {
        console.log("Congratulations, you got it!")
    } else {
        callInquirer()
    }
}

//ask for user input and check if it was guessed before and, if it wasn't, check if the guess is correct
function callInquirer() {
    inquirer
        .prompt([
            {
                name: "userGuess",
                message: "Guess a letter",
            }
        ])
        .then(function (answer) {
            //check if the word the user guessed was already guessed. if not, the function will return true and run the code, otherwise it will ask the user to try again
            if (unknownWord.checkAll(answer.userGuess.toLowerCase())) {

                //check if the user input is part of the secred word. if so, this will be true and run the code
                if (unknownWord.checkWrong(answer.userGuess.toLowerCase())) {
                    //call the function to toggle the boolean of the letter if it was guessed correctly
                    unknownWord.wordArray.forEach(element => {
                        element.flipBoolean(answer.userGuess.toLowerCase())
                    });
                } else {
                    chances--;
                }

                if (chances === 0) {
                    console.log("You Lost")
                } else {
                    printArrayToScreen()
                }

            } else {
                console.log("You already tried that. Try something else")
                callInquirer()
            }
        });
}

printArrayToScreen()