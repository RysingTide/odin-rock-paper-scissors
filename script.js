const btns = document.querySelectorAll('button');
const results = document.querySelector('.results');

const computerPicks = ['Rock', 'Paper', 'Scissors'];
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
    computerSelection = computerPlay();

    playerAnswer = playerSelection.toLowerCase();
    computerAnswer = computerSelection.toLowerCase();

    if (playerAnswer !== rock && playerAnswer !== paper && playerAnswer !== scissors) {
      alert('Invalid entry. It\'s Rock, Paper, Scissors!');
    }

    if (playerAnswer === rock) {
      if (computerAnswer === rock) {
        console.log(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        gameRound++;
      } else if (computerAnswer === paper) {
        console.log(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        computerScore++;
        gameRound++;
      } else if (computerAnswer === scissors) {
        console.log(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        userScore++;
        gameRound++;
      }
    }

    if (playerAnswer === paper) {
      if (computerAnswer === paper) {
        console.log(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        gameRound++;
      } else if (computerAnswer === scissors) {
        console.log(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        computerScore++;
        gameRound++;
      } else if (computerAnswer === rock) {
        console.log(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        userScore++;
        gameRound++;
      }
    }

    if (playerAnswer === scissors) {
      if (computerAnswer === scissors) {
        console.log(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        gameRound++;
      } else if (computerAnswer === rock) {
        console.log(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        computerScore++;
        gameRound++;
      } else if (computerAnswer === paper) {
        console.log(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        userScore++;
        gameRound++;
      }
    }
    console.log(`Round ${gameRound} | Player score is: ${userScore} | Computer score is: ${computerScore}`);
    checkScore();
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      pick = btn.innerText;
      playRound(pick);
    });
  });
}

game();