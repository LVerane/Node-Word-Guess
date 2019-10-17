var Letter = require("./letter");

var Word = function () {
    this.wordArray = [];
    this.wrongGuesses = [];
    this.allGuesses = [];

    this.makeLetter = function (answer) {
        this.word = answer.split("")
        //runs the Letter constuct making an object for each letter in the word the user has to guess
        this.word.forEach(element =>{
            this.wordArray.push(new Letter(element))
        });
    }
    
    this.checkWrong = function(userInput){
        //check if the guessed letter is in the secret word
        if (this.word.join("").toLowerCase().includes(userInput)){
            return true;
        } else{
            //if it is not, push it to the array of wrong guesses
            this.wrongGuesses.push(userInput);
            return false;
        }
    }
    
    this.checkAll = function(userInput){
        //check if the user guess was ever guessed before
        if (!this.allGuesses.includes(userInput)){
            this.allGuesses.push(userInput);
            return true;
        } else{
            return false;
        }
    }

    this.printArray = function(arrayToPrint){
        //calls the function in each letter object to print it
        this.wordArray.forEach(element => {
            element.showCharacter(arrayToPrint)
        });
    }
}

module.exports = Word;