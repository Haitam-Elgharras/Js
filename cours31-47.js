/*
  Comparison Operators
  - == Equal : compare only the value not the type
  - != Not Equal

  - === Identical compare the value and the type
  - !== Not Identical 

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);
// interview question
console.log(typeof "Osama" === typeof "Ahmed");

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";
//C version
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else {
  if (country === "Egypt") {
    price -= 40;
  } else {
    if (country === "Syria") {
      price -= 50;
    } else {
      price -= 10;
    }
  }
}
console.log(price);

//js version
{
  let price = 100;
  let discount = true;
  let discountAmount = 30;
  let country = "KSA";

  if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
  } else if (country === "Egypt") {
    price -= 40;
  } else if (country === "Syria") {
    price -= 50;
  } else {
    price -= 10;
  }
}
console.log(price);

/*


  Conditional (Ternary) Operator :like C
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
/* 
? => true then use this and stop
: => else (use this) or (verify this)
 */
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
  

  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
{
  console.log(Boolean(100));
  console.log(Boolean(-100));
  console.log(Boolean(0)); //false
  console.log(Boolean("")); //fale
  console.log(Boolean(null)); //false
  console.log(Boolean(undefined)); //false

  let price = 0;
  //if the price is false it return 200
  console.log(`The Price Is ${price || 200}`);
  //if the 1st variable is null or undifined it returns the 2nd variable
  //else it returns the 1st variable
  console.log(`The Price Is ${price ?? 200}`);
}

/*


  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case "A":
    console.log("Sunday");
    break;
  //if two cases give the same result we write them like this
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
    break;
}

/*



  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

//we can create array inside array
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
//we can access to any letter [][]
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
//array1 ele =>array2 =>array2 ele=>ele letter
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends)); //true but the type is object

/*

  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
//to add an element in the end dinamecly
//length is the last index+1
myFriends[myFriends.length] = "element";

//if you add an element ex : length+2 two places will be empty and the 3rd with the add
myFriends[myFriends.length + 1] = "element";

//still only 2 elements
myFriends.length = 2;
console.log(myFriends);

/*


  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The beginning(multiple)
  - push("", "") Add Element To The End(multiple)
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);
//nabile will be inserting 1st so myf[0]=="ossama"
myFriends.unshift("Osama", "Nabil");

console.log(myFriends);
//eman will be the last
myFriends.push("Samah", "Eman");

console.log(myFriends);
//return the element deleted
let first = myFriends.shift();

console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop();

console.log(myFriends);

console.log(`Last Name Is ${last}`);

/*

  Arrays Methods [Search] : the same with strings
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt]) (searching from the end
    but it return the real index)
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends.indexOf("Ahmed", 2));
//start from alaa to right
console.log(myFriends.indexOf("Ahmed", -2)); //4
//from alaa to left
console.log(myFriends.lastIndexOf("Ahmed", -2)); //0

console.log(myFriends.includes("Ahmed")); //true

if (myFriends.lastIndexOf("Osama") === -1) {
  //if the element doesn't exist it returns -1
  console.log("Not Found");
}

myFriends.lastIndexOf("Osama");
console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

/*



  Arrays Methods [Sort]
  - sort(Function [Opt]) : par defaut par ordre alphabétique
  - reverse
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
//[-10, -20 , 10 , "10" , 100 , 20 , "90" , 9000 , "Mohamed" , "Sayed"]

/*try this let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
myFriends.sort();
let sorting = [-10, -20, 10, "10", 100, 20, "90", 9000, "Mohamed", "Sayed"];
console.log(myFriends);
console.log(sorting);
 */
console.log(myFriends);
/* a type of sorting , the negatifs numbersfirst then the positifs (even "90") the letters
we compare just the first number of each number (800 , 90) => "90" will be first */
console.log(myFriends.sort());

//inverser le tableau
console.log(myFriends.reverse());

console.log(myFriends.sort().reverse());

let promptMsg = prompt("write from", "5-15");

promptMsg = promptMsg.split("-").sort((a, b) => a - b);
//a-b<0 => b>a ;
//a-b>0 => b<a ;
//a-b=0 => b=a ;

/*


  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2)); //[sayed , gamal[
console.log(myFriends.slice(-4, -2));
//NOTE: the slice doesn't impact the initial table
//but the splice do
console.log(myFriends);

/*important : for the splice you must give it the start (oblig) then if you want the number of deleting from
the position you gave , then the elements to add [opt] */
myFriends.splice(1, 2, "Sameer", "Samara"); //1 will be the position of the first element you add

console.log(myFriends);

/*


  Arrays Methods [Joining]
  - concat(array, array) => to add two arrays or more 

  - join(Separator)=>change a table to string and you indicate the separator
  if you don't indicate the sp the default is `,`
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ ")); //the sp is space @ space between each two elements
console.log(allFriends.join("|"));
//testing char methods
console.log(allFriends.join("|").toUpperCase());
