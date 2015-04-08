function foo (a,b) {
  console.log("a: " + a + ", b: " + b);
}

foo.apply(null, [2,3]); //a: 2, b: 3

var bar = foo.bind(null,2);
bar(3); //a: 2, b: 3
