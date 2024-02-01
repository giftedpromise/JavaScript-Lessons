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

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time

// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalRaceTime() {
  return player1Time + player2Time  
}

let totalTime = totalRaceTime()
console.log(totalTime)


// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}


function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)

PRACTICE 2
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works


let person = {
    name: "Promise",
    age: 32,
    country: "Nigeria"
}

function logData() {
  console.log(person.name + " " + "is " + person.age + " years old and lives in " + person.country)
} 

logData()

let age = 17

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


if (age < 6) {
    console.log("free")
} else if (age == 6 || age <= 17  ) {
    console.log("child discount")
} else if (age == 18 || age <= 26  ) {
    console.log("student discount")
} else if (age == 27 || age <= 66  ) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")    
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}


let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop();
console.log(largeCountries)
largeCountries.push("Pakistan");
console.log(largeCountries)
largeCountries.shift();
console.log(largeCountries)
largeCountries.unshift("China");
console.log(largeCountries)

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&


if ( dayOfMonth === 13 && weekday === "Friday") {
    console.log("If it is Friday the 13th, log out this spooky face: 😱")
}


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHands() {
    let randomNumber = Math.floor(Math.random() * 3)
    return hands[randomNumber];
}

console.log( getHand() );

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomEmoji = Math.floor(Math.random() * fighters.length);
   
     let randomEmojiTwo = Math.floor(Math.random() * fighters.length);
    
    stageEl.textContent = fighters[randomEmoji] + " vs " + fighters[randomEmojiTwo]
})

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruit() {
for (i = 0; i < fruit.length; i++) {
    if  (fruit[i] === "🍎") {
        appleShelf.textContent += fruit[i]
    } else if (fruit[i] === "🍊") {
        orangeShelf.textContent += fruit[i]
    }
}

}

sortFruit();



*/

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

// Make this function return a random number between 1 and 13

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  // 3. Render the cars on the page using this format -> "Cards: 10 4"
  cardsEl.innerText = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  // 3. Render the sum on the page using this format -> "Sum: 14"s
  sumEl.textContent = "Sum: " + sum;

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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
