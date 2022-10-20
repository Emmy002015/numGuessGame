var keepPlaying = true;
var currentGuess = 0;
var targetMax = null;
var targetMin = null;
var targetNumber = parseInt(targetMin + Math.random()*((targetMax - targetMin)+1));
var turnCounter = 1;

targetMax = prompt("Choose a whole number to set your maximum parameter.");
targetMin = prompt("Choose a whole number to set your minimum parameter.");
while (keepPlaying) {
    //get a valid guess
    do {
        currentGuess = prompt("Please guess a whole number between " +targetMin+ " and " +targetMax+ ".", "");
    }
    while (!((currentGuess > targetMin) && (currentGuess <= targetMax)))
    //handle the guess
    if (currentGuess == targetNumber) {
        alert("YOU'RE RIGHT!!!\n\nIt took you " + turnCounter + " tries to guess the number.");
        keepPlaying = confirm("Do you want to play again?")
        if (!keepPlaying) {
            break; //not needed, just wanted to show how to exit a loop early
        }
        //reset game
        targetNumber = parseInt(targetMin + Math.random()*((targetMax-targetMin)+1));
        turnCounter = 0;
    } else if (currentGuess > targetNumber) {
        alert("Too big, try again.");
    } else if (currentGuess < targetNumber) {
        alert("Too small, try again.");
    } else { //should be inaccessible
        alert("There was an error parsing your guess.");
    }
    //update counter
    turnCounter++;
}
document.write("<h1>Thank you for using my <font color='red'>AWESOME</font>, web-based guessing game.</h1>");