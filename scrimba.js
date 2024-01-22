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

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);
