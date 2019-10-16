var Letter = require("./letter");

var Word = function (answer) {
    this.word = answer.split("")
    this.wordArray = [];
    // console.log(this.word)
    // this.makeLetter = function () {
    //     console.log(this.word.length)
        for (var i = 0; i < this.word.length; i++) {
            // console.log(this.word[i])
            // console.log(i)
            this.wordArray.push(new Letter(this.word[i]))
        }
    // }
    // this.makeLetter()
}

module.exports = Word;

// var test = new Word()

// console.log(test)

// array.push(value)