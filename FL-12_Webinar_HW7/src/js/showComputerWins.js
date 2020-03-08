const showComputerWin = (conditions) => {
    if(conditions.computerWins === 3) {
        alert(`Computer win ${conditions.playerWins} against ${conditions.computerWins}`);
        conditions.computerWins = 0;
        conditions.playerWins = 0;
        conditions.round = 0;
    }
}

export { showComputerWin }