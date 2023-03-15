/*
  Destructuring 1
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

//each variable will take the value that correspend to his place (a=ahemd..)
[a, b, c, d] = myFriends;

//if in his place there is no value give it the deafult one
// without dfV the e will be undifined
[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

//if we want to passed an element
let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/*

  Destructuring 2
  - Destructuring Array Advanced Examples
*/

{
  let myFriends = [
    "Ahmed",
    "Sayed",
    "Ali",
    ["Shady", "Amr", ["Mohamed", "Gamal"]],
  ];
  //   myFriends = ["Ahmed","Sayed","Ali",["Shady", "Amr", ["Mohamed", "Gamal"]]],

  // console.log(myFriends[3][2][1]);

  // let [, , , [a, , [, b]]] = myFriends;

  let [, , , [a, , [, b]]] = myFriends;

  console.log(a); // Shady
  console.log(b); // Gamal
}

/*
  Destructuring 3
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

//change two variables with swaping using destructuring
[book, video] = [video, book];

console.log(book);
console.log(video);

/*

  Destructuring
  - Destructuring Object 4
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// if the variables has already been declared we must include the whole expression insid ()
({ theName, theAge, theTitle, theCountry } = user);

// if we just delcare them we delete ()
const { theName, theAge, theCountry } = user;

// if we want to change the name of some variables we can do it using ; objectVar:myVar
// here is an example
{
  const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
  };
  const { theName: var1, theCountry: var2 } = user;

  console.log(var1); // osama
  console.log(var2); // Egypt
}

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

{
  const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    //nested object
    skills: {
      html: 70,
      css: 80,
    },
  };

  const {
    theName: n,
    theAge: a,
    theCountry,
    theColor: co = "Red",
    //if we want a variable from the nested obj we do like [...[]] it's Nobj:{}
    skills: { html: h, css },
  } = user;

  console.log(n);
  console.log(a);
  console.log(theCountry);
  console.log(co);
  console.log(`My HTML Skill Progress Is ${h}`);
  console.log(`My CSS Skill Progress Is ${css}`);
  /*if we wnat the skills object we write  */

  var {
    /*some elements */
    skills: test,
  } = user;
  console.log(test);

  //or we can simply use this
  const { html: skillOne, css: skillTwo } = user.skills;
  const { test } = user.skills;

  console.log(`My HTML Skill Progress Is ${skillOne}`);
  console.log(`My CSS Skill Progress Is ${skillTwo}`);
}

/*


  Destructuring
  - Destructuring Function Parameters
*/

{
  const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };

  //hoisting
  showDetails(user);

  //   we can deal with variables inside the function
  function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
  }
  console.log(`outsid ${c}`); //error
}
// local scop
// console.log(`outsid ${c}`);

/*
  Destructuring
  - Destructuring Mixed Content 
  Practice of all the Destructuring
*/

{
  const user = {
    theName: "Osama",
    theAge: 39,
    //skills is a table not an obj (skills[i])
    skills: ["HTML", "CSS", "JavaScript"],
    //adresse is an obj
    addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
    },
  };

  // note if we are inside the obj  we must introduce the name of an obj or tab if we found it
  //like inside this we write adresses{...} ,

  //if we are just inside a table we don't introduce the variables we just write the name of our variable
  //like in skills
  const {
    theName: n,
    theAge: a,
    skills: [, , three],
    addresses: { egypt: e },
  } = user;

  console.log(`Your Name Is: ${n}`);
  console.log(`Your Age Is: ${a}`);
  console.log(`Your Last Skill Is: ${three}`);
  console.log(`Your Live In: ${e}`);
}

