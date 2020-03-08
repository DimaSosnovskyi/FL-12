const resetButton = document.querySelector('.main__reset');
const clearField = (conditions) => {
    resetButton.addEventListener('click', (event) => {
        const $removeChild = ($(event.currentTarget).closest('.main__game-area').find('.main__text'));
        $removeChild.remove();
        conditions.round = 1;
        conditions.playerWins = 0;
        conditions.computerWins = 0;
    })
}

export { clearField }