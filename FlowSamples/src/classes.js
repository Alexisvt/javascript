// @flow

class SampleClass {

  foo: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  baz(numb: number): Promise<number> {
    return new Promise((resolve, reject)=> {
      console.log(`waiting to complete`);
      setTimeout(function() {
        resolve(numb);
      }, 3000);
    });
  }
}

let obj: SampleClass = new SampleClass('hello world');

obj.baz(12).then((result: number) => console.log(`Done! here is the result: ${result}`));



