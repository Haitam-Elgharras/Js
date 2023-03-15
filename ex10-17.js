//ex1
// Add Variables Here
let numberOne = 10,
  numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String
/*
  Normal Concatenate
  20
  10
*/
console.log(numberOne + "\n" + numberTwo);
/*
  Template Literals Way
  20
  10
*/
console.log(
  `${numberTwo}
${numberOne}`
);

//ex2
//the id.innerhtml give us the content of the element in the html
console.log(elzero.innerHTML); // object

console.log(typeof elzero); // object

//ex3
console.log(
  '`I\'m In\n \\\\ \
\n love \\\\ """ \'\'\' \
\n ++ With ++ \n \\"""\\""" \
\n ""JavaScript""``'
);
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
 */

//ex4
{
  let a = 21;
  let b = 20;

  console.log((a + "_" + b).repeat(4)); // _21_2021_2021_2021_20_
}
