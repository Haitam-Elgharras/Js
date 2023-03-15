//  ex1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10e4); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1_000 * 100); // 100000
// ex2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// ex3
/*the .split() work only with strings , we can delete split here*/
console.log(Number.MAX_SAFE_INTEGER.toString().split("").length); //16

// ex4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// ex5
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// ex6
{
  let flt = 10.4;

  console.log(Math.round(flt)); // 10
  console.log(Math.trunc(flt)); // 10
  console.log(+flt.toFixed(0)); // 10
  console.log(Math.floor(flt)); // 10
  console.log(parseInt(flt)); // 10
}

// ex7
/*a random int between 0 and 4 , the random fuction in js return a number between  ]0,1[ when we multiply it with an x
    it's return between ]0,x[ and the math.floor to make the return int */
console.log(Math.floor(Math.random() * 5));
