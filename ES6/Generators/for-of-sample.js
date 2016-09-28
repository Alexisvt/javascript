function *foo() {
yield 1;
yield 2;
yield 3;
yield 4;
yield 5;

return 6;
}

for(var n of foo()) {
console.log(n);
}
// 1 2 3 4 5

console.log( n ); // still `5`, not `6` :(
