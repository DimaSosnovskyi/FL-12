import './style/style.less';
import {
          clearField,
          isPlayerToLose,isEqual,
          randomAct,showComputerWin,showPlayerWin
       } from './js'


const gamesButtons = document.querySelectorAll('.main__button');
const gameArea = document.querySelector('.main__game-area');

const gameLoop = () => {
    var conditions = { 
        round: 1,
        playerWins: 0,
        computerWins: 0
    };
    gamesButtons.forEach((el) => {
        el.addEventListener('click', () => {
            rockVsPaper(el.textContent,randomAct(),conditions);
            conditions.round++;
        })
        clearField(conditions);
    })
}
const rockVsPaper = (player1,player2,conditions) => {
     const newRow = document.createElement('div');
     newRow.className = 'main__text';
     const domEl = document.createElement('span');
     if (isPlayerToLose(player1,player2))   {
         domEl.innerText = `Round ${conditions.round} ${player1} vs ${player2}, You LOST`
         gameArea.append(newRow);
         newRow.append(domEl);
         conditions.computerWins++;
         showComputerWin(conditions);
     } else if (isEqual(player1,player2)) {
                 domEl.innerText = `Round ${conditions.round} ${player1} vs ${player2}, Equal`
                 gameArea.append(newRow);
                 newRow.append(domEl);
     } else {
         domEl.innerText = `Round ${conditions.round} ${player1} vs ${player2}, You Won`
         gameArea.append(newRow);
         newRow.append(domEl);
         conditions.playerWins++;
         showPlayerWin(conditions);
     } 
 }
gameLoop();


