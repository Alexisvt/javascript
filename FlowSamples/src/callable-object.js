// @flow

type callableObj = {
  (name: string) : number;
  foo: string;
};


function baz( nm: string) {
  return Number(nm);
}
baz.foo = "callable object";


let callObj: callableObj = baz;