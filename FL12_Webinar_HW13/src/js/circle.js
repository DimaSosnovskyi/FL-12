const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawCircle = (x,y) => {
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI*2,false);
    ctx.stroke();
}
const drawCircleForGrid  = (x,y) => {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(x,y,15,Math.PI*2,false);
    ctx.stroke();
}
export { drawCircle,drawCircleForGrid }