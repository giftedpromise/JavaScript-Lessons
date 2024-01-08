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
