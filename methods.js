const message = "hello, javascript!";
const upperMessage = message.toUpperCase();
console.log(upperMessage); 

// Substring
const language = "JavaScript";
const part = language.substring(0, 4); // Starts at index 0, ends before index 4
console.log(part);

// Array methods
const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);

// Map
const numbers = [1, 4, 9];
const doubles = numbers.map(num => num * 2);
console.log(doubles); 
console.log(numbers);

// NUmbers methods
// toFixed
const price = 19.99123;
const formattedPrice = price.toFixed(3); // Round to 2 decimal places
console.log(formattedPrice);

// toString
const count = 12;
const stringCount = count.toString(); // Converts to a regular string
const binaryCount = count.toString(2);  // Converts to a binary string
console.log(stringCount); // Output: "12"
console.log(binaryCount);

console.log(typeof count)
console.log(typeof stringCount)

// Objects methids
const user = {
  name: "Alex",
  age: 30,
  isAdmin: false
};

const userKeys = Object.keys(user);
const userValues = Object.values(user)
console.log(userKeys);
console.log(userValues);