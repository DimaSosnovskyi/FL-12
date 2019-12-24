let sideA = prompt('Input the value: sideA');
let sideB = prompt('Input the value: sideB');
let sideC = prompt('Input the value: sideC');
let sumAB = +sideA + +sideB;
let sumBC = +sideB + +sideC;
let sumCA = +sideC + +sideA;


if (sideA === '' || sideB === '' || sideC === '') {
    alert('input values should be ONLY numbers');
} else if (sideA === '0' || sideB === '0' || sideC === '0') {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert('input values should be ONLY numbers');
} else if (sideA === null || sideB === null || sideC === null) {
    alert('input values should be ONLY numbers ');
} else if (sumAB <= sideC || sumBC <= sideA ||sumCA <= sideB) {
    console.log('Triangle doesn’t exist');
} else if (sideA === sideB && sideB === sideC && sideC === sideA) {
    console.log('Equilateral triangle');
} else if (sideA === sideC || sideC === sideB || sideB === sideA) {
    console.log('Isosceles triangle');
} else if (sideA !== sideB && sideB !== sideC && sideC !== sideA) {
    console.log('Scalene triangle');
}
