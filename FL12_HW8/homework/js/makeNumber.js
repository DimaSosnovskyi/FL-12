function makeNumber(string) {
    let array = [];
    for ( let i = 0; i < string.length; i++) {
        if(!isNaN(string[i])) {
            array[i] = string[i];
        }
    }
    return array.join('');
}
makeNumber('h33hh33h11h54h');