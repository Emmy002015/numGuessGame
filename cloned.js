let score = 0
let range = 2
console.log( "welcome to emjoe guessing game")
console.log("Please enter your name")
Input = prompt()
console.log("lets begin", Input)
function random(range) {
    let randomNumber =
Math.floor( Math.random()* range) + 1
    return randomNumber
}
let randomNum = 0
// let randomNum = 0
do {
    randomNum = random(range)
    //console.log(randomNum)
    console.log("Guess a number between 1 and ", range)

    userNumber = parseInt(prompt())
    if (userNumber === randomNum){
        console.log( "Correct guess")
        range += 1
        score += 1
    } else {
        console.log("Wrong Guess!!!!!")
        console.log( "Your Score is ", score)
        console.log("Thanks for playing")
    }
} while (userNumber === randomNum)
