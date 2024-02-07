// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clicked
/*
let box = document.getElementById("box");

box.addEventListener("click", function () {
  console.log("I want to open the box!");
});
*/
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

/*let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})

function saveLead() {
    console.log("Button clicked!")
}


let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click", function () {
  // Push the value from the inputEl into the myLeads array
  // instead of the hard-coded "www.awesomeleads.com" value
  // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value);
  renderLeads();
});

// Log out the items in the myLeads array using a for loop
//for (let i = 0; i < myLeads.length; i++) {
//   console.log(myLeads[i])
//} */

/* 
// Use .innerHTML to render a Buy! button inside the div container

let container = document.getElementById("container");
console.log(container.innerHTML = "<button>" + "Buy!" + "</button>")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy() {
    container.innerHTML += "<p> Thank you for buying!</p>"
}



*/
// Render the leads in the unordered list using ulEl.textContent
/*for (let i = 0; i < myLeads.length; i++) {
 // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
 //Another method
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}

// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
// Create a new variable, sender, and set its value to your name
const sender = "Promise"
// Use your sender variable instead of "Per"

const email = `Hey   ${recipient} ! How is it going? Cheers Per`

console.log(email)

const credits = 0

if (credits) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

// truthy
// falsy

// false
// 0
// ""
// null
// undefined
// NaN

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
}

greetUser("Howdy")

const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "👋")


// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
    return num1 + num2
}

console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111

function function getFirst(arr) {
    return arr[0]
}

getFirstCard = getFirst([0, 1, 2, 10])
console.log(getFirstCard)

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logItems(myCourses)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const janeBtn = document.getElementById("jane-btn")

janeBtn.addEventListener("click", function() {
    console.log(data[0]);
})

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)


// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`

*/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }

  ulEl.innerHTML = listItems;
}
