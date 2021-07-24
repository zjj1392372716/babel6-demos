import "babel-polyfill";

const num1 = 100;

export const func1 = () => {};

const arr = [1, 2, 3, 4];

const isOk = arr.includes(2);

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }
}

const person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);
