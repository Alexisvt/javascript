function foo () {
  console.log(this.a);
}

var obj2= {
  a: 42,
  foo: foo
}

var obj= {
  a: 2,
  foo: foo,
  obj2: obj2
};

global.a = 4;

obj.foo(); // 2
foo(); // 4
obj.obj2.foo() // 42
