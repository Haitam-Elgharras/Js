//challenge v47
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my.splice(-(--counter)); //impacte the table
my.reverse(); //impacte the table
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero /*1*/, ++counter /*3*/)); // ["Elham", "Mazero"](cause of the reverse)
console.log(
  `${my[zero].slice(--zero, --counter /*2 */)}${my[counter].slice(counter)}`
); // "Elzero"
console.log(
  `${my[counter++].slice(++counter, ++counter)}${my[my.indexOf("Mazero")][
    counter
  ].toUpperCase()}`
); // "rO"

//exercices
//ex1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num--)); // ["Ahmed", "Elham", "Osama"];

// Method 2
num--;
myFriends.splice(myFriends.length--, num);
console.log(myFriends.slice()); // ["Ahmed", "Elham", "Osama"];

//ex2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//ex3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ex4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// ex5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack[1] === needle) {
  console.log("Found");
}

if (haystack.slice(1, 2) == needle) {
  console.log("Found");
}

// ex6
allArrs = arr1
  .concat(arr2)
  .sort()
  .join("")
  .toLocaleLowerCase()
  .slice(-arr1.length);
console.log(allArrs); // fxy
