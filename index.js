var Word = require("./word");
var inquirer = require("inquirer");

var wordPool = ["Titanic", "Frozen", "Ratatouille"]
var randomPosition = Math.floor(Math.random() * 3)
var wordToGuess = wordPool[randomPosition]

// var unknownWord = new Word(wordToGuess)
var unknownWord = new Word()
unknownWord.makeLetter(wordToGuess)

console.log(unknownWord)
console.log("----------------")

// var printToScreen = [];
var chances = 5;
// var correctGuess;
// var wasGuessed;
// var wrongGuesses = [];
// var test;

function printArrayToScreen() {
    var printToScreen = [];//resets it every time
    for (var i = 0; i < unknownWord.wordArray.length; i++) {
        unknownWord.wordArray[i].showCharacter(printToScreen);
        // if (unknownWord.wordArray[i].isUsed === true) {
        //     printToScreen.push(unknownWord.wordArray[i].character)
        // } else {
        //     printToScreen.push("_")
        // }
        // console.log(test)
    }
    // console.log(printToScreen.join(" "))
    if (printToScreen.join("") === wordToGuess) {
        console.log("Congratulations, you got it!")
    } else {
        console.log("this is in index")
        console.log(printToScreen.join(" "))
        // console.log(wrongGuesses.join(" "))
        callInquirer()
    }
}

printArrayToScreen()
// console.log(unknownWord.answer.split(""))
function callInquirer() {
    inquirer
        .prompt([
            {
                name: "userGuess",
                message: "Guess a letter",
            }
        ])
        .then(function (answer) {
            // var duplicateLetter = unknownWord.checkAll(answer.userGuess);
            // console.log(unknownWord.duplicateLetter)
            if (unknownWord.checkAll(answer.userGuess)) {
                console.log(unknownWord.allGuesses.join(" "))
                var correctGuess = false;
                for (var i = 0; i < unknownWord.wordArray.length; i++) {
                    if (answer.userGuess.toLowerCase() === unknownWord.wordArray[i].character.toLowerCase()) {
                        unknownWord.wordArray[i].isUsed = true;
                        correctGuess = true;
                    }
                }
                if (correctGuess === false) {
                    chances--;
                    // wrongGuesses.push(answer.userGuess.toLowerCase())
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

// callInquirer()

