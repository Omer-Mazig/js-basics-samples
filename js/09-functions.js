// JS FUNCTIONS
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_functions.asp

// Functions are a block of code that can be reused. They can take in parameters and return a value.
// Functions are defined using the function keyword followed by the function name and parentheses ().
// The code to be executed is placed inside curly brackets {}.
// The function can be called by using the function name followed by parentheses ().

// 01 Function with no Parameters
// Function Declaration
function greet() {
  console.log("Hello, World!");
}

// Function Call
greet(); // Hello, World!

// 02 Function with Parameters
// Function Declaration
function greetUser(name, msg) {
  console.log(`Hello, ${name}! ${msg}`);
}

// Function Call
greetUser("John", "nice to meet you"); // Hello, John!

// 03 Function with Return Value
function add(a, b) {
  return a + b;
}

const sum = add(5, 3); // the value of 'sum' is assigned to the return value of the function
console.log("sum:", sum); // 8

function getNothing() {
  let a = 5;
  let b = 10;
  // no return statement
}

const nothing = getNothing(); // function with no return value returns 'undefined'
console.log("nothing:", nothing); // undefined

// 04 Function Hoisting:
// - Function declarations are hoisted to the top of the script.
// - Function expressions are not hoisted.

// Function Call
bar();

// Function Declaration
function bar() {
  console.log("bar");
}

// 05 Variable Scope:
// - Variables declared inside a function are only accessible within that function.
// - Variables declared outside a function are accessible within the function.

const y = 5; // y is accessible globally
function foo() {
  const x = 10; // x is only accessible within the function
  console.log("x:", x); // 10
  console.log("y", y); // 5
}

foo();
cononsole.log("x", x); // ReferenceError: x is not defined
