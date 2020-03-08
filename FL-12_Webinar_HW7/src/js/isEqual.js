const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const isEqual = (player1,player2) => {
    return (player1 === rock) && (player2 === rock) ||
           (player1 === paper) && (player2 === paper) ||
           (player1 === scissors) && (player2 === scissors)
}
export { isEqual };