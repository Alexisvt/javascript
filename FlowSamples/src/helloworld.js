// @flow

function foo(x) {

  if (typeof x === 'string') {
    return x.length;
  }

  return x;
}

var res = foo('Hello') + foo(42);