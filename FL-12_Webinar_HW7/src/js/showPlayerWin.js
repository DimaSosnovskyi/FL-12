const showPlayerWin = (conditions) => {
    if(conditions.playerWins === 3) {
        alert(`You win ${conditions.playerWins} against ${conditions.computerWins}`);
        conditions.computerWins = 0;
        conditions.playerWins = 0;
        conditions.round = 0;
    }
}
export { showPlayerWin }