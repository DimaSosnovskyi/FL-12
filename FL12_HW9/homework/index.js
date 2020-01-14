function convers () {
    let finalArray = [];
    for(let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            finalArray[i] = arguments[i] + '';
        } else if(typeof arguments[i] === 'string') {
            finalArray[i] = +arguments[i];
        }
    }
    return finalArray;
}
convers('1', 2, 3, '4');

function executeforEach (list,callback) {
    for(var i = 0; i < list.length; i++) {
        callback(list[i])
    }
}
executeforEach([1,2,3],function (el) {
   console.log(el*2);
   });

function mapArray (list,callback) {
    let array = [];
    for(var i = 0; i < list.length; i++) {
        array[i] = callback(+list[i])
    }
    return console.log(array);
}
mapArray([2,'5',8],function (el) {
   return el + 3;
});

function filterArray (list,callback) {
    let array = [];
    for(var i = 0; i < list.length; i++) {
        if (callback(list[i]) % 2 === 0) {
            array.push(callback(list[i]));
        }
    }
    return console.log(array);
}
filterArray([2, 5, 8], function (el) {
    return el;
});

function makeListFromRange (arrayRange) {
    let rangeMin = 0;
    let rangeMax = 0;
    for (let i = 0; i < arrayRange.length; i++) {
        if(i === 0) {
            rangeMin = rangeMin + arrayRange[i];
        } else if(i === 1) {
            rangeMax = rangeMax + arrayRange[i];
        }
    }
    let range = rangeMax - rangeMin;
    let listFromRange = [];
    for (let j = 0; j < range + 1; j++) {
        if (j === 0) {
            listFromRange[0] = rangeMin;
        }
        if (j !== 0) {
            listFromRange[j] = ++rangeMin;
        } 
    }
    return listFromRange;
}
makeListFromRange([2,7]);

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArayOfKeys (obj) {
    let array = [];
    for(var i = 0; i < obj.length; i++) {
        array[i] = obj[i].name;
    }
    return console.log(array);
}
getArayOfKeys(actors);

function substitute(list) {
    let array = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 30) {
            array[i] = '*';
        } else {
            array[i] = list[i];
        }
    }
    return console.log(array);
}
substitute([58, 14, 48, 2, 31, 29]);

function reverse (string) {
    let reverseString = '';
    let arrayFromString = string.split('');
    let letter;
    
    for (var i = 0; i < arrayFromString.length; i++) {
        letter = arrayFromString[arrayFromString.length - 1 -i]
        reverseString += letter;
    }
    return reverseString;
}
reverse('hey world');

function formatDate (input) {
    const year = input.getFullYear();
    const month = input.getMonth() +1;
    const date = input.getDate();
    let hour = input.getHours();
    const minute = input.getMinutes();
    if (hour < 10) {
        hour = '0' + hour;
    }

    return year + '/' + month + '/' + date + ' ' + hour + ':' + minute;
}
formatDate(new Date('6/15/2018 09:15:00'));