/*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax
*/

// to write an alter in the page , it's use rarely
window.alert("Hello From JS File");
// to create an element
document.write("<h1>Hello <span>Page</span></h1>");
// to write inside the console
console.log("Hello From JS File");

/*
  Console Methods
  - log
  - error
  - table

  Web API

  Styling Console
  - Directive %c : to specify the order of styling the first directive
  will get the first styling and so on 
*/

console.log("Log");
// will show you an error in this line
console.error("Error");
// will show you the e=indexes and the values
console.table(["Osama", "Ahmed", "Sayed"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 40px"
);

/*
  ES6 :ECMA is an acronym for European Computer Manufacturer’s Association,
   which develops standards for information technology and consumer electronics.
    Languages such as JavaScript, Dart-lang, and C# were standardized by ECMA.
*/

var myName = "Osama";

console.log("Hello " + myName);
// ` back-tick
console.log(`Hello ${myName}`);

//query selector and attribute names

/*   in css it's font-size with js we delete - and make the 
the first letter after it capital */
document.querySelector("h1").style.fontSize = "80px";

/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/
console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
//type is undefined
console.log(typeof undefined);
//type is object
console.log(typeof null);

//

/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/
// with var declaration obligtory the dec before the use
var user = "Sayed";
console.log(user);

/* - Id And Global Variable:when we define an element with an id 
then we have a global variable with the name of the id , and we can access to it 
from everywhere in the codes */
// this will write the div in the console
console.log(hello);
/*


*/

/*
  Var
  - Redeclare (Yes):we can declare it many times
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error):just one time
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
{
  let a = "10";
  let b = 20;
  let c = true;
  /*like this we can redeclare(just change the type) a without a problem with the block-scop
of let a , but if we write var a or let a then error */
  a = 20;
  console.log(a);
}

/*

*/

/*
  String Syntax + Character Escape Sequences
  \ Escape  : the anti-slash tell the machine that the letter
  came after is a caracter
  \ Line Continue :if you reach the end of a line you can use \ in the end of line
  to continue the wrtiting in the same line(for the user)

  \n:new line
*/
console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
console.log("Elzero \\ Web 'School'");
//2
console.log(
  "Elzero \
Web \
School"
);
console.log("Elzero\nWeb\nSchool");

/*


  Concatenation
*/

let a = "We Love";
let b = "JavaScript";
document.write(a + " " + b);
//will put it with space
console.log(a, b);

/*



  Template Literals (Template Strings)
*/

// First Example
{
  let a = "We Love";
  let b = "JavaScript";
  let c = "And";
  let d = "Programming";
  // the old version
  console.log(a + ' "" ' + "\\" + b + "\n" + c + " " + d);
  // the new version with ES6
  // to make an espace just make it simply between the dollar sign
  // to use a variable ${variable}
  console.log(`${a} ""  \\ ${b}
${c} ${d}`);
}

// Second Example

/*with ES6 it's easy to write html inside a variable and 
write it in the document */
//we didn't use the "" or ' we use ``
let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);

/*

the concatination challenge */
{
  let title = "Herculano",
    description = "elzero web school",
    date = "25/10";
  let container = ` <div>
<h3>${title}</h3>
<p>${description}</p>
<span>${date}</span>
</div> `;
  //this will write the container variable 4 times
  document.write(container.repeat(4));
}

/*



  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** power (ES7)
  % Modulus (Division Remainder)(7%2=1)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN :not a number
console.log(typeof NaN); //the type is number

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

/*

  - + Unary Plus [Return Number If Its a number writing as a string]
  - - Unary Negation [... + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100); //100
console.log(+"100"); //100
console.log(+"-100"); //-100
console.log(+"Osama"); //NaN
console.log(+"15.5");
console.log(+0xff); //255
console.log(+null); //0
console.log(+false);
console.log(+true); //1

console.log(-100);
console.log(-"100"); //-100
console.log(-"-100"); //100
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true); //-1

console.log(Number("100")); //100

/*


  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
{
  let a = "10";
  let b = 20;
  let c = true;

  console.log(b - a); //10
  console.log(b + a); //1020 or 2010
  console.log(a - b); //-10
  //the solution
  console.log(+a + b + c);
}

/*


challenge 2
*/
{
  let a = 10,
    b = "20",
    c = 80;
  console.log(++a + +b++ + c++ - +a++); //100
  console.log(++a + -b + +c++ - -a++ + +a); //94
}

