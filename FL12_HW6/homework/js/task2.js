let a = parseInt( prompt('input a side length'));
let b = parseInt(prompt('input b side length'));
let c = parseInt(prompt('input c side length'));
if (!a || !b || !c) {
    alert('Input values should be ONLY numbers ');
} else if(a<=0||b<=0||c<=0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if ( a >= b + c || b >= a + c || c >= a + b ){
alert('Triangle doesn’t exist');
console.log('Triangle doesn’t exist');
} else if (a === b && a===c){
    console.log('Equilateral triangle');
} else if (a===b || a===c || b===c){
    console.log('Isosceles triangle');
} else{
    console.log('Scalene triangle');
}
