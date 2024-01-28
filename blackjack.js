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


// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let profile = ["Smikle 360 Dental Specialist",
"Scrimba coding BootCamp,2024",
"SheCodes Foundation",
"JavaScript,Html, React"]

let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}


// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}




*/

let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
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
  renderGame();
}

function renderGame() {
  // 3. Render the cars on the page using this format -> "Cards: 10 4"
  cardsEl.innerText = "Cards: " + cards[0] + " " + cards[1];
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 7;
  // 2. Add the new card to the sum variable
  sum += card;

  // Push the card to the cards array
  cards.push(card);
  // 3. Call startGame()

  renderGame();
}