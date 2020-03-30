const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawRedLine = (x,y,z,w,color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x,y);
    ctx.lineTo(z,w);
    ctx.stroke();
} 
export { drawRedLine }
