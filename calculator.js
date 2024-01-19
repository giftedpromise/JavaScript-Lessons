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
