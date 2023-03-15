// RGX
// ex1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

ipre = /([\da-f]{1,4}:){7}[\da-f]{1,4}/g;
console.log(ipre.test(ip));

// ex2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

spre = /\bOs\w*O\b/gi;
console.log(specialNames.match(spre));

// ex3
let phone = "+(995)-123 (4567) +(9958)-123 (4567)";

phoneRe = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;

console.log(phone.match(phoneRe));
console.log(phoneRe.test(phone));

// ex5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
// the optional spaces are just for the second date
let re = /(\s?\d{1,2}\s?[-\/\s]){2}\s?\d{2,4}/g; // Write Pattern Here

// let re = /\d+\s?[-\/\s]\s?\d+\s?[-\/\s]\s?\d+/g;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// ex6
// must be completed
{
  let url1 = "elzero.org";
  let url2 = "http://elzero.org";
  let url3 = "https://elzero.org";
  let url4 = "https://www.elzero.org";
  let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

  let re = /((https?\:\/\/)?(www\.)?[a-zA-Z]+\.\w+).[\d*\w+\W+]/gi; // Write Your Pattern Here
  console.log(url1.match(re));
  console.log(url2.match(re));
  console.log(url3.match(re));
  console.log(url4.match(re));
  console.log(url5.match(re));
}
