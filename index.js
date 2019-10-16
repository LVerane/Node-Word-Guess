var Word = require("./word");
var inquirer = require("inquirer");

var wordPool = ["Titanic", "Frozen", "Ratatouille"]
var randomPosition = Math.floor(Math.random() * 3)
var wordToGuess = wordPool[randomPosition]

var unknownWord = new Word(wordToGuess)
console.log(unknownWord)
console.log("----------------")

var printToScreen = [];

function printArrayToScreen() {
    printToScreen = [];//resets it every time
    for (var i = 0; i < unknownWord.wordArray.length; i++) {
        if (unknownWord.wordArray[i].isUsed === true) {
            printToScreen.push(unknownWord.wordArray[i].character)
        } else {
            printToScreen.push("_")
        }
    }
    if(printToScreen.join("") === wordToGuess){
        console.log("Congratulations, you got it!")
    }else{
        console.log(printToScreen.join(" "))
        callInquirer()
    }
}

printArrayToScreen()
// console.log(unknownWord.answer.split(""))
function callInquirer(){
inquirer
    .prompt([
        {
            name: "userGuess",
            message: "Guess a letter",
        }
    ])
    .then(function (answer) {
        for (var i = 0; i < unknownWord.wordArray.length; i++) {
            // console.log("this is a test")
            // console.log("."+answer.userGuess+".")
            // console.log("."+unknownWord.wordArray[i].character+".")
            if(answer.userGuess.toLowerCase() === unknownWord.wordArray[i].character.toLowerCase()){
                // console.log("this works")
                unknownWord.wordArray[i].isUsed = true;
            }
        }
        printArrayToScreen()
        // callInquirer()
    });
}

// callInquirer()