var Letter = require("./letter");

var Word = function () {
    this.wordArray = [];
    // console.log(this.word)
    this.makeLetter = function (answer) {
        this.word = answer.split("")
    //     console.log(this.word.length)
        for (var i = 0; i < this.word.length; i++) {
            // console.log(this.word[i])
            // console.log(i)
            this.wordArray.push(new Letter(this.word[i]))
        }
    }
    
    this.wrongGuesses = [];

    // this.checkWrong() = function(someVariable){
    //     var isWrong = false;
    //     for (var i = 0; i < this.wrongGuesses.length; i++) {
    //         if()
    //     }
    //     this.wrongGuesses.push(someVariable)
    // }

    this.allGuesses = [];
    
    this.checkAll = function(userInput){
        if (!this.allGuesses.includes(userInput)){
            this.allGuesses.push(userInput);
            return true;
        } else{
            return false;
        }


        // var alreadyGuessed = false;
        // var shouldIRunThis;
        // for (var i = 0; i < this.allGuesses.length; i++) {
        //     if(userInput === this.allGuesses[i]){
        //         alreadyGuessed = true;
        //     }
        // }
        // if(alreadyGuessed === false){
        //     this.allGuesses.push(userInput)
        //     shouldIRunThis = true;
        // }else{
        //     shouldIRunThis = false;
        // }
        // return shouldIRunThis;
    }

    // this.makeLetter()
}

module.exports = Word;

// var test = new Word()

// console.log(test)

// array.push(value)