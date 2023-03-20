let pcResult,playerResult;
window.onload = function () {
    pcResult = sessionStorage.getItem('pcResult');
    playerResult = sessionStorage.getItem('playerResult');
    document.querySelector('.Cscore').innerHTML =sessionStorage.getItem('pc');
    document.querySelector('.Yscore').innerHTML = sessionStorage.getItem('player');
    if(sessionStorage.getItem('pc')>sessionStorage.getItem('player')){
      document.querySelector('.play').style.visibility = 'hidden'
    }
  }

function playerIncrement() {
    var player =parseInt(sessionStorage.getItem('player'))+1;
    sessionStorage.setItem('player', player);
}

function pcIncrement(score) {
  var pc =parseInt(sessionStorage.getItem('pc'))+1;
  sessionStorage.setItem('pc', pc);
}

function hideRules(){
  document.querySelector('.rules__img').style.visibility = 'hidden';
}

function showRules(){
  document.querySelector('.rules__img').style.visibility = 'visible';
}


const scissorChild = `<div class="scissors">
  <img src="./images/scissors.png">
</div>`;

const rockChild = `<div class="rock">
  <img src="./images/rock.png">
</div>`;

const paperChild = `<div class="paper">
  <img src="./images/paper.png">
</div>`;

const winner = () => {
    let player = sessionStorage.getItem('playerResult');
    let computer = sessionStorage.getItem('pcResult');
    const pcResult = document.querySelector('.pcResult')
    const playerResult = document.querySelector('.playerResult');
    const result = document.querySelector('.result_text')
    const against = document.querySelector('.result_winner')
    if (player === 'rock') {
        playerResult.innerHTML = rockChild;
    } else if (player === 'paper') {
        playerResult.innerHTML = paperChild;
    } else {
        playerResult.innerHTML = scissorChild;
    }

    if (computer === 'rock') {
        pcResult.innerHTML = rockChild;
    } else if (computer === 'paper') {
        pcResult.innerHTML = paperChild;
    } else {
        pcResult.innerHTML = scissorChild;
    }

      if (player == computer) {
        result.innerHTML = "Tie";
        against.innerHTML = "";
      } else if (player === "rock") {
        if (computer === "paper") {
          result.textContent = "PC Won";
          against.textContent = "Against You"
          pcIncrement();
        } else {
          result.textContent = "You Won";
          against.textContent = "Against PC"
          playerIncrement()
        }
      } else if (player === "scissors") {
        if (computer === "rock") {
          result.textContent = "PC Won";
          against.textContent = "Against You"
          pcIncrement()
        } else {
          result.textContent = "You Won";
          against.textContent = "Against PC"
          playerIncrement()
        }
      } else if (player === "paper") {
        if (computer === "scissors") {
          result.textContent = "PC Won";
          against.textContent = "Against You"
          pcIncrement()
        } else {
          result.textContent = "You Won";
          against.textContent = "Against PC"
          playerIncrement()
        }
      }
}

function playAgain(){
  window.location.href = 'index.html';
}

function next(){
  window.location.href = 'won.html';
}

winner()



