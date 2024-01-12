//JavaScript

//Introduction

/* JavaScript is the scripting language of the web. JavaScript is used in millions of web page to add functionality. All web browser can run JavaScript.*/

console.log("hello world");

//Comment your Code

//One-line comments start with two forward slash characters //.

//1. in-line comment
var number = 5; // in-line comment

//2. Multi line comment - Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.

/* This a multi-line comment
ABCD
1234*/

number = 9;

alert("hello world");

//Data Types
//1. Numbers: The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;

//2. Srings: A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
/* In JavaScript, there are 3 types of quotes.
1.Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`. */

//3. Boolean: The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

/* 4. Null: In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object. */

let age = null;
console.log(age);

// 4. Undefined: The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined:
let school;
console.log(school);

//VARIABLES

//A variable allows computer to store and manipulate data in a dynamic fashion. To declare a variable you will use var, let and const.
var myName = "Beau";
myName = 8;
console.log(myName);
//var can be changed or redeclared, it can be used through the program and it can be accessed from the global scope.

let ourName = "worldxcode";
//Let can only be used within the code of where you declared it.

const pi = 3.14;
// const is a variable that can never be changed.

//Declaring and assigning a variable
var a; //declaring a variable
var b = 2; //declaring and assigning a variable.
console.log(a);
console.log(b);
a = 7;
b = a;

console.log(a);
console.log(b);

//Initializing variables with the assignment operator
//Assignment operators (=) are used to initialize variables
var c = 9;

//initialize these three variables
var a = 5;
var b = 9;
var c = "Booklet";

a = a + 1;
b = b + 5;
c = c + "Strings";

//Case Sensitivity in variable
//Variable names in JavaScript are case sensitive. Camoelcase are used in JavaScript.

//Declaration
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignment
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

//Adding Numbers

var sum = 10 + 10;
console.log(sum);

//Subtracting Numbers

var difference = 45 - 30;

//Multiplying Numbers
var product = 8 * 10;

//Dividing Numbers
var quotient = 66 / 3;

//Incrementing Numbers is adding 1 to variable.
var myVar = 87;
myVar = myVar + 1;
//2nd method
myVar++;
console.log(myVar);

//Decrementing Number is subtracting 1 from the variables
var myVar = 12;
myVar = myVar - 1;
console.log(myVar);
//2nd method
myVar--;

//Decimal Number: it is also refers to as floating point numbers or float.
var ourDecimal = 5.7;

//Multiplying decimal point numbers
var product = 0.45 * 0.345;

//Dividing decimal point numbers
var quotient = 4.4 / 2.0;

//Finding reminder
var reminder;
reminder = 11 % 3;
console.log(reminder);

//Compound Assignment with augmented addition
//first method
a = 12 + a;
b = 9 + b;
c = c + 7;

var a = 3;
var b = 17;
var c = 12;

//2nd method
a += 12;
b += 9;
c += 7;

console.log(b);

//Compound Assignment with augmented subtraction
var a = 11;
var b = 9;
var c = 3;

a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -= 15;
c -= 1;

//Compound Assignment with augmented multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
b = b * 3;
c = c * 10;

a *= 5;
b *= 3;
c *= 10;

console.log(b);

//Compound Assignment with augmented division
var a = 48;
var b = 108;
var c = 33;

a = a / 12;
b = b / 4;
c = c / 33;

a /= 12;
b /= 4;
c /= 33;

//Escaping literal quotes in strings
var mySentence = 'I am a "double quoted" string inside "double quotes"';

