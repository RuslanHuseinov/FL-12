//import { isBigger } from './isBigger';

function isBigger(a, b) {
    return a > b;
}

function isSmaller(a, b) {
    return isBigger(b, a);
}


isSmaller(3, 2);