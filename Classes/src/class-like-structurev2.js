// @flow

let PersonClass = (function () {

  const PersonClass = function (name: string) {

    if (typeof new.target === 'undefined') {
      throw new Error('Constructor must be called with new.');
    }

    this.name = name;
  };

  Object.defineProperty(PersonClass.prototype, 'sayName', {
    value: function () {

      if (typeof new.target !== 'undefined') {
        throw new Error('Method cannot be called with new.');
      }

      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  return PersonClass;

})();

let person = new PersonClass('Alexis');

person.sayName(); // Alexis

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true