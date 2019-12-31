function countNumbers(input) {
    let result = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }


    for(let i = 0; i < input.length; i++) {
        if(!isNaN(input[i])) {
            result[input[i]]++;
        }
    }

    return result;
}

countNumbers("123abc456");