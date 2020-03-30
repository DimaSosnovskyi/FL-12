const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawAsterixe = () => {
    ctx.beginPath();
    ctx.moveTo(298,68);
    ctx.lineTo(319,86);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(298,95);
    ctx.lineTo(320,86);
    ctx.stroke();
}
const drawAsteriveForGrid = (x,y) => {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(x,y);
    ctx.lineTo(x+27,y+26);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x,y+26);
    ctx.lineTo(x+27,y);
    ctx.stroke();
}
export { drawAsteriveForGrid, drawAsterixe }