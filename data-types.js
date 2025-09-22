// --- 1. Primitive Data Types ---


// 1. Number: Represents both integer and floating-point numbers.
const myNumber = 42;
const myFloat = 3.14;
console.log(`1. Number: ${myNumber} (Type: ${typeof myNumber}), ${myFloat} (Type: ${typeof myFloat})`);

// 2. BigInt: Represents whole numbers larger than 2^53 - 1.
const myBigInt = 9007199254740991n;
console.log(`2. BigInt: ${myBigInt} (Type: ${typeof myBigInt})`);

// 3. String: Represents textual data.
const myString = "Hello, world!";
console.log(`3. String: "${myString}" (Type: ${typeof myString})`);

// 4. Boolean: Represents a logical entity and can only have two values: true or false.
const isAwesome = true;
const isFinished = false;
console.log(`4. Boolean: ${isAwesome} (Type: ${typeof isAwesome})`);

// 5. Symbol: A unique and immutable primitive value.
// It's often used for unique property keys to avoid naming conflicts.
const mySymbol = Symbol("uniqueId");
const anotherSymbol = Symbol("uniqueId");
console.log(`5. Symbol: ${String(mySymbol)} (Type: ${typeof mySymbol})`);
// Note: Even with the same description, these are not equal.
console.log(`   Are symbols equal? ${mySymbol === anotherSymbol}`);

// 6. null: Represents the intentional absence of any object value.
// It's a special value that a variable can be assigned.
const myNull = null;
console.log(`6. null: ${myNull} (Type: ${typeof myNull}) - A common quirk is that typeof null is "object"`);

// 7. undefined: Indicates that a variable has been declared but has not yet been assigned a value.
let myUndefined;
console.log(`7. undefined: ${myUndefined} (Type: ${typeof myUndefined})`);

// --- 8. Non-Primitive (Complex) Data Types ---

// 8. Object: A collection of key-value pairs.
// This is the most important non-primitive data type.
const myObject = {
  name: "Gemini",
  type: "AI Assistant",
  version: 1.0
};
console.log(`8. Object:`, myObject, `(Type: ${typeof myObject})`);

// Array: A special type of object used to store multiple values in a single variable.
const myArray = [1, "two", true, myObject];
console.log(`8. Object (Array):`, myArray, `(Type: ${typeof myArray})`);
