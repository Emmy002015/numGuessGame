const numGuessGameStage9 = async (value, point) => {
  console.log('Welcome to stage 9')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 10`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation champ, you got to the last stage of the game')
    point += 1
    console.log(`your point is ${point}`)
    console.log(`Your are a winner`)
    console.log('Game Ended.....')

  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage8 = async (value, point) => {
  console.log('Welcome to stage 8')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 9`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 8')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage9((Math.round(Math.random() * 9)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage7 = async (value, point) => {
  console.log('Welcome to stage 7')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 8`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 7')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage8((Math.round(Math.random() * 8)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage6 = async (value, point) => {
  console.log('Welcome to stage 6')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 7`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 6')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage7((Math.round(Math.random() * 7)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage5 = async (value, point) => {
  console.log('Welcome to stage 5')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 6`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 5')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage6((Math.round(Math.random() * 6)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}


const numGuessGameStage4 = async (value, point) => {
  console.log('Welcome to stage 4')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 5`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 4')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage5((Math.round(Math.random() * 5)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage3 = async (value, point) => {
  console.log('Welcome to stage 3')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 4`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 3')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage4((Math.round(Math.random() * 4)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGameStage2 = async (value, point) => {
  console.log('Welcome to stage 2')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 3`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 2')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage3((Math.round(Math.random() * 3)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}
const numGuessGameStage1 = async (value, point) => {
  console.log('Welcome to stage 1')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between the range of 1 to 2`)
  if (parseInt(userValue) == value) {
    console.log('Winner!!!. Congratulation you are done with stage 1')
    point += 1
    console.log(`your point is now ${point}`)
    numGuessGameStage2((Math.round(Math.random() * 2)) + 1, point)
  } else {
    console.log('You loss. Try again')
  }

}

const numGuessGame = async () => {

  let point = 0
  let userInput = await prompt(`Enter username`)
  let username = userInput
  if (username.length != 0) {
    console.log(`welcome ${username} to EMJOE number guessing game. Enjoy!`)
    numGuessGameStage1((Math.round(Math.random() * 1)) + 1, point)
  } else {
    console.log('Enter your username')

  }
}
numGuessGame()