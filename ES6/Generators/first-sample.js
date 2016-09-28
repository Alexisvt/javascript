'use strict';

//Simple practice with a generator

function *foo(x) {
let y = 2 * (yield (x + 1));
console.log(`y value is: ${y}`); // 24

let z = yield(y / 3);
console.log(`z value is: ${z}`); // 13

console.log(`the sum of x + y + z is: ${x + y + z}`);
// this will be the value of the last object value property if this is not set, the value will be undefined
return (x + y + z);
}

// this is creating the iterator object, which allow us to iterate over the generator
let it = foo(5);

// note: not sending anything into `next()` here, we are just requesting 
console.log(it.next()); // value: 6, done: false
console.log(it.next(12)); // value: 8, done: false
console.log(it.next(13)); // value: 42, done: true

