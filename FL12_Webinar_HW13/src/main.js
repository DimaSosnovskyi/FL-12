import './style.less'
import { drawGrid } from '../src/js/drawGrid'
import { drawCircleForGrid} from '../src/js'
import { drawAsteriveForGrid } from  '../src/js'
import { random } from '../src/js'
import { drawRedLine } from '../src/js'
const button = document.querySelector('button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const winner = document.getElementById('winner');
drawGrid();
let arr = ['asterixe','circle'];
random(arr);
let playerTurn = true;
const changeTurn = () => {
  playerTurn = !playerTurn;
}
let leftTopAngleCircle = false;
let middleTopCircle = false;
let rightTopAngleCircle = false;
let leftMiddleAngleCircle = false;
let middleCircle = false;
let rightMiddleAngleCircle = false
let leftBottomAngleCircle = false;
let middleBottomCircle = false;
let rightBottomAngleCircle = false;
let leftTopAngleAsterixe = false;
let middleTopAsterixe = false;
let rightTopAngleAsterixe = false;
let leftMiddleAngleAsterixe = false;
let middleAsterixe = false;
let rightMiddleAngleAsterixe = false
let leftBottomAngleAsterixe = false;
let middleBottomAsterixe = false;
let rightBottomAngleAsterixe = false;
let score = 0;
$('#canvas').click((event) => {
  if (playerTurn) {
    console.log(score);
    console.log(event.pageX,event.pageY);
    if ((event.pageX > 60 && event.pageX < 125)
        && (event.pageY > 32 && event.pageY < 95) &&
        leftTopAngleCircle === false &&
        leftTopAngleAsterixe === false) {
        drawCircleForGrid(83,58);
        leftTopAngleCircle = true;
        console.log(leftTopAngleCircle,leftTopAngleAsterixe)
        console.log();
        changeTurn();
        score++;
    } else if ((event.pageX > 132 && event.pageX < 186)
        && (event.pageY > 33 && event.pageY < 93) &&
        middleTopCircle === false &&
        middleTopAsterixe === false) {
        drawCircleForGrid(153,58);
        middleTopCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 192 && event.pageX < 249)
        && (event.pageY > 33 && event.pageY < 93) &&
        rightTopAngleCircle === false &&
        rightTopAngleAsterixe === false) {
        drawCircleForGrid(220,58);
        rightTopAngleCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 61 && event.pageX < 125)
        && (event.pageY > 93 && event.pageY < 154) &&
        leftMiddleAngleCircle === false &&
        leftMiddleAngleAsterixe === false) {
        drawCircleForGrid(83, 123);
        leftMiddleAngleCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 132 && event.pageX < 185)
        && (event.pageY > 93 && event.pageY < 154) &&
        middleCircle === false &&
        middleAsterixe === false) {
        drawCircleForGrid(153,123);
        middleCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 192 && event.pageX < 252)
        && (event.pageY > 93 && event.pageY < 154) &&
        rightMiddleAngleCircle === false &&
        rightMiddleAngleAsterixe === false) {
        drawCircleForGrid(220,123);
        rightMiddleAngleCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 59 && event.pageX < 125)
        && (event.pageY > 163 && event.pageY < 220) &&
        leftBottomAngleCircle === false &&
        leftBottomAngleAsterixe === false) {
        drawCircleForGrid(83,183);
        leftBottomAngleCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 132 && event.pageX < 190)
        && (event.pageY > 163 && event.pageY < 220) &&
        middleBottomCircle === false &&
        middleBottomAsterixe === false) {
        drawCircleForGrid(153,183);
        middleBottomCircle = true;
        changeTurn();
        score++;
    } else if ((event.pageX > 192 && event.pageX < 249)
        && (event.pageY > 163 && event.pageY < 220) &&
        rightBottomAngleCircle === false &&
        rightBottomAngleAsterixe === false) {
        drawCircleForGrid(220,183);
        rightBottomAngleCircle = true;
        changeTurn();
        score++;
    } 
  } else {
    if ((event.pageX > 60 && event.pageX < 125)
      && (event.pageY > 32 && event.pageY < 95) &&
      leftTopAngleAsterixe === false &&
      leftTopAngleCircle === false) {
      drawAsteriveForGrid(72,47);
      leftTopAngleAsterixe = true;
      changeTurn();
      score++;
  } else if ((event.pageX > 132 && event.pageX < 186)
      && (event.pageY > 33 && event.pageY < 93) &&
      middleTopAsterixe === false &&
      middleTopCircle === false) {
      drawAsteriveForGrid(140,47);
      middleTopAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 192 && event.pageX < 249)
      && (event.pageY > 33 && event.pageY < 93) &&
      rightTopAngleAsterixe === false &&
      rightTopAngleCircle === false) {
      drawAsteriveForGrid(205,47);
      rightTopAngleAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 61 && event.pageX < 125)
      && (event.pageY > 93 && event.pageY < 154) &&
      leftMiddleAngleAsterixe === false &&
      leftMiddleAngleCircle === false) {
      drawAsteriveForGrid(72,110);
      leftMiddleAngleAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 132 && event.pageX < 185)
      && (event.pageY > 93 && event.pageY < 154) &&
      middleAsterixe === false &&
      middleCircle === false) {
      drawAsteriveForGrid(140,110);
      middleAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 192 && event.pageX < 252)
      && (event.pageY > 93 && event.pageY < 154) &&
      rightMiddleAngleAsterixe === false &&
      rightMiddleAngleCircle === false) {
      drawAsteriveForGrid(205,110);
      rightMiddleAngleAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 59 && event.pageX < 125)
      && (event.pageY > 163 && event.pageY < 220) &&
      leftBottomAngleAsterixe === false && 
      leftBottomAngleCircle === false) {
      drawAsteriveForGrid(72,172);
      leftBottomAngleAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 132 && event.pageX < 190)
      && (event.pageY > 163 && event.pageY < 220) &&
      middleBottomAsterixe === false &&
      middleBottomCircle === false) {
      drawAsteriveForGrid(140,172);
      middleBottomAsterixe = true;
      changeTurn();
      score++;
   } else if ((event.pageX > 192 && event.pageX < 249)
      && (event.pageY > 163 && event.pageY < 220) &&
      rightBottomAngleAsterixe === false &&
      rightBottomAngleCircle === false) {
      drawAsteriveForGrid(205,172);
      rightBottomAngleAsterixe = true;
      changeTurn();
      score++;
   } 
  } 
  getCrossedOut();
})
let isDraw = true;
const getCrossedOut = () => {
    if ((leftTopAngleAsterixe && middleTopAsterixe &&
        rightTopAngleAsterixe) || (leftTopAngleCircle &&
        middleTopCircle && rightTopAngleCircle)) {
        drawRedLine(50,56,250,56,'red');
        showWinner();
        isDraw = false;
        console.log(isDraw);
    } else if ((leftMiddleAngleAsterixe && middleAsterixe &&
        rightMiddleAngleAsterixe) || (leftMiddleAngleCircle &&
        middleCircle && rightMiddleAngleCircle)) {
        drawRedLine(50,124,250,124,'red'); 
        showWinner();
        isDraw = false;
    } else if ((leftBottomAngleAsterixe && middleBottomAsterixe &&
        rightBottomAngleAsterixe) || (leftBottomAngleCircle &&
        middleBottomCircle && rightBottomAngleCircle)) {
        drawRedLine(50,185,250,185,'red'); 
        showWinner();
        isDraw = false;
    } else if ((leftTopAngleAsterixe  && leftMiddleAngleAsterixe &&
        leftBottomAngleAsterixe) || (leftTopAngleCircle &&
        leftMiddleAngleCircle && leftBottomAngleCircle)) {
        drawRedLine(84,22,84,220,'red');
        showWinner();
        isDraw = false;
    } else if ((middleAsterixe  && middleTopAsterixe &&
        middleBottomAsterixe) || (middleCircle &&
        middleBottomCircle && middleTopCircle)) {
        drawRedLine(152,22,152,220,'red');
        showWinner();
        isDraw = false;
    } else if ((rightTopAngleAsterixe  && rightMiddleAngleAsterixe &&
        rightBottomAngleAsterixe) || (rightTopAngleCircle &&
        rightMiddleAngleCircle && rightBottomAngleCircle)) {
        drawRedLine(218,22,218,220,'red');
        showWinner();
        isDraw = false;
    } else if ((rightTopAngleAsterixe  && middleAsterixe &&
        leftBottomAngleAsterixe) || (rightTopAngleCircle &&
        middleCircle && leftBottomAngleCircle)) {
        drawRedLine(53,216,254,30,'red');
        showWinner();
        isDraw = false;
    } else if ((leftTopAngleAsterixe  && middleAsterixe &&
        rightBottomAngleAsterixe) || (leftTopAngleCircle &&
        middleCircle && rightBottomAngleCircle)) {
        drawRedLine(53,33,254,215,'red');
        showWinner();
        isDraw = false;
    }
    showDraw();
  }
