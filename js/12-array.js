// JS Arrays
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_arrays.asp

// - Arrays are used to store multiple values in a single variable.

// Creating an Array
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Getting the Array Length
console.log("fruits length:", fruits.length); // 5

// Accessing Elements
console.log("first element:", fruits[0]); // Apple
console.log("second element:", fruits[1]); // Banana
console.log("third element:", fruits[2]); // Orange
console.log("last element:", fruits[fruits.length - 1]); // Pineapple

// Modifying an Array Element
console.log("fruits (before modification):", fruits);
fruits[0] = "Kiwi";
console.log("fruits (after modification):", fruits);

// Adding an Array Element
console.log("fruits (before addition):", fruits);
fruits.push("Lichi");
console.log("fruits (after addition):", fruits);

// Removing an Array Element
console.log("fruits (before removal):", fruits);
fruits.pop();
console.log("fruits (after removal):", fruits);

// Looping Through an Array
for (let i = 0; i < fruits.length; i++) {
  console.log("element at index", i, ":", fruits[i]);
}

const names = ["bob", "john", "mike", "baba"];
// TODO: print the index of the name 'mike' in the console using a loop
for (let i = 0; i < names.length; i++) {
  const currentName = names[i];
  if (currentName === "mike") {
    console.log("mike is at index", i);
  }
}
// TODO: print how many times a name starting with 'b' appears in the array
let count = 0;
for (let i = 0; i < names.length; i++) {
  const currentName = names[i];
  if (currentName === "b") {
    count++;
  }
}
// TODO: create a new array without the name 'mike' and print it
const newNames = [];
for (let i = 0; i < names.length; i++) {
  const currentName = names[i];
  if (currentName !== "mike") {
    newNames.push(currentName);
  }
}
// TODO: create a new array with the names in uppercase and print it
const upperCaseNames = [];
for (let i = 0; i < names.length; i++) {
  const currentName = names[i];
  upperCaseNames.push(currentName.toUpperCase());
}
