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