/*



  Number
  - Double Precision
  - Syntactic Sugar "_" : the js doesn't read the _ between numbers
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434); //doesn't change

/*


  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log((100).toString());
//the number of degits after the .
console.log((100.554555).toFixed(2));

console.log(Number("100 Osama")); //NaN
console.log(+"100 Osama"); //NaN
//extract a number
console.log(parseInt("100 Osama")); //100
console.log(parseInt("Osama 100 Osama")); //NaN
console.log(parseInt("100.500 Osama")); //100
console.log(parseFloat("100.500 Osama")); //100.5

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20)); //true
console.log(Number.isNaN("Osama")); //false

/*


  Math Object and his methods

  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

//round it's the arrondie of x
console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.floor(99.9)); //E[x]:the integer part
console.log(Math.trunc(99.5)); //E[x]
console.log(Math.ceil(99.2)); //E[x]+1

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());

/* 

number challenge 3*/
{
  let a = 100;
  let b = 2_00.5;
  let c = 1e2;
  let d = 2.4;
  // Find Smallest Number In All Variables And Return Integer
  console.log(
    Math.min(Math.floor(a), Math.floor(b), Math.floor(c), Math.floor(d))
  ); // 2

  // Use Variables a + d One Time To Get The Needed Output
  console.log(Math.pow(a, Math.trunc(d))); // 10000

  // Get Integer "2" From d Variable With 4 Methods
  console.log(Math.floor(d)); // 2
  console.log(Math.trunc(d)); // 2
  console.log(Math.round(d)); // 2
  console.log(); // 2

  // Use Variables b + d To Get This Valus
  console.log((Math.floor(b) / Math.floor(++d)).toString()); // 66.67 => String

  console.log(Math.floor(Math.floor(b) / Math.floor(++d))); // 67 => Number
}

/*


  String Methods 1###########

  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
//if the index doesn't exist will return nothing
console.log(theName.charAt(5));

console.log(theName.length);
// to delete the spaces at the begining and at the end
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
// we can combine many methods
console.log(theName.trim().charAt(2).toUpperCase());
/*


  String Methods 2###########
  - indexOf(Value [Mand], Start searching [Opt] df 0) : return the 1st index
  - lastIndexOf(Value [Mand], Start [Opt] Length):return the last index
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

{
  let a = "Elzero Web School";
  //give me the index of the word Web .. return the index of [W]
  console.log(a.indexOf("Web"));
  console.log(a.indexOf("Web", 8));
  console.log(a.indexOf("o")); // 5
  //will start searching from the end
  console.log(a.lastIndexOf("o")); // 15

  /*show from index 2 to 6[ (2,5) , if you don't indicate the end 
  will not stop until the last letter*/
  //Note : if you indicate the stopping index , will not be compted
  console.log(a.slice(2, 6));
  //the last letter is -1 , from -5 to -3[
  console.log(a.slice(-5, -3));
  //will repeat a 5 times
  console.log(a.repeat(5));

  /*will return a table of shunks depanding on a separator , the 2nd number tell them how many times 
  it will cut a separator (the separator disappear , also the spaces )*/
  //the .split() work only with strings
  console.log(a.split("", 6)); //["E" , ..., "o"]
  console.log(a.split(/ +/)); //if you find an space or more cut it
}

/*



  String Methods 3###########
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], length of extracting)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

{
  let a = "Elzero Web School";

  console.log(a.length);
  console.log(a.substring(0));
  //will show [2,6[
  console.log(a.substring(2, 6));
  //will show [2,6[
  console.log(a.substring(6, 2));
  /*always the minV is 0 , if you give it a value under 0 it make it 0
  not like slice()*/
  console.log(a.substring(-10, 6)); // 0 - 6
  //if you want to start from the end
  console.log(a.substring(a.length - 5, a.length - 3));

  console.log(a.substr(0, 6)); //6 is number of caracters
  console.log(a.substr(17));
  //can count from the end
  console.log(a.substr(-3));
  console.log(a.substr(-5, 2));

  /*true and false */
  //start searching from i=0 and verify if Web exist
  console.log(a.includes("Web"));
  //start searching from i=8 and verify if Web exist
  console.log(a.includes("Web", 8));

  /*search from the position given ,is it true we start with 
  this string? */
  console.log(a.startsWith("E"));
  console.log(a.startsWith("E", 2));
  console.log(a.startsWith("zero", 2));

  //the length I wrote his end is the string I wrote?
  //3 means 3caracters
  console.log(a.endsWith("l", 3));
}
