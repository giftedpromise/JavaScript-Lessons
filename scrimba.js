// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console

let myAge = 32;

console.log(myAge);

let moiAge = 32;
let humanDogRatio = 12;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

function myFunction() {
  console.log(42);
}

myFunction();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times
function logLapTime() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}

logLapTime();

let lapsCompleted = 0;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  console.log(count);
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  let countStr = " " + count + " - ";
  saveEl.innerText += countStr;
  countEl.innerText = 0;
  count = 0;
}

save();

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
let name = "Promise";
let greeting = "Hi, my name is ";
// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = greeting + name;

// Log myGreeting to the console

console.log(myGreeting);
