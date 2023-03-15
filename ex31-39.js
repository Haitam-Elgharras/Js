//challenge
/*يجب عليك إستخدام المتغير مع ما تعلمته لتجعل الشرط يتحقق مع العلم أن حرف ال W داخل ال 
String يمكن أن يتغير مكانه لذلك الحل يجب أن يعمل بغض النظر عن مكان الحرف وهل هو حرف كبير أم صغير
 */
//part1
{
  let st = "Elzero Web School";
  let result;
  st.includes("w")
    ? (result = st[st.indexOf("w")])
    : st.includes("W")
    ? (result = st[st.indexOf("W")].toLowerCase())
    : (result = "the value doesn't exist");
  if (result === "w") {
    console.log("Good");
  } else {
    document.write(result);
  }
}

//part2
//they have the same type but not the same value
if (st !== "string") {
  console.log("Good");
}

//
let st = "Elzero Web School";

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
//
{
  let st = "Elzero Web School";

  if ((st.length * 2).toString() === "34") {
    document.write("good");
  }
}

//challenge
let job = "IT";
let salary = 0;

if (job === "Manager") {
  console.log((salary = 8000));
} else if (job === "IT" || job === "Support") {
  console.log((salary = 6000));
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
{
  let job = "IT";
  let salary = 0;
  switch (job) {
    case "Manager":
      salary = 8000;
      break;
    case "IT":
    case "Support":
      console.log((salary = 6000));
      break;
    case "Developer":
    case "Designer":
      salary = 7000;
      break;
    default:
      salary = 4000;
  }
}

/* 
ex1 
 */
{
  console.log(100 == "100"); // true
  console.log(100 < 1000); // true
  console.log(110 > 100 || 10 > 20); // true
  console.log(-10 == "-10"); // true
  console.log(typeof -50 === typeof +"-40"); // true
  console.log(typeof 10 == typeof -"-40"); // true
  console.log("10" == 10); // true
  console.log(Boolean(20) || false); // true
}

//ex2
{
  let num1 = 10;
  let num2 = 20;

  console.log(num1 != num2); // true
  console.log(num1 !== num2); // true
  console.log(typeof num1 === typeof num2); // true
}

// ex3
{
  let a = 20;
  let b = 30;
  let c = 10;
  // a && b || c it's (a && b) || c
  console.log((a < b && a > c) || a < b); // true
  console.log(a < b || a < c); // true
  console.log(!(a > b) && !(a === b) && !(a == c) && !(a <= c)); // true
}

//33/37
// ex2
{
  let num1 = 9;
  let str = "9";
  let str2 = "20";

  // Output

  if (num1 == str) {
    if (num1 !== str) {
      console.log("{num1} Is The Same Value As {str} But Not The Same Type\n");
    }
    console.log("{num1} Is The Same Value As {str}\n");
  }
  if (num1 != str2 || typeof num1 == typeof str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2} \n");
  }
  if (typeof str == typeof str2) {
    if (str == str2) {
      console.log("same type same value \n");
    } else {
      console.log("{str} Is The Same Type As {str2} But Not The Same Value\n");
    }
  }
}

// ex3
