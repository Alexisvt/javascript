function foo () {
  console.log(this.a);
}

var obj= {
  a: 2
};

var bar = function() {
  foo.call(obj);
}

global.a = 10;

foo() // 10
bar(); //2
setTimeout(bar, 100); //2
bar.call(global); // 2
