// @flow

let PersonClass = class {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
};

let person = new PersonClass('Alexis');
person.sayName();

console.log(person instanceof PersonClass); // true

console.log(person instanceof Object); // true

console.log(typeof PersonClass); // function

console.log(typeof PersonClass.prototype.sayName); //  function