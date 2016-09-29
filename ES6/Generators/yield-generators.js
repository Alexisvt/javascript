function* foo(){
yield 'foo';
yield* bar();
}

function* bar() {
yield 'bar';
yield* baz();
}

function* baz(){
yield 'baz';
};

let it = foo();

console.log(it.next()) // foo
console.log(it.next()) // bar
console.log(it.next()) // baz
console.log(it.next()) // undefined


//same result using for of
for(let v of foo()){
console.log(v);
}
