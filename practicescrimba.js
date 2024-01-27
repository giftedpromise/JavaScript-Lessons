// Create two variables, firstName and lastName
let firstName = "Promise";
let lastName = "Nwankwo";

// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName;
// Log fullName to the console
console.log(fullName);

//Exercise 2

let name = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called

function nameGreetings() {
  let greet = greeting + ", " + name + "!";
  console.log(greet);
}
nameGreetings();

let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

// Call the functions to that the line below logs out 10

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

// Try to predict what each of the lines will log out
console.log("2" + 2); //22
console.log(11 + 7); //18
console.log(6 + "5"); //65
console.log("My points: " + 5 + 9); //my points: 59;
console.log(2 + 2); // 4
console.log("11" + "14"); //1114

// that has the id="error".
let errorParagrapgh = document.getElementById("error");

function purchase() {
  console.log("button clicked");
  errorParagrapgh.innerText = "Something went wrong, please try again";
}

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()

let sumEl = document.getElementById("sum-el");

function add() {
  let sum = num1 + num2;

  sumEl.innerText = "Sum:" + sum;
}

function subtract() {
  let minus = num1 - num2;

  sumEl.innerText += minus;
}

function divide() {
  let division = num1 / num2;
  sumEl.innerText += division;
}

function multiply() {
  let multi = num1 * num2;
  sumEl.innerText += multi;
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
