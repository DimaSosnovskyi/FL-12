import './style.less'
import { drawGrid } from '../src/js/drawGrid'
import { drawCircleForGrid} from '../src/js'
import { drawAsteriveForGrid } from  '../src/js'
import { random } from '../src/js'
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
drawGrid();
let arr = ['asterixe','circle'];
random(arr);

let playerTurn = true;
const changeTurn = () => {
  playerTurn = !playerTurn;
}
let leftTopAngle = false;
let middleTop = false;
let rightTopAngle = false;
let leftMiddleAngle = false;
let middle = false;
let rightMiddleAngle = false
let leftBottomAngle = false;
let middleBotton = false;
let rightBottomAngle = false;

$('#canvas').click((event) => {
  if (playerTurn) {
    console.log(event.pageX,event.pageY);
    if ((event.pageX > 60 && event.pageX < 125)
        && (event.pageY > 32 && event.pageY < 95) && leftTopAngle === false) {
        drawCircleForGrid(83,58);
        leftTopAngle = true;
        console.log();
        changeTurn();
    } else if ((event.pageX > 132 && event.pageX < 186)
        && (event.pageY > 33 && event.pageY < 93) && middleTop === false) {
        drawCircleForGrid(153,58);
        middleTop = true;
        changeTurn();
    } else if ((event.pageX > 192 && event.pageX < 249)
        && (event.pageY > 33 && event.pageY < 93) &&
        rightTopAngle === false) {
        drawCircleForGrid(220,58);
        rightTopAngle = true;
        changeTurn();
    } else if ((event.pageX > 61 && event.pageX < 125)
        && (event.pageY > 93 && event.pageY < 154) &&
        leftMiddleAngle === false) {
        drawCircleForGrid(83, 123);
        leftMiddleAngle = true;
        changeTurn();
    } else if ((event.pageX > 132 && event.pageX < 185)
        && (event.pageY > 93 && event.pageY < 154) &&
        middle === false) {
        drawCircleForGrid(153,123);
        middle = true;
        changeTurn();
    } else if ((event.pageX > 192 && event.pageX < 252)
        && (event.pageY > 93 && event.pageY < 154) &&
        rightMiddleAngle === false) {
        drawCircleForGrid(220,123);
        rightMiddleAngle = true;
        changeTurn();
    } else if ((event.pageX > 59 && event.pageX < 125)
        && (event.pageY > 163 && event.pageY < 220) &&
        leftBottomAngle === false) {
        drawCircleForGrid(83,183);
        leftBottomAngle = true;
        changeTurn();
    } else if ((event.pageX > 132 && event.pageX < 190)
        && (event.pageY > 163 && event.pageY < 220) &&
        middleBotton === false) {
        drawCircleForGrid(153,183);
        middleBotton = true;
        changeTurn();
    } else if ((event.pageX > 192 && event.pageX < 249)
        && (event.pageY > 163 && event.pageY < 220) &&
        rightBottomAngle === false) {
        drawCircleForGrid(220,183);
        rightBottomAngle = true;
        changeTurn();
    } 
    
  } else {
    if ((event.pageX > 60 && event.pageX < 125)
      && (event.pageY > 32 && event.pageY < 95) && leftTopAngle === false) {
      drawAsteriveForGrid(72,47);
      leftTopAngle = true;
      changeTurn();
  } else if ((event.pageX > 132 && event.pageX < 186)
      && (event.pageY > 33 && event.pageY < 93)&& middleTop === false) {
      drawAsteriveForGrid(140,47);
      middleTop = true;
      changeTurn();
   } else if ((event.pageX > 192 && event.pageX < 249)
      && (event.pageY > 33 && event.pageY < 93) &&
      rightTopAngle === false) {
      drawAsteriveForGrid(205,47);
      rightTopAngle = true;
      changeTurn();
   } else if ((event.pageX > 61 && event.pageX < 125)
      && (event.pageY > 93 && event.pageY < 154) &&
      leftMiddleAngle === false) {
      drawAsteriveForGrid(72,110);
      leftMiddleAngle = true;
      changeTurn();
   } else if ((event.pageX > 132 && event.pageX < 185)
      && (event.pageY > 93 && event.pageY < 154) &&
      middle === false) {
      drawAsteriveForGrid(140,110);
      middle = true;
      changeTurn();
   } else if ((event.pageX > 192 && event.pageX < 252)
      && (event.pageY > 93 && event.pageY < 154) &&
      rightMiddleAngle === false) {
      drawAsteriveForGrid(205,110);
      rightMiddleAngle = true;
      changeTurn();
   } else if ((event.pageX > 59 && event.pageX < 125)
      && (event.pageY > 163 && event.pageY < 220) &&
      leftBottomAngle === false) {
      drawAsteriveForGrid(72,172);
      leftBottomAngle = true;
      changeTurn();
   } else if ((event.pageX > 132 && event.pageX < 190)
      && (event.pageY > 163 && event.pageY < 220) &&
      middleBotton === false) {
      drawAsteriveForGrid(140,172);
      middleBotton = true;
      changeTurn();
   } else if ((event.pageX > 192 && event.pageX < 249)
      && (event.pageY > 163 && event.pageY < 220) &&
      rightBottomAngle === false) {
      drawAsteriveForGrid(205,172);
      rightBottomAngle = true;
      changeTurn();
   } 
  } 
})