button.addEventListener('click',() => {
  playerTurn = true;
  isDraw = true;
  winner.innerText = '';
  for ( var i = 0; i < 15; i++) {
    drawRedLine(50,56,250,56,'white');
    drawRedLine(50,124,250,124,'white'); 
    drawRedLine(50,185,250,185,'white');
    drawRedLine(84,22,84,220,'white');
    drawRedLine(152,22,152,220,'white');
    drawRedLine(218,22,218,220,'white');
    drawRedLine(53,216,254,30,'white');
    drawRedLine(53,33,254,215,'white');
  }
  drawGrid();
  drawWhiteCircle(83,58);drawWhiteCircle(153,58);
  drawWhiteCircle(220,58);drawWhiteCircle(83,123);
  drawWhiteCircle(153,123);drawWhiteCircle(220,123);
  drawWhiteCircle(83,183);drawWhiteCircle(153,183);
  drawWhiteCircle(220,183);
  leftTopAngleAsterixe = false;
  middleTopAsterixe = false;
  rightTopAngleAsterixe = false;
  leftMiddleAngleAsterixe = false;
  middleAsterixe = false;
  rightMiddleAngleAsterixe = false;
  leftBottomAngleAsterixe = false;
  middleBottomAsterixe = false;
  rightBottomAngleAsterixe = false;
  leftTopAngleCircle = false;
  middleTopCircle = false;
  rightTopAngleCircle = false;
  leftMiddleAngleCircle = false;
  middleCircle = false;
  rightMiddleAngleCircle = false;
  leftBottomAngleCircle = false;
  middleBottomCircle = false;
  rightBottomAngleCircle = false;
  score = 0;
})
const drawWhiteCircle = (x,y) => {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(x,y,22,0,Math.PI*2,false);
  ctx.fill();
}
const showWinner = () => {
    if (score % 2 !== 0) {
      winner.innerText = 'The winner is player with 0-sign';
    } else if (score % 2 === 0) {
      winner.innerText = 'The winner is player with x-sign';
    }
  }
  const showDraw = () => {
    if (score === 9 && isDraw) {
      winner.innerText = 'Draw!';
    }
  }
export { showDraw,showWinner }
