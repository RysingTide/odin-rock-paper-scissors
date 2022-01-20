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

  btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    pick = btn.innerText;
    playRound(pick);
    });
  });

  checkScore = () => {
    if (userScore === 3 || (gameRound == 5 && userScore > computerScore)) {
      let para = document.createElement('p');
      let node = document.createTextNode('YOU WIN!');
      para.appendChild(node);
      results.appendChild(para);
      gameOver = true;
    } else if (computerScore == 3 && (computerScore > userScore)) {
      let para = document.createElement('p');
      let node = document.createTextNode('YOU LOSE.');
      para.appendChild(node);
      results.appendChild(para);
      gameOver = true;
    } else if (gameRound == 5 && userScore == computerScore) {
      let para = document.createElement('p');
      let node = document.createTextNode('DRAW.');
      para.appendChild(node);
      results.appendChild(para);
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
        let para = document.createElement('p');
        let node = document.createTextNode(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        para.appendChild(node);
        results.appendChild(para);
        gameRound++;
      } else if (computerAnswer === paper) {
        let para = document.createElement('p');
        let node = document.createTextNode(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        para.appendChild(node);
        results.appendChild(para);
        computerScore++;
        gameRound++;
      } else if (computerAnswer === scissors) {
        let para = document.createElement('p');
        let node = document.createTextNode(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        para.appendChild(node);
        results.appendChild(para);
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
}

game();