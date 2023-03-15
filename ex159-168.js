// ex1
let myBirth = new Date("oct , 03 02");
let today = new Date();
myBirth = today - myBirth;
console.log(myBirth + " ms");
console.log(myBirth / 1000 + " s");
console.log(myBirth / (1000 * 60) + " min");
console.log(myBirth / (1000 * 3600) + " hours ");
console.log(myBirth / (1000 * 3600 * 24) + " days");
console.log(myBirth / (1000 * 3600 * 24 * 30) + " months");
console.log(myBirth / (1000 * 3600 * 24 * 30 * 12) + " years");

// ex2
// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let special = new Date(0);
special.setFullYear(special.getFullYear() + 10);
console.log(special);
console.log(special.setSeconds(1));
console.log(special);

// ex5

let i = 0;
start = performance.now();
for (i = 0; i < 999; i++) {
  console.log(i);
}
end = performance.now();
result = end - start;
console.log(`the time in ms is : ${Math.floor(result)}`);

// ex6

// Write Your Generator Function Here

function* gen() {
  let index = 14;
  let num = 140;
  let sum = index + num;
  yield 14;
  while (true) {
    yield sum;
    num = num + 200;
    sum += num;
  }
}
/* when we call a generator function it like doing a resume to it and then start at the point we resume at it
  and it remember all the things that happend before ( virables value ...) */

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// ex7

{
  function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }

  // Write Your Generator Function Here
  function* genAll() {
    // same as  yield* new Set([1, 2, 2, 2, 3, 4, 5]);
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }

  let generator = genAll();
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}

  /*in order to ensure that the resulting sequence doesn't contain any duplicate values,
   the new Set() constructor is used to create a new set from the yielded sequences of genNumbers
    and genLetters. This ensures that only unique values are returned by the genAll generator function.*/
}

// #####################################################################################################
//  ex8

// we can't execute in vsCode when using import export 
// main.js File
import * as modOne from "/mod-two.js";
import calc from "/mod-one.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
// mod-one.js

export default function (a, b, c) {
  return a + b + c;
}

// mod-one.js

export default function (a, b, c) {
  return a + b + c;
}

// mod-two.js
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

export { a, b, c };



