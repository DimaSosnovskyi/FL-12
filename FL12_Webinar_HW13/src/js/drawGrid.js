const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawGrid = () => {
    ctx.fillRect(120,20,3,200);
    ctx.fillRect(180,20,3,200);
    ctx.fillRect(50,90,200,3);
    ctx.fillRect(50,150,200,3);
}

export { drawGrid }