function makeNumber(input) {
    let result = "";

    for(let i = 0; i < input.length; i++) {
        result+= !isNaN(+input[i]) ?
            input[i] : "";
    }

    return result;
}


console.log(makeNumber("123,blah34"));