/*



  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has

   Unlike arrays and objects, sets don't have default keys.
    Each value in a set is unique and acts as its own key.
     When you add a value to a set, it becomes a member 
     of the set without any specific key associated with it
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();
// set add just unique values inside tha table
myUniqueData = new Set(myData);
myUniqueData = new Set([1, 1, 1, 2, 3]);
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);
//length of the set
console.log(myUniqueData.size);

console.log(myData[0]);
//u can't use indexing with set
console.log(myUniqueData[0]); //error

//to delete an element from the table
//it returns true if the element exist
console.log(myUniqueData.delete(2));

//make the table empty , include just 0
myUniqueData.clear();

// 124

/*
*
*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/***
 * 
 * 
 
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys(0,1,2...)
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered in the order of Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");
myNewMap.set(el, 10); //error must write "el"

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
*
*
*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

{
  //an array and inside it each key+value it's an array
  let myMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
  ]);

  // myMap.set(10, "Number");
  // myMap.set("Name", "String");

  console.log(myMap);

  console.log(myMap.get(10));
  console.log(myMap.get("Name"));
  console.log(myMap.get(false));

  console.log("####");

  //verify if we have a key name's false
  console.log(myMap.has(false));

  console.log("####");

  console.log(myMap.size);

  console.log(myMap.delete("Name"));

  console.log(myMap.size);

  myMap.clear();

  console.log(myMap.size);
}

/*
*
*

  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

{
  let mapUser = { theName: "Elzero" };

  let myMap = new Map();

  //weakMap protect mapUser from garbage even if this el doesn't have any other reference
  myMap.set(mapUser, "Object Value");

  mapUser = null; // Override The Reference

  console.log(myMap);

  console.log("#".repeat(20));

  let wMapUser = { theName: "Elzero" };

  let myWeakMap = new WeakMap();

  //weakMap doesn't protect an element from garbage if this el doesn't have any other reference

  myWeakMap.set(wMapUser, "Object Value");

  /*In this code, a new WeakMap instance called myWeakMap is created and an object wMapUser with a property theName
   is defined and set as its key with a corresponding value of "Object Value" using myWeakMap.set(wMapUser, "Object Value").
  
  When wMapUser is set to null using wMapUser = null, the object it references no longer has any references pointing to it,
   which makes it eligible for garbage collection. Because myWeakMap contains a weak reference to wMapUser object as a key,
    the object will be removed from the map during the next garbage collection cycle.
  
  When console.log(myWeakMap) is executed, the output will show an empty WeakMap 
  because the wMapUser object has been removed by the garbage collector. */

  wMapUser = null; // Override The Reference

  console.log(myWeakMap);
}

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

{
  console.log(Array.from("Osama"));
  console.log(
    Array.from("12345", function (n) {
      return +n + +n;
    })
  );

  //return an array from a string or from table it's like map but with string
  //it's like string.split("").map
  console.log(Array.from("12345", (n) => +n + +n));

  let myArray = [1, 1, 1, 2, 3, 4];

  let mySet = new Set(myArray);

  console.log(Array.from(mySet));

  // console.log([...new Set(myArray)]); // Future

  function af() {
    return Array.from(arguments);
  }

  console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
}

/*


  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
 
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- target : where must write the copy els
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
  - it return true in the first element that verify the condition
  or false if the iterable has ended

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

// the function is part of some so you want to give it the owner of the function
let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};
let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

//if you want to remplace it with filtre
{
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  myChecker = nums.some((e) => e > 11);
  console.log(myChecker);

  mynew = nums.filter((e) => e > 11);
  console.log(mynew.length != 0);
}

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument):the same as array.some
    but it return true if all the element verify the condition
*/

{
  const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
  };

  let mainLocation = 15;

  let locationsArray = Object.keys(locations);

  console.log(locationsArray);

  //we can't do this with forEach cause forEach doesn't change the n itself , it can change just something inside it
  //and even if it change it it doesn't return in directly to the place
  let locationArrayNumbers = locationsArray.map((n) => +n);

  console.log(locationArrayNumbers);

  let check = locationArrayNumbers.every(function (e) {
    return e > this;
  }, mainLocation);

  console.log(check);
}

/*
*
*
*
*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
// each one will be a value inside the table
console.log([..."Osama"]);
//each one will be a value inside the object
console.log({ ..."Osama" });

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
