function countNumbers(string) {
    let num;
    let obj = {
    };
    let array = [];
    for ( let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
           array.push(string[i]);
        }
    }
    for (let j = 0; j < array.length; j++) {
        num = array[j];
        if(obj[num]) {
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    return obj;
}
countNumbers('ee44ff55gg22f2g7');