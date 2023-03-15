//calcule of date of birthday
function dateOfBirth(day, month, year) {
  let numberOfDays = 0,
    numberOfMonths = 0,
    numberOfyears = 0;
  mainloop: for (let i = year; i <= 2023; i++) {
    if (numberOfDays == 0) {
      for (let j = month; j <= 12; j++) {
        for (let k = day; k <= 30; k++) {
          numberOfDays++;
          if (k == 5 && j == 2 && i == 2023) {
            break mainloop;
          }
        }
      }
      continue mainloop;
    } else {
      for (let j = 1; j <= 12; j++) {
        for (let k = 1; k <= 30; k++) {
          numberOfDays++;
          if (k == 5 && j == 2 && i == 2023) {
            break mainloop;
          }
        }
        numberOfMonths++;
      }
    }
    if (i != 2023) {
      numberOfyears++;
    }
  }
  numberOfMonths += numberOfyears * 12 * (0.5 / 30.5);
  numberOfDays += numberOfMonths * 0.5;
  console.log(
    `the number of years is ${numberOfyears} the number of months is ${numberOfMonths} the number of days is ${numberOfDays}`
  );
}

dateOfBirth(3, 10, 2002);

//ex1
function sayHello(theName, theGender) {
  if (theGender != undefined) {
    if (theGender === "Male") console.log(`Hello Mr ${theName}`);
    else console.log(`Hello Miss ${theName}`);
  } else console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ex2
function calculate(firstNum, secondNum, operation) {
  if (firstNum !== undefined && secondNum !== undefined) {
    switch (operation) {
      case "subtract":
        console.log(firstNum - secondNum);
        break;
      case "multiply":
        console.log(firstNum * secondNum);
        break;
      default:
        console.log(firstNum + secondNum);
        break;
    }
  } else {
    console.log(`you must write two numbers`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/*



ex 1 function and scop  */

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    /*The problem with trying to assign a single character string to an index
     in another string is that strings in JavaScript are immutable, which means that once a string
      is created, it cannot be changed.Attempting to modify a string by assigning
       a value to an index will result in an error */
    let i = zName.indexOf(" ");
    zName = zName.slice(0, i + 1) + zName.charAt(i + 1).toUpperCase() + ".";

    return zName;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    zAge = parseInt(zAge);
    return `Your age is ${zAge}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    zCountry =
      "You live In " + zCountry[0].toUpperCase() + zCountry[1].toUpperCase();
    return zCountry;
  }
  function fullDetails() {
    let full = `${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
    return full;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// document.write(`${ageWithMessage("20 is my age")} `);

//Arrow function
function itsMe() {
  return `Iam A Normal Function`;
}
let itsMeArrow = () => `Iam An Arrow Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(itsMeArrow()); // Iam An Arrow Function
/**************************************************************** */
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
let urlCreateArrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log(urlCreateArrow("https", "elzero", "org"));

/**
 * 
 * 
 * 
"""""""""#"""""""""""""""""###################################################################"
 *  ex2
 *
 
 */
function specialMix(...data) {
  let total = 0;
  var counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isInteger(parseInt(data[i])) == true) {
      total = parseInt(data[i]) + total;
      counter++;
    }
  }
  if (counter == 0) return "All are strings";
  else return total;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

//###############################################################################################################

//higher Order Functions

//ex1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let str = mix.map(function (el) {
  //will return also "" inside the table but the when adding ""
  //to a string it doesn't change anything
  if (isNaN(el)) return el;
  else return "";
});
//will add acc to current and return it at the end
str = str.reduce((acc, current) => acc + current);
//we don't write str() cause we return a stirng to the function
//so str is a string
console.log(str);

//ex2
let myString = "EElllzzzzzzzeroo";

let newString = myString
  .split("")
  .filter(function (el, i, arr) {
    return !arr.includes(el, i + 1);
  })
  .reduce((acc, current) => acc + current);
console.log(newString);

//challenge 1
let arr = ["E", "l", "z", ["e", "r"], "o"];

let flattened = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flattened);
// Elzero

//challenge 2
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newTab = numsAndStrings.filter((el) => !isNaN(el)).map((el) => -el);
console.log(newTab);
// [-1, -10, 10, 20, -5, -3]
let nums = [2, 12, 11, 5, 10, 1, 99];

let newNumber = nums.reduce(function (acc, current) {
  if (current % 2 != 0) return acc + current;
  else return acc * current;
}, 1);
console.log(newNumber);
// 500
