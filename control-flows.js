//  If Then
let number = -5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


// Switch
let day = "Monday";
let message;

switch (day) {
  case "Saturday":
  case "Sunday":
    message = "It's the weekend!";
    break;
  case "Monday":
    message = "It's the start of the work week.";
    break;
  default:
    message = "It's a regular weekday.";
}

console.log(message);

// Loop
const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i} is: ${fruits[i]}`);
}


//  foor
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// While
let randomNumber = 0;

while (randomNumber <= 0.8) {
  randomNumber = Math.random();
  console.log(`Current random number: ${randomNumber}`);
}

// do... while
let choice = 0;

do {
  console.log("\n--- Menu ---");
  console.log("1. View Profile");
  console.log("2. Settings");
  console.log("3. Exit");
  
  // Here we'll simulate a user entering an invalid choice first.
  if (choice === 0) {
    choice = 5; // An invalid choice
  } else {
    choice = 3; // A valid choice to end the loop
  }

} while (choice < 1 || choice > 3);

console.log(`\nSelected option ${choice}. Exiting menu.`);


// break continue
let numbers = [1, 2, 7, 8, 12, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 5) {
    continue; // Skip numbers less than 5
  }

  if (numbers[i] > 10 && numbers[i] % 2 === 0) {
    console.log(`Found the number: ${numbers[i]}`);
    break; // Exit the loop as soon as the condition is met
  }
}