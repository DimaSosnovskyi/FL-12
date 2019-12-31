function pipe(x) {
  let accum = x;
  for (let i = 1; i < arguments.length; i++) {
    let fn = arguments[i];
    accum = fn(accum);
  }
  return accum;
}

function addOne(x) {
  return x + 1;
}

pipe(10, addOne, addOne, addOne, addOne);