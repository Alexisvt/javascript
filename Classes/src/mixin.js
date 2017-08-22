// @flow

let SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  }
};

let AreaMixin = {
  getArea() {
    return this.length * this.width;
  }
};

function Mixin(...mixins) {
  let base = function () { };
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square extends Mixin(AreaMixin, SerializableMixin) {
  constructor(length: number) {
    super();
    this.length = length;
    this.width = length;
  }
}

var x = new Square(3);

console.log(x.getArea()); // 9
console.log(x.serialize()); // {"length":3,"width":3}