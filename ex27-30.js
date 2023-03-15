// ex1
{
  let userName = "Elzero";
  console.log(userName[0].toLowerCase()); // e
  console.log(userName.charAt(0).toLowerCase()); // e
  console.log(userName.slice(0, 1).toLowerCase()); // e
  console.log(userName.substring(0, 1).toLowerCase()); // e
  console.log(userName.substr(0, 1).toLowerCase()); // e
  console.log(userName[0].toLowerCase().repeat(3)); // eee
}

// ex2
{
  let word = "Elzero";
  let letterZ = "z";
  let letterE = "e";
  let letterO = "O";

  console.log(word.includes(letterZ)); // True
  console.log(word.startsWith(letterE.toUpperCase())); // True
  console.log(word.endsWith(letterO.toLowerCase(), word.length));
}

//string challenge
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.floor(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(Math.round(d)); // 2
console.log(+d.toFixed(0)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
//the fixed is 0 so 66.6 will be 67
console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(0)); // 67 => number

//challenge string manipulation
{
  let a = "Elzero Web School";
  // Include This Method In Your Solution [slice, charAt]
  console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
}

//dynamiqu solution
{
  let a = "Elzero Web School";
  // Include This Method In Your Solution [slice, charAt]
  console.log(a.slice(-4, -3).toUpperCase().repeat(10));

  // Return Array
  console.log(a.split()); // ["Elzero"]

  // Use Only "substr" Method + Template Literals In Your Solution
  console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

  // Solution Must Be Dynamic Because String May Changes
  console.log(
    a.charAt(0).toLowerCase() +
      a.slice(1, a.length - 1).toUpperCase() +
      a.charAt(a.length - 1).toLowerCase()
  ); // eLZERO WEB SCHOOl
}
