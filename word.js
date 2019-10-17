var Letter = require("./letter");

var Word = function () {
    this.wordArray = [];
    this.wrongGuesses = [];
    this.allGuesses = [];

    this.makeLetter = function (answer) {
        this.word = answer.split("")
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push(new Letter(this.word[i]))
        }
    }
    
    this.checkWrong = function(userInput){
        if (this.word.join("").toLowerCase().includes(userInput)){//maybe rearrange my variables so I don't have to join here?
            return true;
        } else{
            this.wrongGuesses.push(userInput);
            return false;
        }
    }
    
    this.checkAll = function(userInput){
        if (!this.allGuesses.includes(userInput)){
            this.allGuesses.push(userInput);
            return true;
        } else{
            return false;
        }
    }
}

module.exports = Word;