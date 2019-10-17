var Letter = function(character){
    this.character = character;
    this.isUsed = false;
    
    //shows the letter if it has been guessed or _ if it has not
    this.showCharacter = function(printToScreen){
        if(this.isUsed === true){
            printToScreen.push(this.character)
        }else{
            printToScreen.push("_")
        }
    }

    //if the user guesses a letter correctly, it will now be displayed
    this.flipBoolean = function(userInput){
        if(userInput === this.character.toLowerCase()){
            this.isUsed = true;
        }
    }
}

module.exports = Letter;