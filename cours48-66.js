/*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);

/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let i = 0; i < colors.length; i++) {
    console.log(`- ${colors[i]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

/*


  Loop Control
  - Break
  - Continue
  - Label : to control the loops even if you inside a child
*/

{
  let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

  let colors = ["Red", "Green", "Black"];
  //the declaration of the lable
  mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
      console.log(`- ${colors[j]}`);
      if (colors[j] === "Green") {
        // this will brak the main loop from a condition inside the nestedloop
        break mainLoop;
      }
    }
  }
}

/*
  Loop For Advanced Example
*/

{
  let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
  let i = 0;
  //if you hide a condition inside the loop you must write the semi-columns of it
  for (;;) {
    console.log(products[i]);
    i++;
    if (i === products.length) break;
  }
}

/*

  Products Practice
*/

{
  let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
  let colors = ["Red", "Green", "Blue"];
  let showCount = 4;

  document.write(`<h1>Show ${showCount} Products</h1>`);

  for (let i = 0; i < showCount; i++) {
    // inside each div we will have the product number then the product name
    // then the colors in 3 lines then the colors in one line separated
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
      document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    document.write(`</div>`);
  }
}

/*


  Loop
  - While
*/

{
  let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

  let index = 0;

  while (index < products.length) {
    console.log(products[index]);
    index += 1;
  }
}

/*
  Loop
  - Do / While
*/

{
  let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

  let i = 0;

  do {
    console.log(i);
    i++;
  } while (false);

  console.log(i);
}

/*


  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(name) {
  console.log(`Hi ${name}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);

/*


  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed after return]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}
generate(10, 20);

/*

  Function : the default value for any function parameter is undefined
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

//if you want to change the default value this is some methods
function sayHello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*


  Function
  - Rest Parameters:if you dont know the number of parameters,
  you can define the RP it makes the function accepte any number of P

  - Only One Allowed : only one rest parameter in a function
  - Must Be Last Element : if it's with other parameter it must be the last one 
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*

  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");

/*


  Function
  - Anonymous Function: it's a function like void , and it can stocked in a variable
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/
//this is the anony function
let calculator = function (num1, num2) {
  return num1 + num2;
};
//we call it with the name of the variable and (parameters)
console.log(calculator(10, 20));
//use case
setTimeout(function () {
  console.log("Good");
}, 2000);

function sayHello() {
  console.log("Hello Osama");
}
//I thinks that the function must has no parameters to work like this
// no I think here we need just the function and not call it
document.getElementById("show").onclick = sayHello;

/*


  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}
console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  /*it's call concatMsg() and this brings the msg+fn+ln 
  and we return the value */
  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print1 = function () {
  return 10;
};

let print2 = () => 10;

let print3 = function (num) {
  return num;
};

let print4 = (num) => num;

let print5 = function (num1, num2) {
  return num1 + num2;
};

let print6 = (num1, num2) => num1 + num2;

console.log(print(100, 50));
