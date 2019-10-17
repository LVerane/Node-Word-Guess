var Letter = function(character){
    this.character = character;
    this.isUsed = false;
    
    this.showCharacter = function(printToScreen){
        if(this.isUsed === true){
            printToScreen.push(this.character)
        }else{
            printToScreen.push("_")
        }
    }
}

module.exports = Letter;