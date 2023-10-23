// Traditional function expression
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with no arguments
const greet = () => {
  console.log("Hello, world!");
};

// Arrow functions in an array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

// Arrow functions and array iteration
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => {
  console.log(`I love ${fruit}s!`);
});

// Arrow functions and this binding
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    setTimeout(() => {
      // Arrow function preserves the 'this' context
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  }
}

const person = new Person("Alice");
person.sayHello(); // Outputs "Hello, my name is Alice" after a 1-second delay
