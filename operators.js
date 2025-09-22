// --- JavaScript Operators ---

// Operators are symbols that perform operations on values and variables.

// Arithmetic Operators: Perform mathematical calculations.
let a = 10;
let b = 3;
console.log(`\n--- Arithmetic Operators ---`);
console.log(`a + b = ${a + b}`); // Addition
console.log(`a - b = ${a - b}`); // Subtraction
console.log(`a * b = ${a * b}`); // Multiplication
console.log(`a / b = ${a / b}`); // Division
console.log(`a % b = ${a % b}`); // Modulus (remainder)
console.log(`a ** 2 = ${a ** 2}`); // Exponentiation
a++; // Increment
console.log(`a after increment: ${a}`);
b--; // Decrement
console.log(`b after decrement: ${b}`);

// Assignment Operators: Assign values to variables.
let x = 5;
console.log(`\n--- Assignment Operators ---`);
x += 3; // Equivalent to: x = x + 3
console.log(`x += 3: ${x}`);
x *= 2; // Equivalent to: x = x * 2
console.log(`x *= 2: ${x}`);

// Comparison Operators: Compare two values and return a boolean.
let num1 = 10;
let str1 = "10";
console.log(`\n--- Comparison Operators ---`);
console.log(`num1 == str1: ${num1 == str1}`);   // Loose equality (compares value only)
console.log(`num1 === str1: ${num1 === str1}`); // Strict equality (compares value and type)
console.log(`num1 > 5: ${num1 > 5}`);
console.log(`num1 <= 10: ${num1 <= 10}`);

// Logical Operators: Combine boolean values.
let isSunny = true;
let isWarm = false;
console.log(`\n--- Logical Operators ---`);
console.log(`isSunny && isWarm: ${isSunny && isWarm}`); // AND
console.log(`isSunny || isWarm: ${isSunny || isWarm}`); // OR
console.log(`!isSunny: ${!isSunny}`);                   // NOT

// Ternary (Conditional) Operator: A shorthand for an if-else statement.
let age = 20;
const canVote = age >= 18 ? "Yes, you can vote." : "No, you are too young.";
console.log(`\n--- Ternary Operator ---`);
console.log(canVote);

// String Operator: The '+' operator is used to concatenate strings.
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(`\n--- String Operator ---`);
console.log(`Full Name: ${fullName}`);
