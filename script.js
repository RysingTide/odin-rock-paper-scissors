const computerPicks = ['rock', 'paper', 'scissors'];
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
function computerPlay() {
  return computerPicks[randomNum(0, computerPicks.length)];
}

function game() {
  gameRound = 0;
  userScore = 0;
  computerScore = 0;
  gameOver = false;

  rock = 'rock';
  paper = 'paper';
  scissors = 'scissors';

  checkScore = () => {
    if (userScore === 3 || (gameRound == 5 && userScore > computerScore)) {
      console.log('YOU WIN!');
      gameOver = true;
    } else if (computerScore == 3 && (computerScore > userScore)) {
      console.log('YOU LOSE.');
      gameOver = true;
    } else if (gameRound == 5 && userScore == computerScore) {
      console.log(`DRAW.`);
      gameOver = true;
    }
  }

  playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt('Rock, Paper, Scissors!', '');
    computerSelection = computerPlay();

    playerAnswer = playerSelection.toLowerCase();
    computerAnswer = computerSelection.toLowerCase();

    if (playerAnswer !== rock && playerAnswer !== paper && playerAnswer !== scissors) {
      alert('Invalid entry. It\'s Rock, Paper, Scissors!');
    }

    if (playerAnswer === rock) {
      if (computerAnswer === rock) {
        console.log(`It's a draw.`);
        gameRound++;
      } else if (computerAnswer === paper) {
        console.log('Paper beats Rock.');
        computerScore++;
        gameRound++;
      } else if (computerAnswer === scissors) {
        console.log('Rock beats Scissors.');
        userScore++;
        gameRound++;
      }
    }

    if (playerAnswer === paper) {
      if (computerAnswer === paper) {
        console.log(`It's a draw.`);
        gameRound++;
      } else if (computerAnswer === scissors) {
        console.log('Scissors beats Paper.');
        computerScore++;
        gameRound++;
      } else if (computerAnswer === rock) {
        console.log('Paper beats Rock.');
        userScore++;
        gameRound++;
      }
    }

    if (playerAnswer === scissors) {
      if (computerAnswer === scissors) {
        console.log(`It's a draw.`);
        gameRound++;
      } else if (computerAnswer === rock) {
        console.log('Rock beats Scissors.');
        computerScore++;
        gameRound++;
      } else if (computerAnswer === paper) {
        console.log('Scissors beats Paper.');
        userScore++;
        gameRound++;
      }
    }
    console.log(`Round ${gameRound} | Player score is: ${userScore} | Computer score is: ${computerScore}`);
    checkScore();
  }

  while (gameRound <= 5 && !gameOver) {
    playRound();
  }
}

game();