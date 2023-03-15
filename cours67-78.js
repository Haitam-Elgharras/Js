/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  //the function will use the variables inside the local scop
  //if the variables dont exist in local they will search inside the global scop
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

/*


  Scope
  - Global And Local Scope
*/

{
  /*var has always a local scoop inside his scoop  , in if() for ... 
  for ex if we use var inside an if in a fct it will be accessible at all the fc */
  //the function can get a var or let variable from globale scop
  //but the global variable can't get his value from a function
  var a = 1;
  let b = 2;

  function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
  }

  console.log(`From Global ${a}`);
  console.log(`From Global ${b}`);
  //if we use var before declare it => undifined
  //if we use let before declare it => error
  //we can declare a variable just before the call of the fct
  showText();
}

/************************************************************* */

// program showing block-scoped concept
// global variable
let a = "Hello";

function greet() {
  // local variable
  let b = "World";

  console.log(a + " " + b);

  if (b == "World") {
    // block-scoped variable
    let c = "hello";

    console.log(a + " " + b + " " + c);
  }

  // variable c cannot be accessed here
  console.log(a + " " + b + " " + c);
}
/*Note: In JavaScript, var is function scoped and let is block-scoped.
 If you try to use var c = 'hello'; inside the if statement in the above program,
  the whole program works, as c is treated as a local variable.
 */

greet();

/*


  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// *************************
// program to show the change in global variable
let a = "hello";

function greet() {
  a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
// *************************
{
  //cause if we don't define b it will be undefined
  let b = "child";
  function parent() {
    let a = 10;

    //the nested function can get variables from the parent function
    //but inversely it's impossible
    function child() {
      console.log(a); //get it from the global scop
      console.log(`From Child ${b}`);

      function grand() {
        let b = 100;
        console.log(`From Grand ${a}`);
        console.log(`From Grand ${b}`);
      }
      grand();
    }
    child();
  }
  parent();
}

//
// In JavaScript, a variable can also be used without declaring it.
// If a variable is used without declaring it, that variable automatically becomes a global variable.

// For example,

function greet() {
  a = "hello";
}
greet();
console.log(a); // hello
/*#################################################################################""""*/

// Variable Hoisting
// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// For example,
// program to display value
a = 5;
console.log(a);
var a; // 5
console.log(a); //5

// However in JavaScript, initializations are not hoisted. For example,

// program to display value
console.log(a);
var a = 5;
// Output;
// undefined;

/*



  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/
// console.log(`Current Element => ${element}`);
// console.log(`Current Index => ${index}`);
// console.log(`Array => ${arr}`);
// console.log(`This => ${this}`);

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

/*the map make the function(his first parameter make a mapping around myNums) and in each elment 
it return the sum to the index of the current element */
//we give the element to the function
let addSelf = myNums.map(function (element) {
  return element + element;
});

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);
console.log(add);

/*



map practice

*/

let swap = "elZERo";
let swaping = swap
  .split("")
  .map(function (element) {
    return element == element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase();
  })
  .join("");
document.write(swaping);

//inv
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inv = invertedNumbers.map(function (n) {
  return -n;
});
document.write(inv);
document.write(invertedNumbers);

//just strings
let ignoreNumbers = "Elz123er4o";
let newI = ignoreNumbers
  .split("")
  .map(function (n, i, arr) {
    if (isNaN(n) !== true) return "";
    else return n;
  })
  .join("");
console.log(newI);

/************************************************************************* */

/*
  - Filter: it's like a map but it return the element just if the condition after 
  return is true ,
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A");
  // return el.startsWith("A") ? true : false;
});
// let filterdFriends = friends.filter((el) => el.startsWith("A"));

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*********************************************************************************************** */

/*filter practice  */
//1 delete word with lenght >4
let word = "I Love foood code too playing much";
let filterWord = word
  .split(" ")
  .filter((el) => el.length <= 4)
  .join(" ");
console.log(filterWord);

//just numbers
let mix = "A13BS2ZX";
let filterMix = mix.split("").filter((el) => !isNaN(el));
console.log(filterMix);

/*################################################################################ */
/*


  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

{
  let nums = [10, 20, 15, 30];
  /*if we didn't indicate the initial value  the acc is the 1nd element in table
  the current is the 2nd .... , else the acc is the initial value the current start with the 1st value 
  in table */
  let add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#############`);
    return acc + current;
  }, 5);

  console.log(add);
}
/*"########################################################################################## */
// reduce practice
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  //choice one of them until returning the bigest one at the end
  return acc.length > current.length ? acc : current;
});
console.log(check);

//#####################################################################
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

//##########################################################################################
/*
  - forEach
  --- method executes a provided function once for each array element.
  --it doesn't return something it's just to change css propeties and execute clicks

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  if we use arrow function we can't use thisArg
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
**
flatten array:used to hide brakest from an array inside another array we write arr.flat(),
 by default it arr.flat(1): the number indicate how many brakecst must be delete  */
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(3));
// Expected output: Array [0, 1, 2, 3, 4]

{
  const arr2 = [0, 1, 2, [[[3, 4]]]];

  console.log(arr2.flat(2));
  // Expected output: Array [0, 1, 2,[ 3, 4]]
}