/* 
/n - new line
/t - tab
/f - form feed
/b - backspace

*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//Concactenating Strings with plus Operator

var ourStr = "I come first" + "I come second.";
var myStr = "This is the start." + "This is the end";

console.log(myStr);

//Concatenating strings with plus equals operator

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

//Constructing strings with variables
var ourNames = "Worldxcode";
var ourStr = "Hello, our name is " + ourNames + ", how are you?";

console.log(ourStr);

var myName;
var myStr;

myName = "Promise";
myStr = "My name is " + myName + ". I am beautiful";
console.log(myStr);

//Appendind variables to strings
var anAdjective = "awesome";
var ourStr = "Promise is ";

ourStr += anAdjective;
console.log(ourStr);

var someAdjective = "worthwhile";
var myStr = "learning to code ";
myStr += someAdjective;

console.log(myStr);

//find length of string
var firstNameLength = 0;
var firstName = "Promise";

firstNameLength = firstName.length;
console.log(firstNameLength);

//Setup

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

//Bracket Notation to find first character in string
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//setup
var firstLetterOfLastName = "";
var lastName = "Nwankwo";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//string immutability: strings are immutable meaning that they can't be altered once they are created.
var myStr = "Jello world";
myStr = "Hello world";

//Bracket Notation to find Nth Character in String
var firstLetterOfLastName = "";
var lastName = "Nwankwo";

firstLetterOfLastName = lastName[3];
console.log(firstLetterOfLastName);

//Bracket Notation to find last Character in String
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

var lastLetterOfLastName = lastName[lastName.length - 3];
console.log(lastLetterOfLastName);

//Word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdjective +
    ".";

  return result;
}

console.log(wordBlanks("dogs", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//Store multiple values with arrays
// An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];
//An array can hold many values under a single name, and you can access the values by referring to an index number.

var ourArray = ["John", 23];
var myArray = ["Promise", 20, "Love"];

//Nested Array

/* Nested Array in JavaScript is defined as Array (Outer array) within another array (inner array). An Array can have one or more inner Arrays. These nested array (inner arrays) are under the scope of outer array means we can access these inner array elements based on outer array object name. */

var ourArray = [
  ["the universe", 42],
  ["everything", 10003],
];

var myArray = [
  ["Promise", 32],
  ["Chisom", 1.5],
];

//Access Array Data with Indexes

var ourArray = [50, 60, 70];
var ourData = ourArray[0];

//Example 2

var myArray = ["Promise", "Ishaku", "Chisom", "Mummy"];
var myData = myArray[3];
console.log(myData);

//Modify Array Data with Indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray);
//Example 2
var myArray = ["Pawpaw", "Mango", "Orange", "Banana"];
myArray[2] = "Apple";
console.log(myArray);

//Access Multi-Dimensional Arrays with Indexes
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];
var myData = myArray[0][0];
console.log(myData);

var myData = myArray[3][2];
console.log(myData);

//Manipulate Arrays with push(): push is to add
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

//2nd example

var myArray = [
  ["John", 23],
  ["cat", 3],
];
myArray.push(["Chisom", "Daddy", 12]);
console.log(myArray);

//Manipulate Arrays with pop(): pop is to subtract
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

//2nd Example

var myArray = [
  ["John", 30],
  ["cat", 20],
];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//Manipulate Arrays with shift(): the shift function is very similar to the pop function except that it removes the first element of the array instead of the last element.
var ourArray = ["John", "J", ["CAT"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

//2nd Example
var myArray = [
  ["John", 30],
  ["cat", 20],
];

var removedFromMyArray = myArray.shift();
console.log(myArray);

//Manipulate Arrays with unshift(): the unshift function is similar to the push function. Push add an element to the end of the array while unshift add element to the beginning of the array.
var ourArray = ["Stimpson", "J", "CAT"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

//2nd Example
var myArray = [
  ["John", 30],
  ["cat", 20],
];
myArray.shift();
myArray.unshift(["James", 32]);
console.log(myArray);

//shopping list
var myList = [
  ["Cereal", 2],
  ["Milo", 3],
  ["Milk", 4],
  ["Soap", 2],
  ["Bread", 2],
  ["shoes", 2],
  ["Books", 5],
];

//Writing Reusable Code with Fuctions- Functions allows us to create reusable codes in JavaScript.
function ourReusableFunction() {
  console.log("Heyya, world");
}

ourReusableFunction();

//2nd example
function myReusableFunction() {
  console.log("Hi, worldxcode");
}

myReusableFunction();

//Passing values with function with arguements
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

//2nd example
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(12, 6);

//Global scope and function
//Scope refers to the visibility of vaiables. Variable whic are found outside function block have global scope. Global scope can be seen everywhere in your JavaScript code.

// Declare your variable here
var myGlobal = 10;

function fun1() {
  //Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobalGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

fun1();
fun2();

//Local Scope and functions: Variable which are declared within a function as well as the function parameter has local scope. That means that they can be visible from within the function.

function myLocalScope() {
  var myNum = 5;
  console.log(myNum);
}

myLocalScope();

//Global vs. Local Scope in function
var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//Return a value from a function with return: you can return a value from a function with the return statement.

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

//Example 2

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));

//Understanding Undefined Value Returned from a Function
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

//Assignment with a Returned Value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//Stand in line

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean Values are data types in Js. They are true or false

function welcomeToBooleans() {
  return true;
}

//Use Conditional logic with If Statement

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "yes, it's true";
  }
  return "No, it is false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, it was false";
}
console.log(trueOrFalse(false));

