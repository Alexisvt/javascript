function foo () {
  console.log(this.a);
}

var obj= {
  a: 2,
  foo: foo
};

global.a = 4;

obj.foo(); // 2
foo(); // 4 
