function pipe(val, ...handlers) {
    return handlers.reduce((res, f) => {
        return f(res);
    }, val)
}


function addOne(e) {
    return e+1;
}

function pow(e) {
    return e*e;
}

console.log(pipe(2, addOne, pow));