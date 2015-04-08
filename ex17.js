function foo (something) {
  this.a = something;
}

global.a = "global a value";

var obj1 = {};

var bar = foo.bind(obj1);

bar(2);
console.log(obj1.a); // 2

var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3
