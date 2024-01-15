/* 1. Variable Declaration:1. Variable Declaration:
   
   Declare a variable called greeting and assign the value "Hello, JavaScript!" to it.

 */

let greetings;
greetings = "Hello, JavaScript!";

/* 2. Data Types:

   What are the basic data types in JavaScript? 
   JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object */

//Data Types
//1. Numbers: The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;

//2. Srings: A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

//3. Boolean: The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

/* 4. Null: In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object. */

let age = null;
console.log(age);

// 5. Undefined: The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined:
let school;
console.log(school);

//6.BigInt: JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let x = BigInt("123456789012345678901234567890");

/* 3. Array Manipulation:

   Create an array called fruits containing three fruits of your choice. Add a new fruit to the end of the array.*/
// Create an array called fruits containing three fruits
let fruits = ["mango", "Apple", "Watermelon"];

// Add a new fruit to the end of the array
fruits.push("grapes");

console.log(fruits);

/* 4. Conditional Statements:

   Write an if statement that checks whether a variable temperature is greater than 30. If it is, log "It's a hot day!" to the console; otherwise, log "It's a pleasant day."
*/

let temperature = 20;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a pleasant day.");
}

/*5. Function:

   Create a function called square that takes a parameter num and returns the square of that number.*/

function square(num) {
  return num * num;
}

console.log(square(6));

/* 6. Loop:

   Use a for loop to print the numbers from 1 to 5 to the console. */

let numbers = [];

for (i = 1; i <= 5; i++) {
  numbers.push(i);
}

console.log(numbers);

/* 7. Object:

   Create an object representing a car with properties brand, model, and year. Assign values of your choice to these properties. 
   */

let car = { brand: "Benz", model: "GLA", Year: 2013 };

console.log(car);

/* 8. Event Handling:

   Write a JavaScript code snippet that alerts "Button clicked!" when a button with the id "myButton" is clicked.
   */

let myButton = document.getElementById("myButton");

function handleButtonClick() {
  alert("Button clicked!");
}

myButton.addEventListener("click", handleButtonClick);
