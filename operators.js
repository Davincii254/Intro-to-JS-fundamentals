// Arithmetic Operators
const a = 20;
const b = 13;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

// Comparison Operators
let num1 = 17;
let num2 = 49;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Logical Operators
let isSunny = false;
let isWarm = false;

// AND
if (isSunny && isWarm) {
    console.log("It is a perfect day for a swim!")
} else {
    console.log("No swimming ")
}

// OR
if (isSunny || isWarm) {
    console.log("It a good day to for a walk")
}

// NOT
if (!isWarm) {
    console.log("You should probably carry a jacket")
}

console.log(!isWarm)