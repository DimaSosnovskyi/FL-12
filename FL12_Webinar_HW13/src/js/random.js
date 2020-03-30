const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawAsterixe = (player) => {
    ctx.beginPath();
    ctx.moveTo(400,5);
    ctx.lineTo(425,40);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(400,40);
    ctx.lineTo(425,5);
    ctx.stroke();
    ctx.font = "20px serif";
    ctx.fillText(player,450,25)
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
