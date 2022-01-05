const computerPicks = ['rock', 'paper', 'scissors'];
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
function computerPlay() {
  return computerPicks[randomNum(0, computerPicks.length)];
}

function game() {
  gameRound = 1;
  
  playRound = (playerSelection, computerSelection) => {
    rock = 'rock';
    paper = 'paper';
    scissors = 'scissors';

    playerSelection = prompt('Rock, Paper, Scissors!', '');
    computerSelection = computerPlay();

    playerAnswer = playerSelection.toLowerCase();
    computerAnswer = computerSelection.toLowerCase();

    while(playerAnswer === rock) {
      if (computerAnswer === rock) {
        console.log('Draw! Play another round.');
        break;
      } else if (computerAnswer === paper) {
        console.log('You lose! Paper beats Rock.');
        gameRound++;
        break;
      } else if (computerAnswer === scissors) {
        console.log('You win! Rock beats Scissors.');
        gameRound++;
      }
      break;
    }

    while(playerAnswer === paper) {
      if (computerAnswer === paper) {
        console.log('Draw! Play another round.');
        break;
      } else if (computerAnswer === scissors) {
        console.log('You lose! Scissors beats Paper.');
        gameRound++;
        break;
      } else if (computerAnswer === rock) {
        console.log('You win! Paper beats Rock.');
        gameRound++;
      }
      break;
    }

    while(playerAnswer === scissors) {
      if (computerAnswer === scissors) {
        console.log('Draw! Play another round.');
        break;
      } else if (computerAnswer === rock) {
        console.log('You lose! Rock beats Scissors.');
        gameRound++;
        break;
      } else if (computerAnswer === paper) {
        console.log('You win! Scissors beats Paper.');
        gameRound++;
      }
      break;
    }
  }

  if (gameRound < 5) {
    playRound();
  }
}

game();