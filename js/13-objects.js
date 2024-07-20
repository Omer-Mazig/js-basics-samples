// JS Objects
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_objects.asp

// - Objects are variables too, but they can contain many values.
// - The values are written as key-value pairs ('key' and 'value' separated by a colon).

let person = {
  name: "John", // key: name, value: "John"
  age: 30, // key: age, value: 30
  isMarried: false, // key: isMarried, value: false
};

// we can access the object properties using the dot notation
console.log("person.name", person.name);
console.log("person.age", person.age);
console.log("person.isMarried", person.isMarried);

// we can access the object properties using the bracket notation
console.log("person['name']", person["name"]);
console.log("person['age']", person["age"]);
console.log("person['isMarried']", person["isMarried"]);

// this is useful when the key is a variable
let key = "name";
console.log("person[key]", person[key]);
key = "age";
console.log("person[key]", person[key]);

// we can modify the object properties
console.log("person (before increment)", person);
person.age = person.age + 1;
console.log("person (after increment)", person);

// we can add new properties to the object
console.log("person (before adding city)", person);
person.city = "New York";
console.log("person (after adding city)", person);

// Heands on:
const product = {
  name: "laptop",
  price: 1000,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};
