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
}
const drawCircle = (x,y,player) => {
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI*2,false);
    ctx.stroke();
}
const random = value => {
  drawCircle(300,20);
  drawAsterixe()
  drawAsterixe();
  drawCircle(300,20);
}
export { random }
