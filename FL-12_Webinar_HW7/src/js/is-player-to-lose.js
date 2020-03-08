const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

const isPlayerToLose = (player1,player2) => {
    return (player1 === rock) && (player2 === paper) ||
     (player1 === paper) && (player2 === scissors) ||
     (player1 === scissors) && (player2 === rock);
 }

 export { isPlayerToLose };