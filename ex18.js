function foo (p1, p2) {
  this.val = p1 + p2;
}

var bar = foo.bind(null,"p1");

var baz = new bar("p2");

console.log(baz.val); // p1p2
