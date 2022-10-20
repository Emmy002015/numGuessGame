console.log("This is me testing nodejs")
function guessNumber() {
  var randomNum = Math.floor(Math.random() * 51);

  // output to the console for debugging
  console.log(randomNum);

  // declaring a variable
  var guess;
  guess = prompt("Please ener a number between 1 and 50")

  // console.log("Your guess is: " + guess);

  if (guess < randomNum) {
    console.log("Your guess is lower than computer number")
  } else if (guess > randomNum) {
    console.log("Your guess is higher than computer number")
  } else if (guess == randomNum) {
    console.log("Your guess is correct. You win!. Cogratulations!!!")
  } else {
    console.log("Your entry is invalid. Please try again")
  }
}
guessNumber()
print("I am done")

var num = 1
var randonNum = Math.floor(Math.random()*num) + 1
console.log(randonNum)