function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6)

    if (randomNumber == 0) {
        document.getElementById("randomImage").setAttribute("src", "images/dice1.png")
    }
    else if (randomNumber == 1) {
        document.getElementById("randomImage").setAttribute("src", "images/dice2.png")
    }
    else if (randomNumber == 2){
        document.getElementById("randomImage").setAttribute("src", "images/dice3.png")
    }
    else if (randomNumber == 3){
        document.getElementById("randomImage").setAttribute("src", "images/dice4.png")
    }
    else if (randomNumber == 4){
        document.getElementById("randomImage").setAttribute("src", "images/dice5.png")
    }
    else if (randomNumber == 5){
        document.getElementById("randomImage").setAttribute("src", "images/dice6.png")
    }
   
}