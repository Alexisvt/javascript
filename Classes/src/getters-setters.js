// @flow

class CustomHTMLElement {

  element: HTMLElement;

  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');

console.log('get' in descriptor); // true
console.log('set' in descriptor); // true
console.log(descriptor.enumerable); // false