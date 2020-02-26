function maxElement (array) {
    return array.find(el => Math.max(...array) === el);
}
const array1 = [1,2,3,4,56,7,8,76,5,241,5,356,567,2];
console.log(maxElement(array1));

const array2 = [1,2,3];
function copyArray (array) {
    const[...newArray] = array;
    return newArray;
} 
const copiedArray = copyArray(array2);
console.log(copiedArray,array2);
console.log(copiedArray === array2);

function addUniqueId (obj) {
    let{...newObj} = obj;
    newObj.id = Symbol();
    return newObj;
}
console.log(addUniqueId({name:123}));

function findUniqueElements (array) {
    const unique = new Set ();
    array.forEach(function (el) {
        if(!(unique.has(el))) {
            unique.add(el);
        }
    })
    return unique;
}
console.log(findUniqueElements([1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1]));

const oldObj = {
    name:'Someone',
    deteils: {
        id:1,
        age:11,
        university: 'UNI'
    }
}

function regroupObject (obj) {
    let{name,deteils} = obj;
    let{id,age,university} = deteils;
    return {
        university,
        user: {
            age,
            firstName:name,
            id
        }
    }
}
console.log(regroupObject(oldObj));

function hideNumber (phoneNumber) {
    var arr = [];
    var asterix = phoneNumber.length;
    for (var i = 0; i < phoneNumber.length; i++) {
        if(arr.length >= 4) {
            break;
        }
        arr.push(phoneNumber[phoneNumber.length - 1 - i]);
    }
    arr = String(arr.reverse());
    var str = '';
    for (let i = 0; i < arr.length; i++) {
        if(!(arr[i] === ',')) {
            str += arr[i];
        }
    }
    return str.padStart(asterix,'*');
}
console.log(hideNumber('0123456789'));

function add (a=0,b=0) {
    if (!a || !b) {
        throw new Error ('Missing property')
    }
    return a + b;
}
console.log(add(1));

function useApi (url) {
    fetch(url)
       .then(function (response) {
           return response.json();
       })
       .then(function(data) {
           var nameArray = [];
           for (let name of data) {
               nameArray.push(name.name);
           }
           return console.log(nameArray.sort());
       })
}
useApi('https://jsonplaceholder.typicode.com/users');

async function asyApi (url) {
    const result = await fetch(url);
    const data = await result.json();
    var nameArray = [];
           for (let name of data) {
               nameArray.push(name.name);
           }
           return console.log(nameArray.sort());
}
asyApi('https://jsonplaceholder.typicode.com/users');