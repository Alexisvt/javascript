function foo () {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
}

var bar = obj.foo;

global.a = "oops, global";

bar(); // oops, global
obj.foo() // 2
