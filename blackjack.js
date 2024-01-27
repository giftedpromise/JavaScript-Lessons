// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

/* let firstCard = 6;
let secondCard = 9;

let sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else if (sum > 21) {
  console.log("You're out of the game! 😭");
}

//else if statement

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 12;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}

// Check if the person is elegible for a birthday card from the King! (100)

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
  console.log("Not elegible");
} else if ((age = 100)) {
  console.log("Here is your birthday card from the King!");
} else if (age > 100) {
  console.log("Not elegible, you have already gotten one");
}

// 1. Declare a variable called message and assign its value to an empty string
let message = "";

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
} 

// 3. Log it out!
console.log(message);

*/

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {
  // 3. Render the cars on the page using this format -> "Cards: 10 4"
  cardsEl.innerText = "Cards: " + firstCard + " " + secondCard;
  // 3. Render the sum on the page using this format -> "Sum: 14"s
  sumEl.textContent += sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
}
