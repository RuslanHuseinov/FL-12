//import { isSmaller } from './isSmaller';

function isSmaller(a, b) {
    return a < b;
}

function getMin(...args) {
    if(!args.length) {
        return null;
    }

    let min = args[0];

    for(let i = 0; i < args.length; i++) {
        if(isSmaller(args[i], min)) {
             min = args[i];
        }
    }

    return min;
}

getMin(1, 2, 3, 4);