//Comparison with equality Operator

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

//Comparison with the strict equality Operator

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

/* 
3 === 3 - True
3 === "3" -false

*/

function schoolName(name) {
  if (name === "Promise") {
    return "True";
  }

  return "false";
}

console.log(schoolName("Promise"));

//Practice comparing different value

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }

  return "Not Equal";
}

console.log(compareEquality(10, "10"));

//Comparison with inequality Operator

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }

  return "Equal";
}

console.log(testNotEqual(10));

//Comparison with the strict inequality Operator

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }

  return "Equal";
}

console.log(testStrictNotEqual(10));

//Comparison with the Logical and Operator

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "10 0r Under";
  }
}

console.log(testGreaterThan(15));

//Comparison with the Greater than or equal to Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }

  if (val >= 10) {
    return "10 or over";
  }
}

console.log(testGreaterOrEqual(15));

//Comparison with the Less than Operator

function testLessThan(val) {
  if (val < 10) {
    return "value under 10";
  }

  if (val < 50) {
    return "value under 50";
  }
  return "value over 50";
}
console.log(testLessThan(60));

//Comparison with the less than or equal to Operator

function testlessOrEqual(val) {
  if (val <= 20) {
    return "samaller than or equal to 20";
  }

  if (val <= 40) {
    return "smaller than or equal to 40";
  }

  return "more than 40";
}

console.log(testlessOrEqual(50));

//Comparison with the logical and operator

//1st method
function testLogicalAnd(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "yes";
    }
  }

  return "No";
}

testLogicalAnd(10);

//2nd method
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }

  return "No";
}

console.log(testLogicalAnd(10));

//Comparison with the logical or operator

function testLogicalOr(val) {
  if (val < 10) {
    return "Outside";
  }

  if (val > 20) {
    return "Outside";
  }

  return "Inside";
}

//2nd method

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(22));

//Else Statement

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaaller";
  }

  return result;
}

console.log(testElse(5));

//Else if statement

function testElseIF(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIF(7));

//Logical Order in If Else statement

function orderMyLogic(val) {
  if (val > 5) {
    return "Less than 10";
  } else if (val < 10) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));

//Chaining If Else statement

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "Large";
  } else return "huge";
}

console.log(testSize(19));

//Golf Code

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 7));

//Switch Statement

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(1));

//Default option in Switch Statements.

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

console.log(switchOfStuff("b"));

//Multiple Identical options in switch statement

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }
  return answer;
}

console.log(sequentialSizes(3));

//Replacing if Else chains with switch
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;

    case 42:
      answer = "The answer";
      break;

    case 1:
      answer = "There is no #1";
      break;

    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}

console.log(chainToSwitch("bob"));

//Returning Boolean Valuea from Functions

function isLess(a, b) {
  return a < b;
}

console.log(isLess(20, 15));

//Returning Early Pattern from functions

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));

//Counting cards
var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//Build JavaScript Object

var ourDog = {
  name: "Camper",
  Legs: 4,
  tails: 1,
  friends: ["everything"],
};

//2nd example
var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 1,
  friends: [],
};

