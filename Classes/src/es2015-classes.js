// @flow

class PersonClass {

  name: string;

  // equivalent of the PersonClass constructor
  constructor(name: string) {
    this.name = name;
  }

  // equivalent of PersonClass.prototype.sayName
  sayName() {
    console.log(this.name);
  }

}

let person = new PersonClass('Alexis');
person.sayName();

console.log(person instanceof PersonClass); // true

console.log(typeof PersonClass); // function

console.log(typeof PersonClass.prototype.sayName); // function

// if you want to see the equivalent without using class syntax go to class-like-structurev2.js
// That will show you all the differences and nounces that you need to do in order to mimic the behavior of the class syntax
