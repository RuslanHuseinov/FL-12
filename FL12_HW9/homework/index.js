// task1 done
let result = [];
function convert(...last) {
    for (let i of last) {
        if (typeof i === 'string') {
            result.push(Number(i));
        } else if (typeof i === 'number') {
            result.push(String(i));
        }
    }
}
convert('1', 2, 3, '4');
// task2 done
function executeforEach(array, func) {
    array.forEach(element => func(element));
}
executeforEach([1, 2, 3], function (element) {
    console.log(element * 2);
});
// task3 done
function mapArray(array, func) {
    array.forEach(element => func(element));
}
mapArray([2, '5', 8], function (element) {
    if (typeof element === 'string') {
        return result.push(Number(element) + 3);
    }
    return result.push(element + 3);
});
// task4 done
function filterArray(array, func) {
    array.forEach(element => {
        if (func(element)){
            return result.push(element);
        }
    });
}
filterArray([2, 5, 8], function (element) {
    return element % 2 === 0;
});
// task5 done
function flipOver(str) {
    let flipped = '';
    for (let i = str.length - 1; i >= 0; i--) {
        flipped = +str[i];
    }
    return flipped;
}
// task6 done
function makeListFromRange(range){
    for (let i = range[0]; i<=range[1]; i++){
         result.push(i);
    }
}
makeListFromRange([2, 7]);
// task 7 
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key) {
    executeforEach(array, element => {
        return result.push(element[key]);
    });
    return result;
}
getArrayOfKeys(actors, 'name');
// task8 done
function substitute(array, func) {
    array.forEach(element => func(element));
    console.log(result);
}
substitute([58, 14, 48, 2, 31, 29], function (element) {
    if (element < 30) {
        return result.push('*');
    }
    return result.push(element);
});
// task9 done
const date = new Date(2019, 0, 2);
function getPastDay(date, day) {
    let oneday=1000 * 60 * 60 * 24;
    let difference = date.getTime() - day * oneday;
    difference = new Date(difference);
    return console.log(`number of days ago = ${difference.getDate()} day = ${difference}`);
}
getPastDay(date, 1); 
getPastDay(date, 2); 
getPastDay(date, 365); 
// task10 done
function formatDate(newdate) {
    let year = newdate.getFullYear();
    let month = newdate.getMonth() + 1;
    let day = newdate.getDate();
    let hour = newdate.getHours();
    let minutes = newdate.getMinutes();
    return console.log(`${year}/${month}/${day} ${hour}:${minutes}`);
}
formatDate(new Date('6/15/2018 09:15:00')) 
formatDate(new Date()) 