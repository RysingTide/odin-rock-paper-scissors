const btnContainer = document.querySelector('.btn-container');
const btns = btnContainer.querySelectorAll('button');
const results = document.querySelector('.results');
const resetBtn = document.querySelector('#reset-btn');
resetBtn.style.marginTop = '5px';

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
  
  resetGame = () => {
    gameRound = 0;
    userScore = 0;
    computerScore = 0;
    gameOver = false;
    btns.forEach((btn) => { btn.disabled = false});
  }
  
  btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    pick = btn.id;
    playRound(pick);
    });
  });

  resetBtn.addEventListener('click', () => {
    resetGame();
    results.innerHTML = '';
  })

  createPara = (string) => {
    let para = document.createElement('p');
    let node = document.createTextNode(string);
    para.appendChild(node);
    results.appendChild(para);
  }

  checkScore = () => {
    if (gameRound == 5 && userScore > computerScore) {
      createPara('YOU WIN!');
      btns.forEach((btn) => { btn.disabled = true});
      gameOver = true;
    } else if (gameRound == 5 && computerScore > userScore) {
      createPara('YOU LOSE.');
      btns.forEach((btn) => { btn.disabled = true});
      gameOver = true;
    } else if (gameRound == 5 && userScore == computerScore) {
      createPara('DRAW.');
      btns.forEach((btn) => { btn.disabled = true});
      gameOver = true;
    }
  }

  playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();

    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        createPara(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        gameRound++;
      } else if (computerSelection === 'paper') {
        createPara(`${computerSelection}(Computer) beats ${playerSelection}(Player).`);
        computerScore++;
        gameRound++;
      } else if (computerSelection === 'scissors') {
        createPara(`${playerSelection}(Player) beats ${computerSelection}(Computer).`);
        userScore++;
        gameRound++;
      }
    }

    if (playerSelection === 'paper') {
      if (computerSelection=== 'paper') {
        createPara(`${playerSelection} vs ${computerSelection} - It's a draw.`);;
        gameRound++;
      } else if (computerSelection=== 'scissors') {
        createPara(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        computerScore++;
        gameRound++;
      } else if (computerSelection=== 'rock') {
        createPara(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        userScore++;
        gameRound++;
      }
    }

    if (playerSelection=== 'scissors') {
      if (computerSelection=== 'scissors') {
        createPara(`${playerSelection} vs ${computerSelection} - It's a draw.`);
        gameRound++;
      } else if (computerSelection=== 'rock') {
        createPara(`Computer(${computerSelection}) beats User(${playerSelection}).`);
        computerScore++;
        gameRound++;
      } else if (computerSelection=== 'paper') {
        createPara(`User(${playerSelection}) beats Computer(${computerSelection}).`);
        userScore++;
        gameRound++;
      }
    }
    createPara(`Round ${gameRound} | Player score is: ${userScore} | Computer score is: ${computerScore}`)
    checkScore();
  }
}

game();