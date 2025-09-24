// Conditionals statements
// If statement
let number = 0;

if (number > 0){
    console.log("The number is positive")
} else if (number < 0) {
    console.log("The number is negative")
} else {
    console.log("The number is zero")
}

let grade = 20;

if (grade >= 90 ) {
    console.log("You have an A")
} else if (grade >= 80){    
    console.log("You have a B")
} else if (grade >= 60){    
    console.log("You have a C")
} else if (grade >= 40){    
    console.log("You have a D")
} else {
    console.log("You have failed")
}


// SWitch statement
let day = "Wednesday"
let message;

switch (day) {
    case "Sartuday":
    case "Sunday":
        message = "Its the weekend";
        break;
    case "Monday":
        message = "Its the start of the week";
        break;
    default:
        message = "Its a regular day"
}
console.log(message)

// Loops

let fruits = ["Apple", "Banana", "Citrus", "Mango", "Pineapple"]; 

for (let i = 0;i < fruits.length; i++) {
    console.log(`Fruit at index ${i} is: ${fruits[i]}`)
}

// Countdown
for (let i = 5; i < 20; i++) {
    console.log("The count is:" + i)
}

let students = ["Abel", "Cain", "Jacod", "Abraham", "Isaac", "Jeremiah"];

for (let i = 0; i < students.length; i++){
    console.log(`The following students are in class, index number ${i} name ${students[i]}`)
}

// While loop
let randomNumber = 0;

while (randomNumber <= 0.8){
    randomNumber = Math.random();
    console.log(`Current random number: ${randomNumber}`)
}

let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}
console.log("Blast Off")


// Do while 
let i = 1;

do {
    console.log("The current number is:" + i);
    i += 2 ;
} while (i <= 5)
