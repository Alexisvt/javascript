// @flow

function PersonType(name: string) {
  this.name = name;
}

PersonType.prototype.sayName = function () {
  console.log(this.name);
};

let person = new PersonType('Alexis');

person.sayName(); // Nicholas

console.log(person instanceof PersonType);
console.log(person instanceof Object);

// If you want to see the es6 version of this code go to es2015-classes.js file