function getMin () { 
    let minValue = Infinity;
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        }
    }
    return minValue;
}
getMin(3,0,-3);