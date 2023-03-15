/*
  Regular Expression: Regular expressions, or "regex" for short, are a way to describe patterns of text
   in JavaScript (and many other programming languages). A regular expression is essentially a string 
   of characters that define a search pattern, and it is used to search for matches within other strings of text.
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

let invalidEmail = "Osama@@@gmail....com";
let validEmail = "o@nn.sa";

let ip = "192.168.2.1"; // IPv4

let urlV1 = "elzero.org";
let urlV2 = "elzero.org/";
let urlV3 = "http://elzero.org/";
let urlV4 = "http://www.elzero.org/";
let urlV5 = "https://.elzero.org/";
let urlV6 = "https://www.elzero.org/";
let urlV7 = "https://www.elzero.org/?facebookid=asdasdasd";

/************************************************
 * 
 * 
  Regular Expression

  Syntax
  1) /pattern/modifier(s);
  2) new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive (the upperCase or lawer case doesn't matter)
  g => global (give me all the matching)
  m => Multilines (search in multiple lines)

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

//we write the pattren inside /../ and the the modifiers
// as a caracter
let regex = /elzero/gi;

//and we write the table we want to search matches inside it with the match method
console.log(myString.match(regex));

/*############################################################################################# */

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
// write conditions inside ()
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
// give me any number between 0 and 2
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
// ^ means not so you will  get results other than not()
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe)); //3.4.5.6.7.8.9

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));speacial caracters

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g; //anything that verify the pattren
console.log(practice.match(practiceRe));

/*****************************************************
 * 
 * 
 * 
 * 
 * 
 *
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

{
  let myString = "AaBbcdefG123!234%^&*";
  //   all lower case caracters
  let atozSmall = /[a-z]/g;
  let NotAtozSmall = /[^a-z]/g;
  let atozCapital = /[A-Z]/g;
  let NotAtozCapital = /[^A-Z]/g;
  //   when we write them inside [] it's like [a,c,e] so it will be looking for a and c and e
  let aAndcAnde = /[ace]/g;
  let NotaAndcAnde = /[^ace]/g;
  //   we can write pattrens like this
  let lettersCapsAndSmall = /[a-zA-Z]/g; //the same as
  //     let lettersCapsAndSmall = /[a-z]/gi;

  let numsAndSpecials = /[^a-zA-Z]/g;
  //   ^ at the begining will be applied at all the rest even if we write another
  // ^ it will be considered like a carac and will be not(^)
  let specials = /[^a-zA-Z0-9]/g;
  console.log(myString.match(atozSmall));
  console.log(myString.match(NotAtozSmall));
  console.log(myString.match(atozCapital));
  console.log(myString.match(NotAtozCapital));
  console.log(myString.match(aAndcAnde));
  console.log(myString.match(NotaAndcAnde));
  console.log(myString.match(lettersCapsAndSmall));
  console.log(myString.match(numsAndSpecials));
  console.log(myString.match(specials));
}

/*
*****


  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// will get all the caracter unless \n \t ...
let dot = /./g;
// it's like /[a-zA-Z0-9]|_/
let word = /\w/g;
// all the things doesn't exist in \w
let wordC = /\W/g;
// word then @ then . then com or net
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// will get all the caracter unless \n \t ...
let dot = /./g;
// it's like /[a-zA-Z0-9]|_/
let word = /\w/g;
let word1 = /([a-zA-Z0-9]|_)/g;
// all the things doesn't exist in \w
let wordC = /\W/g;
// word then @ then . then com or net
let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
console.log(email.match(word));
let var1 = email.match(word);
console.log(email.match(word1));
let var2 = email.match(word1);
console.log(var1.length == var2.length);
console.log(var1 == var2);
// console.log(email.match(valid)); */

/*########################################################################"""""" */
{
  // take care of spaces
  let valid = /([1-9]spam|spam[1-9])/gi;
  // the two are not the same
  let valid1 = /([1-9]spam|spam[1-9])/gi;
}

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word not the whole caracter .

  1/ When we write "\b" at the end of a regular expression, we can't write anything after it.
   This is because if we write something after it, the regular expression will interpret 
   it as though we are requiring it to be present at the beginning.

2/We cannot have two "\b" sequences next to each other in the same regular expression pattern 
because it is not possible for a sentence to begin with two of them.

  \B => matches NOT at the beginning/end of a word.


  Test Method
  pattern.test(input) : verify if this pattern include(true) this input  
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// \bspam means that spam at the begining of the carc
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));
console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(re.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));

/****
 * 
 * 
 * 
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one (maybe existe one time or doesn't existe at all)

  n : refers to the \w \W \d(degits =numbers) ....
  \w+ : one caracter or more 
*/

{
  let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
  // let mailsRe = /\w+@\w+.(com|net)/ig;
  let mailsRe = /\w+@\w+.\w+/gi;
  console.log(mails.match(mailsRe));

  let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
  let numsRe = /0\d*0/gi;
  console.log(nums.match(numsRe));

  let urls = "https://google.com http://www.website.net web.com"; // http + https
  //   hhtps? : means s maybe existe maybe not
  let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
  console.log(urls.match(urlsRe));
}

/***
 * 
 * 
 * 
 
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
  ex: \w{4,} 4 caracters or more 
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => the whole variable  End With Something : we write it at the end of the thing 
  ^  => the whole variable  Start With Something  : ^haitam 
  ?= => Followed By Something  
  ?! => Not Followed By Something


    In regular expressions, the caret symbol (^) has a special meaning when it appears inside a set of square brackets ([]).
   When the caret is used in this way, it means "negation" or "not." Specifically, it causes the set to match any character 
   that is not one of the characters listed inside the brackets.

For example, the regular expression [^abc] matches any single character that is not "a", "b", or "c".
 This is because the caret inside the brackets indicates that the set should match any character except those listed.

On the other hand, if we remove the square brackets, then the caret symbol has a different meaning.
 In this case, the caret matches the beginning of the string. For example, the regular expression ^abc 
 matches any string that begins with the letters "abc".
*/

{
  let myString = "We Love Programming";
  let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

  console.log(/ing$/gi.test(myString));
  console.log(/^we/gi.test(myString));
  console.log(/lz$/gi.test(names));
  console.log(/^\d/gi.test(names));

  console.log(names.match(/\d\w{5}(?=Z)/gi)); //2Ahmed....
  console.log(names.match(/\d\w{8}(?!Z)/gi)); //3Mohammed
}

/*
  Regular Expression

//   there are used to replace words with another words , when we use it with regular experssions it's more perfect

  - replace
  - replaceAll
*/

{
  let txt = "We Love Programming And @ Because @ Is Amazing";
  console.log(txt.replace("@", "JavaScript"));
  console.log(txt.replaceAll("@", "JavaScript"));
  let re = /@/gi;
  //   we can use any pattren that we have learnd
  console.log(txt.replaceAll(re, "JavaScript"));
  console.log(txt.replaceAll(/@/gi, "JavaScript"));
}

/*
  Regular Expression
  - Input Form Validation Practice

  rgx tester : https://regexr.com/
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};
/*document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /(\+212|0)\d{9}/gi; // +212 633 47-50 65
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    event.preventDefault();
  }
}; */
