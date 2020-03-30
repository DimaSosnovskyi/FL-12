const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawAsterixe = (player) => {
    ctx.beginPath();
    ctx.moveTo(285,64);
    ctx.lineTo(319,95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(285,95);
    ctx.lineTo(319,64);
    ctx.stroke();
    ctx.font = "20px serif";
    ctx.fillText(player,330,80)
}
const drawCircle = (x,y,player) => {
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI*2,false);
    ctx.stroke();
    ctx.font = "20px serif";
    ctx.fillText(player,330,25);
}
const random = arr => {
    const value = arr[Math.floor(Math.random() * arr.length)];
    switch(value) {
      case 'circle':
        drawCircle(300,20,'Player1*');
        drawAsterixe('Player2')
        break;
      case 'asterixe':
        drawAsterixe("Player1");
        drawCircle(300,20,'Player2*');
        break;
    }
}
export { random }
