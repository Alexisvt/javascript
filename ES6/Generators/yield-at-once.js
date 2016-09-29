function* foo() {
  console.log('first call to console in foo function');
  yield 1;
}

function* bar() {
  yield 2;
  console.log('first call to console in bar function');
}

function* baz() {
  // both generators are running and pause in their respective yield keywords
  yield [foo(), bar()];
}

const it = baz();
const [it_foo, it_bar] = it.next().value;

console.log(it_foo.next()); 
console.log(it_bar.next()); 
console.log(it.next());