var Letter = function(character){
    // console.log(character)
    this.character = character;
    // console.log(this.character)
    this.isUsed = false;
    
    this.showCharacter = function(printToScreen){
        // printToScreen = [];
        if(this.isUsed === true){
            // console.log(this.character)
            printToScreen.push(this.character)

        }else{
            printToScreen.push("_")
        }
        // console.log("this is in letter")
        // console.log(printToScreen.join(""))
    }
    // this.showCharacter()
}

module.exports = Letter;

// var test = new Letter("a")

// console.log(test)

// console.log("this is a test")