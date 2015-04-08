function foo (el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};

global.id = "global id";

[1,2,3].forEach(foo, obj);
