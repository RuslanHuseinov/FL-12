const oneday = 1000 * 60 * 60 * 24;

// task1 done
function convert(...last) {
    let result = [];
    for (let i of last) {
        if (typeof i === 'string') {
            result.push(Number(i));
        } else if (typeof i === 'number') {
            result.push(String(i));
        }
    }

    return result;
}

// task2 done
function executeforEach(array, func, includePredicate = () => true) {
    return array.reduce((acc, val, i, arr) => {
        let temp = func(val);
        if (temp && includePredicate(val)) {
            acc.push(temp);
        }

        return acc;
    }, []);
}
executeforEach([1, 2, 3], function (element) {
    console.log(element * 2);
});

// task3 done
function mapArray(array, func) {
    return executeforEach(array, func);
}
mapArray([2, '5', 8], function (element) {
    if (typeof element === 'string') {
        return Number(element) + 3;
    }
    return element + 3;
});

// task4 done
function filterArray(array, func) {
    return executeforEach(array, (v) => v, func);
}

filterArray([2, 5, 8], function (element) {
    return element % 2 === 0;
});

// task5 done
function flipOver(str) {
    return str.split('').reverse().join('');
}

// task6 done
function makeListFromRange(range){
    let result = [];

    for (let i = range[0]; i <= range[1]; i++){
         result.push(i);
    }

    return result;
}
makeListFromRange([2, 7]);

// task 7 
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key) {
    let result = [];

    executeforEach(array, element => {
        return result.push(element[key]);
    });
    return result;
}
getArrayOfKeys(actors, 'name');

// task8 done
function substitute(array) {
    return mapArray(array, function (element) {
        if (element < 30) {
            return '*';
        }
        return element;
    });
}
substitute([58, 14, 48, 2, 31, 29]);

// task9 done
const date = new Date(2019, 0, 2);
function getPastDay(date, day) {
    let difference = date.getTime() - day * oneday;
    difference = new Date(difference);
    return `number of days ago = ${difference.getDate()} day = ${difference}`;
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
    return `${year}/${month}/${day} ${hour}:${minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());
