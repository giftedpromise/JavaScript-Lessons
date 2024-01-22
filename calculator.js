//calculator app

//operations addition subtraction amulti div
const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrayOfOperations = ["+", "-", "*", "/"];
let userInput1 = ""; //collects user input
let userInput2 = "";
let userOperations = "";

rl.question("Enter your first value\n", function (string) {
  userInput1 = string;
});

rl.question("Enter your second value\n", function (string) {
  userInput2 = string;
  exit();
});

rl.question("Enter your operation\n", function (string) {
  userOperations = string;
});

if (userOperations === arrayOfOperations[0]) {
  console.log(additionOperation(userInput1, userInput2));
} else if (userOperations === arrayOfOperations[1]) {
  console.log(subtractionOperation(userInput1, userInput2));
} else if (userOperations === arrayOfOperations[2]) {
  console.log(multiplicationOperation(userInput1, userInput2));
} else if (userOperations === arrayOfOperations[3]) {
  console.log(divisionOperation(userInput1, userInput2));
}

function additionOperation(a, b) {
  let answer = a + b;
  return answer;
}

function subtractionOperation(a, b) {
  let answer = a - b;
  return answer;
}

function multiplicationOperation(a, b) {
  let answer = a * b;
  return answer;
}

function divisionOperation(a, b) {
  let answer = a / b;
  return answer;
}

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arrayOfOperations = ["+", "-", "*", "/"];
let userInput1 = "";
let userInput2 = "";
let userOperation = "";

rl.question("Enter your first value: ", function (string) {
  userInput1 = parseFloat(string);
  getUserInput2();
});

function getUserInput2() {
  rl.question("Enter your second value: ", function (string) {
    userInput2 = parseFloat(string);
    getUserOperation();
  });
}

function getUserOperation() {
  rl.question("Enter your operation (+, -, *, /): ", function (string) {
    userOperation = string;

    if (!arrayOfOperations.includes(userOperation)) {
      console.log("Invalid operation. Please enter +, -, *, or /.");
      rl.close();
      return;
    }

    performOperation();
  });
}

function performOperation() {
  switch (userOperation) {
    case arrayOfOperations[0]:
      console.log(additionOperation(userInput1, userInput2));
      break;
    case arrayOfOperations[1]:
      console.log(subtractionOperation(userInput1, userInput2));
      break;
    case arrayOfOperations[2]:
      console.log(multiplicationOperation(userInput1, userInput2));
      break;
    case arrayOfOperations[3]:
      if (userInput2 === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log(divisionOperation(userInput1, userInput2));
      }
      break;
    default:
      console.log("Invalid operation.");
  }

  rl.close();
}

function additionOperation(a, b) {
  return a + b;
}

function subtractionOperation(a, b) {
  return a - b;
}

function multiplicationOperation(a, b) {
  return a * b;
}

function divisionOperation(a, b) {
  return a / b;
}

*/
