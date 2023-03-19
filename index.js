let pc = 0, player = 0;
window.onload = function () {
    if (sessionStorage.getItem('pc')) {
        pc = sessionStorage.getItem('pc');
        player = sessionStorage.getItem('player');
    }
    else {
        sessionStorage.setItem('pc', 0)
        sessionStorage.setItem('player', 0);
        sessionStorage.setItem('pcResult','demo')
        sessionStorage.setItem('playerResult','demo')
    }
    document.querySelector('.Cscore').innerHTML = pc;
    document.querySelector('.Yscore').innerHTML = player;
}


function hideRules(){
    document.querySelector('.rules__img').style.visibility = 'hidden';
  }
  
  function showRules(){
    document.querySelector('.rules__img').style.visibility = 'visible';
  }

const setResult = (player,pc)=>{
    sessionStorage.setItem('pcResult',pc);
    sessionStorage.setItem('playerResult',player);
    window.location.href = 'result.html'
}


const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissors");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];
    playerOptions.forEach((option) => {
        option.addEventListener("click", function () {
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            if (option === rockBtn) {
                setResult("rock", computerChoice);
            }
            if (option === paperBtn) {
                setResult("paper", computerChoice);
            }
            if (option === scissorBtn) {
                setResult("scissors", computerChoice);
            }
        });
    });
};

playGame();