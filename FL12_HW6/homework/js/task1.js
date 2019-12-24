let a = prompt('input a value');
let b = prompt('input b value');
let c = prompt('input c value');
let z = 4;
let t = 2;
let d = b * b - z * a * c;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
console.log('Invalid input data');
}
if(d > 0){
    let x1= (-b + Math.sqrt(d)) / t * a;
    let x2= (-b - Math.sqrt(d)) / t * a;
    console.log('x1=',x1,'value');
    console.log('x2=',x2,'value')
} else if (b===0 && c===0 ){
    console.log('x=0');
} else if (d<0){
    console.log('No solution');
}


