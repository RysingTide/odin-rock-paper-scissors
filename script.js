const computerPicks = ['rock', 'paper', 'scissors'];
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
function computerPlay() {
  return computerPicks[randomNum(0, computerPicks.length)];
}

function game() {
  gameRound = 1;
  userScore = 0;
  computerScore = 0;
  
  playRound = (playerSelection, computerSelection) => {
    rock = 'rock';
    paper = 'paper';
    scissors = 'scissors';

    playerSelection = prompt('Rock, Paper, Scissors!', '');
    computerSelection = computerPlay();

    playerAnswer = playerSelection.toLowerCase();
    computerAnswer = computerSelection.toLowerCase();

    if (playerAnswer !== rock && playerAnswer !== paper && playerAnswer !== scissors) {
      alert('Invalid entry. It\'s Rock, Paper, Scissors!');
      playRound();
    }

    if (playerAnswer === rock) {
      if (computerAnswer === rock) {
        console.log('Draw! Play another round.');
      } else if (computerAnswer === paper) {
        console.log('You lose! Paper beats Rock.');
        computerScore++;
      } else if (computerAnswer === scissors) {
        console.log('You win! Rock beats Scissors.');
        userScore++;
      }
    }

    if (playerAnswer === paper) {
      if (computerAnswer === paper) {
        console.log('Draw! Play another round.');
      } else if (computerAnswer === scissors) {
        console.log('You lose! Scissors beats Paper.');
        computerScore++;
      } else if (computerAnswer === rock) {
        console.log('You win! Paper beats Rock.');
        userScore++;
      }
    }

    if (playerAnswer === scissors) {
      if (computerAnswer === scissors) {
        console.log('Draw! Play another round.');
      } else if (computerAnswer === rock) {
        console.log('You lose! Rock beats Scissors.');
        computerScore++;
      } else if (computerAnswer === paper) {
        console.log('You win! Scissors beats Paper.');
        userScore++;
      }
    }
  }
}

game();