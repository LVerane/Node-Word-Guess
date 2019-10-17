var Word = require("./word");
var inquirer = require("inquirer");

var wordPool = ["Titanic", "Frozen", "Ratatouille"]
var randomPosition = Math.floor(Math.random() * 3)
var wordToGuess = wordPool[randomPosition]

var unknownWord = new Word()
unknownWord.makeLetter(wordToGuess)

var chances = 5;

//test code
// console.log(unknownWord)
// console.log("----------------")
// console.log(unknownWord.word)
// console.log("----------------")
// console.log(wordToGuess)

function printArrayToScreen() {
    var printToScreen = [];//resets it every time
    //this function/call should be inside word.js
    for (var i = 0; i < unknownWord.wordArray.length; i++) {
        unknownWord.wordArray[i].showCharacter(printToScreen);
    }
    if (printToScreen.join("") === wordToGuess) {
        console.log("Congratulations, you got it!")
    } else {
        console.log("Remaining Guesses: " + chances)
        console.log("Wrong Guesses:")
        console.log(unknownWord.wrongGuesses.join(" "))
        console.log("Word to Guess:")
        console.log(printToScreen.join(" "))
        callInquirer()
    }
}

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
                // console.log("all guesses")
                // console.log(unknownWord.allGuesses.join(" "))
                // console.log("----------")

                //check if the user input is part of the secred word. if so, this will be true and run the code
                if (unknownWord.checkWrong(answer.userGuess.toLowerCase())) {
                    for (var i = 0; i < unknownWord.wordArray.length; i++) {
                        if (answer.userGuess.toLowerCase() === unknownWord.wordArray[i].character.toLowerCase()) {
                            //this should go to the letter constructor
                            unknownWord.wordArray[i].isUsed = true;
                        }
                    }
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