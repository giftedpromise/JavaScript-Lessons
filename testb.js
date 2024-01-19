let userProfile = {
  name: "Gift",
  age: 23,
  location: "Lagos",
  school: "Fgc",
};

let userFunction = () => {
  if (userProfile.age < 23) {
    return "Eligible";
  } else {
    return "Not eligible";
  }
};

console.log(userFunction());

let userNames = ["Malik", "Mustapha", "Ruth", "Gift"];
userNames.pop([0]);
console.log(userNames);

//for (i = 1; i <= 10; i++) {
//  for (let i = 1; i <= 10; i++) {
// console.log(i);
// }

/*let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

var myBook = "Math books";

function myAge() {
  let age = 32;
  console.log(age);
} */

let age = 26;

let myAge = () => {
  if (age > 25) {
    return "true";
  } else {
    return "false";
  }
};

console.log(myAge());

let weather = false;
let isWeather = weather ? "yes, there is weather" : "There is no weather";
console.log(isWeather);

const cars = [];
cars[0] = "Benz";
cars[1] = "Toyota";
cars[2] = "Honda";
cars[3] = "Hyundia";

console.log(cars);
let car = cars[0];
console.log(car);
let length = cars.length;
console.log(length);
//Changing an Array Element

cars[1] = "Wagon";

console.log(cars);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 2];
fruits.pop();
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const motto = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = motto.length;
let text = "";

for (; i < len; i++) {
  text += motto[i] + "<br>";
  console.log(i);
}
