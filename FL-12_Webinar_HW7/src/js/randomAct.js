const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const randomAct = () => {
    let array = [rock,paper,scissors];
    return array[Math.floor(Math.random() * array.length)];
}
export { randomAct };