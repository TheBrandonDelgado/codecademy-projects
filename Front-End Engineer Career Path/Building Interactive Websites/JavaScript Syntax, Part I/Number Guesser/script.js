let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess,computerGuess,targetNum) => {
  let differenceHuman = Math.abs(targetNum - humanGuess);
  let differenceComp = Math.abs(targetNum - computerGuess);
  if (differenceComp >= differenceHuman) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

const alert = userInput => {
  if (userInput > 9) {
    console.log('Invalid Input')
  }
}