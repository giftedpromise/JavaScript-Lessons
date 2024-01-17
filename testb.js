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

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
