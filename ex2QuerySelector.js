//ex2
document.write("<h1>Herculano</h1>");
window.onload = function () {
  document.querySelector("h1").style.color = "red";
  /*   in css it's font-size with js we delete - and make the 
the first letter after it capital */
  document.querySelector("h1").style.fontSize = "80px";
  document.querySelector("h1").style.fontWeight = "Bold";
  document.querySelector("h1").style.textAlign = "center";
  document.querySelector("h1").style.fontFamily = "Arial";
};
/* we can also use the inline style 
  "<h1 style='color:red ; font-size:80px ; font-weight:bold ; text-align:center'>Herculano</h1>"
 */

//ex3
console.log(
  " %cElzero %cWeb %cschool",
  "color:red;font-size:40px",
  "color:green ; font-size:40px ;font-weight:bold",
  "background-color:blue;font-size:40px ; color:white"
);

// ex4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// ex5
// a table inside the console
console.table(["haitam", "elgharras", "Js"]);
