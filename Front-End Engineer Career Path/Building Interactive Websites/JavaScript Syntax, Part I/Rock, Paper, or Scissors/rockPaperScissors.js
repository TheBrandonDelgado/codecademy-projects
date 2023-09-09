const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else {
      console.log('incorrect input');
    }
  }
  
  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
  
    if (choice === 0) {
      return 'rock';
    } else if (choice === 1) {
      return 'paper';
    } else if (choice === 2) {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Wins';
      } else if (computerChoice === 'scissors') {
        return 'You win!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      } else if (computerChoice === 'scissors') {
        return 'Computer Wins';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Wins';
      } else if (computerChoice === 'paper') {
        return 'You win!';
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
  
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();