# Javascript Methods
A JavaScript method is a function that is stored as a property of an object. Think of it as an action 🎬 that an object can perform.

Methods are critical because they allow us to bundle data (object properties) and the actions that operate on that data (methods) together. This makes code more organized, reusable, and easier to understand. You use them whenever you need to perform an action related to a specific piece of data, like changing a string to all caps or adding an item to an array.

### String Methods
These are built-in functions used to manipulate or access information about strings.

### toUpperCase()
This method returns a new string with all the characters of the original string converted to uppercase.

```JavaScript
const message = "hello, javascript!";
const upperMessage = message.toUpperCase();
console.log(upperMessage); // Output: "HELLO, JAVASCRIPT!"
```

### substring(startIndex, endIndex)
This method extracts a part of a string and returns a new string. It starts from the startIndex and goes up to (but does not include) the endIndex.

``` JavaScript
const language = "JavaScript";
const part = language.substring(0, 4); // Starts at index 0, ends before index 4
console.log(part); // Output: "Java"
```

## Array Methods
These methods are used to perform operations on arrays, such as adding, removing, or transforming elements.

### push(element)
This method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.

``` JavaScript
const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
```

### map(callbackFunction)
This powerful method creates a new array by calling a provided function on every element in the original array. It's perfect for transforming data without changing the source array.

```JavaScript
const numbers = [1, 4, 9];
const doubles = numbers.map(num => num * 2);
console.log(doubles); // Output: [2, 8, 18]
console.log(numbers); // The original array is unchanged: [1, 4, 9]
``` 

## Number Methods
These methods help convert numbers to different formats or representations. They are called on number values.

### toFixed(digits)
This method formats a number using fixed-point notation, rounding it to a specified number of decimal places and returning the result as a string. It's very useful for formatting currency 💰.

```JavaScript
const price = 19.99123;
const formattedPrice = price.toFixed(2); // Round to 2 decimal places
console.log(formattedPrice); // Output: "19.99"
``` 

### toString()
This method converts a number into its string representation. You can optionally pass a "radix" (or base) to convert the number to another numeral system, like binary (base 2) or hexadecimal (base 16).

```JavaScript
const count = 12;
const stringCount = count.toString(); // Converts to a regular string
const binaryCount = count.toString(2);  // Converts to a binary string
console.log(stringCount); // Output: "12"
console.log(binaryCount); // Output: "1100"
```

## Object Methods
These are static methods called on the global Object constructor itself (not on an object instance) to work with objects.

### Object.keys(obj)
This method returns an array containing the names of an object's own enumerable string properties (its keys).

```JavaScript
const user = {
  name: "Alex",
  age: 30,
  isAdmin: false
};
const userKeys = Object.keys(user);
console.log(userKeys); // Output: ["name", "age", "isAdmin"]
```

### Object.values(obj)
This method returns an array containing the values of an object's own enumerable string properties.

```
JavaScript
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};
const carValues = Object.values(car);
console.log(carValues); // Output: ["Toyota", "Camry", 2022]
```