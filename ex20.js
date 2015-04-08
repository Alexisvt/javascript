function foo (a,b) {
  console.log("a:" + a + ", b:" + b);
}

//alt 0248 DMZ empty object
var ø = Object.create(null);

foo.apply(ø, [2,3]); //a:2, b:3

var bar = foo.bind(ø, 2);
bar(3); //a:2, b:3
