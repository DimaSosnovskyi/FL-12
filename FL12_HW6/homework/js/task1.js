let a = prompt("Input the value: a");
let b = prompt("Input the value: b");
let c = prompt("Input the value: c");
let descriminant = b * b - 4*a*c;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input data");
} else if (descriminant < 0) {
    console.log("no solution");
} else {
    console.log("x=" + descriminant);
}