console.log(myDog);

//Accesing object properties with Dot Notation

var testObj = {
  hat: "ballcal",
  shirt: "jersey",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accesing object properties with bracket Notation

var testObj = {
  "a hat": "ballcal",
  "my  shirt": "jersey",
  "our shoes": "cleats",
};

var hatValue = testObj["a hat"];
var shirtValue = testObj["my shirt"];

//Accesing object properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

//updating object properties

var ourDog = {
  name: "Camper",
  Legs: 4,
  tails: 1,
  friends: ["everything"],
};

ourDog.name = "Happy Camper";

console.log(ourDog);

//2nd example
var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 1,
  friends: [],
};

myDog.name = "Goat";

//Add new property to an object

var ourDog = {
  name: "Camper",
  Legs: 4,
  tails: 1,
  friends: ["everything"],
};

ourDog.bark = "waa waa";

//2nd example
var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 1,
  friends: [],
};

myDog["bark"] = "waa waa";

console.log(myDog);

//Delete property to an object

var ourDog = {
  name: "Camper",
  Legs: 4,
  tails: 1,
  friends: ["everything"],
};

ourDog.bark = "waa waa";

//2nd example
var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 1,
  friends: [],
};

delete myDog.tails;

console.log(myDog);

//Using Objects for lookups

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  return result;
}

console.log(phoneticLookup("charlie"));

//Testing Objects for properties

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
}

console.log(checkObj("bag"));

//Manipulating Complex Objects

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CS", "8T", "LP"],
    gold: true,
  },

  {
    artist: "Promise Nwankwo",
    title: "Piano Woman",
    release_year: 1992,
    formats: ["Youtube video", "8T", "LP"],
    gold: false,
  },
];

//Accessing Nested Objects

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing Nested Arrays

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record collection

var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecord(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecord(2468, "tracks", "test"));

console.log(updateRecord(5439, "artist", "ABBA"));

//Iterate with while loops: Loops allows you to run the same code multiple times.
//While loop runs a specified condition when it is true and stop when it is no longer true.

var myArray = [];
var i = 0;
while (i < 10) {
  myArray.push(i);
  i++;
}

console.log(myArray);

//Iterate with for loops: it breaks out of the loop once the condition becomes false.

var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

//2nd example

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);

//Iterate Odd Numbers with a for loop

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];
for (var i = 0; i < 20; i += 2) {
  myArray.push(i);
}

console.log(myArray);

//Example 3
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

//Count Backwards with a for loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

//iterate through an array with a For Loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal);

//2nd Example
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

//Nesting For Loops

function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

//iterate with do...while loops: while first checks the condition before it runs any code within the loop.A do while loop will always run at lease one time before checking the condition.
//while loop example
var myArray = [];
var i = 10;

while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(i, myArray);

//Do-while loop example
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

//profile lookup

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Kristian", "likes"));

//Generate Random fractions

function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

//Gen(erate Random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

//Generate random whole number within a range

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var ourRandom = ourRandomRange(1, 9);
console.log(ourRandom);

//2nd example
function myRandomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = myRandomRange(5, 15);
console.log(myRandom);

//Use the parseInt function

function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

//Use the parseInt function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

//Use the conditional (ternary) operator
function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, 2));

//Use the Multiple conditional (ternary) operator
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));

//Difference between the var and let keyword
//"use strict" - catches coding mistakes.
//You can declare var multiple times with the same variable name but you cannot declare let or constant multiple times in the same scope.

//Compare scopes of the var and let keywords
//The var keyword can be accessed anywhere within the scope while the let and const can only be accessed from the scope where it is declared.

//Declare a Read-Only Variable with the const Keyword: if you declare a variable with a const keyword, you cannot reassign it afterward. Const allows the use of capital letters.

//Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

console.log(s);

//Prevent Object Mutation: object.freeze prevent mutation of the object.
function freezeObj() {
  "use strict";
  const MATHS_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATHS_CONSTANTS);

  try {
    MATHS_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATHS_CONSTANTS.PI;
}

const PI = freezeObj();
