/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

// an instance of the date class
let dateNow = new Date();

// this variable will contain the date
// Sat Mar 11 2023 18:43:27 GMT+0100 (UTC+01:00)
// it's fixe
console.log(dateNow);

// it returns the date en ms from 1 january 1970
console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds from 1970 to the date in the var
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

{
  let dateNow = new Date();
  let birthday = new Date("Oct 25, 82");
  let dateDiff = dateNow - birthday;

  console.log(dateDiff);
  console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

  console.log(dateNow); //today date
  console.log(dateNow.getTime()); //ms from 1970
  console.log(dateNow.getDate()); //the day in month
  console.log(dateNow.getFullYear());
  console.log(dateNow.getMonth()); //the month-1 cause it start from 0
  console.log(dateNow.getDay()); //day in the week [0-6]
  console.log(dateNow.getHours());
  console.log(dateNow.getMinutes());
  console.log(dateNow.getSeconds());
}

{
  /*
  Date And Time
  - setTime(Milliseconds) give ms passed from 1970 until the date u want
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

  let dateNow = new Date();
  console.log(dateNow);

  console.log("#".repeat(66));

  dateNow.setTime(0);
  console.log(dateNow);

  console.log("#".repeat(66));

  dateNow.setTime(10000);
  console.log(dateNow);

  console.log("#".repeat(66));

  dateNow.setDate(35);
  console.log(dateNow);

  dateNow.setFullYear(2020, 13);
  console.log(dateNow);

  dateNow.setMonth(15);
  console.log(dateNow);
}

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

//time from this date until now in ms
console.log(Date.parse("Oct 25 1982"));

// 1970
let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

// when we write as a table the index of months must be start from 0
let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 1000; i++) {
  // document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

/*
*
*
*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  console.log("Started");
  yield 1;
  console.log("After first yield");
  yield 2;
  console.log("After second yield");
  yield 3;
  console.log("Finished");
}

let generator = generateNumbers();

console.log(typeof generator); //object
console.log(generator);

console.log(generator.next()); //Started \n {value: 1, done: false}
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
/* 
Started
 {value: 1, done: false}
 After first yield
 {value: 2, done: false}
After second yield
{value: 3, done: false}
 Finished
 {value: undefined, done: true}
*/

// always print cause we use the fnct itself
for (let value of generateNumbers()) {
  console.log(value);
}
// it doesn't print any thing cause the generator has already used
for (let value of generator) {
  console.log(value);
}

/*
*
*
*
*
*
  Generators
  - Delegate Generator
*/

{
  function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
  }

  function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
  }

  //   in this case like entring inside each function generator
  function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6]; //like get value of pointers
  }

  let generator = generateAll();

  console.log(generator.next()); //1..
  console.log(generator.next()); //2...
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.return("Z")); //will stop the execution at all
  console.log(generator.next()); //undefined
  console.log(generator.next());
  console.log(generator.next());
}

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

{
  function* generateNumbersTest() {
    yield 1;
    yield 2;
    return "A";
    yield 3;
    yield 4;
    /*when we call yield 3 it will execute what cames before it ! so it will ends before the yield 3 */
  }

  function* generateNumbers() {
    let index = 0;

    while (true) {
      yield index++;
    }

    // example when we called yield 3
    /*while(true) {
        y0 
        y1
        y2
        yield 3 =>will stop the while  

        when we call a generator function again it start at the point we resume at it
  and it remember all the things that happend before ( virables value ...) 
    }*/
  }

  let iterator = generateNumbers();

  console.log(iterator.next()); // { value: 0, done: false }
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
}

/*
IMPORTANT generator function

When a generator function is called, it returns a generator object which can be used to control 
the execution of the generator function. When next() is called on the generator object for the first time,
 the generator function starts executing from the beginning until it encounters the first yield statement.

At that point, the value specified in the yield statement is returned as the value of the next() call,
 and the generator function execution is paused. All the variables and the execution state are saved at this point.

The next time next() is called on the generator object, the generator function resumes execution from the point
 where it was paused, continues executing until it encounters the next yield statement,
  and returns the value specified in that yield statement. This process repeats until 
  the generator function reaches its end, at which point the done property of the returned object is set to true.

So, in summary, when a generator function is called, it is like creating a checkpoint in the function's execution.
 The generator object keeps track of this checkpoint and allows us to resume the function's execution from where it left off
  the last time we called next(). This allows for more flexible and efficient control of the function's execution. */

/*#####################################################################################################"" */

/*







  Modules
  - Import And Export
*/
//main.js file
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };

// app.js file

// if we want to change the name of the exporting elements we can Use element as newElement
import { a, arr, saySomething as s } from "./main.js";

//when we import it we can use it
console.log(a);
console.log(arr);
console.log(s());

//in html we must add the module type to the files
/*
<script src="main.js" type="module"></script>
<script src="app.js" type="module"></script>
*/

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

// main.js
{
  let a = 10;
  var arr1 = [1, 2, 3, 4];

  function saySomething() {
    return `Something`;
  }
}

export { a as myNumber, arr, saySomething };

// in each module ( module file) we can have only one default
export default function () {
  return `Hello`;
}

// app.js
// we write the import outSide the {} with the name we want
import elzero, { myNumber, arr1 as arr2, saySomething as s } from "./main.js";

console.log(myNumber);
console.log(arr2);
console.log(s());
console.log(elzero());

// here we will import the whole module and this module will be as an object
import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr2);
