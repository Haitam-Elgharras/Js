//ex1
// Replace ? With Arithmetic Operators
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0

// ex2
let num = 3;

// Solution One
console.log(num * Math.ceil(num / --num)); // 6

// Solution Two

console.log(num * Math.round(num / --num)); // 6

// Soultion Three
console.log(num * --num); // 6

// Soultion Four
console.log(num ** --num - ++num); // 6

// Solution Five
console.log(num * num - num); // 6

//ex4
{
  let points = 10;

  points = ++points + ++points + ++points - points;
  points = Math.ceil(points / 2);
  ++points;

  console.log(points); // 13

  // Write Your Code Here
  points = Math.ceil(points / 2);
  ++points;
  console.log(points); // 8;
}
