'use strict';

function foo(x){
console.log(`x: ${x}`);
}

function *bar(){

// just paused and yield undefined
yield;

// waiting to received a value to pass it to foo and yielding undefined
foo(yield);
}

// constructing a generator iterator, we are not running the function, very important to remember
let gen = bar();

// run the generator
console.log(gen.next()); // value: undefined


console.log(gen.next());
console.log(gen.next('hola mundo'));


