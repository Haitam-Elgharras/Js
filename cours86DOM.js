/*
  DOM
  - What Is DOM : document object model
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/
//the id is unique so it return 1 element
let myIdElement = document.getElementById("my-div");
//"s" the tage name is not unique so it returns a table of the same tage name
let myTagElements = document.getElementsByTagName("p");
//all the elements with this class in a table and we can access to it using indexing
let myClassElement = document.getElementsByClassName("my-span");
//query accept any selector exactly like selecting elements in css
//it returns the 1st element with this selector
let myQueryElement = document.querySelector(".my-span");
//it returns all the elements with this selector
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
//to find forms or links
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
console.log(document.images[3]);

// ####################################################################################################################
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");
//all the html or text inside this element
console.log(myElement.innerHTML);
//only text inside this element if there is html tags avoid them
console.log(myElement.textContent);
//will write this as it is inside the myelement (creat a span)
myElement.innerHTML = "Text From <span>Main.js</span> File";
//will write inside the .js this as a text pure the span will be writting by it's code to be a text
myElement.textContent = "Text From <span>Main.js</span> File";

//change the image src
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
//change the class of the 1st img
document.images[0].className = "img";

let myLink = document.querySelector(".link");

//get the class name of this element
console.log(myLink.getAttribute("class"));
//get the link inside the href
console.log(myLink.getAttribute("href"));

//set accept two values the (attr name , attr value )
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

//#####################################################################################################

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

//give me all the attrs
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

//myp has title attr
if (myP.hasAttribute("title")) {
  if (myP.hasAttribute("data-src")) {
    //if the value of this attr is empty
    if (myP.getAttribute("data-src") === "") {
      //remove this attr
      myP.removeAttribute("data-src");
    } else {
      //give it a new value like title="newValue"
      myP.setAttribute("data-src", "New Value");
    }
  } else {
    console.log(`Not Found`);
  }
  //check if myP has any attr (return a boolean)
  if (myP.hasAttributes()) {
    console.log(`Has Attributes`);
  }
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

//#####################################################################################################

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

//this will creat a div
let myElement = document.createElement("div");
//an attr
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");
//set the class of div to product
myElement.className = "product";
//add the attr to div
myElement.setAttributeNode(myAttr);
//add attr with value testing
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

//Practice
/*

  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
for (let i = 0; i < 100; i++) {
  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");

  //we can't use the same variable in two elements
  let myHeadingText = document.createTextNode(`Product Title ${i + 1}`);
  let myParagraphText = document.createTextNode("Product Description");

  // Add Heading Text
  myHeading.appendChild(myHeadingText);

  // Add Heading To Main Element
  myMainElement.appendChild(myHeading);

  // Add Paragraph Text
  myParagraph.appendChild(myParagraphText);

  // Add Paragraph To Main Element
  myMainElement.appendChild(myParagraph);

  myMainElement.className = "product";

  document.body.appendChild(myMainElement);
}

//############### dealing with child

/**  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild */

let myElement = document.querySelector("div");

console.log(myElement);
//all the child element(div span ....): just the name of child ex : p span ...
console.log(myElement.children);
console.log(myElement.children[0]);
//all the child including the text and comments(just the name text comments...)
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

//first child including the text and comments
console.log(myElement.firstChild);
console.log(myElement.lastChild);

//1st child element(div span ....)
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

/** <body>
    <div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
    <script src="main.js"></script>
  </body> */

//###############################################################################################################

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
 onclick: an event that fires when an element is clicked

oncontextmenu: an event that fires when the right mouse button is clicked on an element to show a context menu

onmouseenter: an event that fires when the mouse pointer enters the bounds of an element(hover)

onmouseleave: an event that fires when the mouse pointer leaves the bounds of an element

onload: an event that fires when the web page or an image has finished loading

onscroll: an event that fires when the user scrolls an element, such as a webpage or a div

onresize: an event that fires when the size of an element, such as the browser window, changes

onfocus: an event that fires when an element gains focus, such as when a user clicks on a text input field

onblur: an event that fires when an element loses focus, such as when 
a user clicks away from a text input field after typing in it

onsubmit: an event that fires when a form is submitted, such as when 
a user clicks the submit button after filling out a form.
*/

//in this we assign the real element to the variable
//so any manipulation at the var will be at the element
let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

//###############################################################################################################

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
//when clicking at submit of the 1st form excute this function
//if any field inpute is false prevent the event from the defaul behavior wich is submiting
document.forms[0].onsubmit = function (event) {
  let userValid = false;
  let ageValid = false;

  //userInput.value it's the value that the user write
  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    event.preventDefault();
  }
};
//test
document.links[0].onclick = function (event) {
  console.log(event); //some info about the event
  event.preventDefault();
};

/*The syntax for addEventListener() method is as follows:

target.addEventListener(type, listener ,[options]);
where:

target: The DOM element to which the event listener will be attached.
type: The type of event to listen for (e.g. "click", "keydown", etc.).
listener: The function that will be called when the event is triggered.
options: An optional object that specifies characteristics about the event listener 
(e.g. whether it should be executed during the capturing or bubbling phase of the event).
For example, the following code adds a click event listener to a button element:
 */
const button = document.querySelector("button");
// we have stopPropagation

// event is a variable that holds the event object for the click event on the list item.(hold target...)
button.addEventListener("click", function (event) {
  console.log("Button clicked!");
  //this here is the button

  setTimeout(function () {
    // this here is the window (the object who contain setTimeout)
  }, 1000);
});

/*
  DOM [Events Simulation]:like making a click or focus automaticly and 
  then make an event based on this simulation event 
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};
//lose focus
one.onblur = function () {
  document.links[0].click();
};

/*
*
  DOM [Class List]
  - classList:show the classes you have

length: Returns the number of classes on the element.

contains(class): Returns a boolean indicating whether the element has a class with the specified name.

item(index): Returns the class name at the specified index as a string. The index is zero-based.

add(class1, class2, ...): Adds one or more classes to the element. 
Each argument is a string representing a class name. If a class already exists, it is not added again.

remove(class1, class2, ...): Removes one or more classes from the element. Each argument
 is a string representing a class name. If a class does not exist, nothing happens.

toggle(class, force): Toggles the presence of a class on the element. If the class exists,
 it is removed. If the class does not exist, it is added. The optional force argument is a boolean. 
 If true, the class is added. If false, the class is removed.
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

/*



  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]  remove from inline code in html not css file
  - setProperty(propertyName, value, priority)
*/
let element = document.getElementById("my-div");

// INLINE Changes
element.style.color = "red"; // one word property
element.style.fontWeight = "bold"; // two or more word must be in camelCase

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9"; // write many properties in one line

element.style.removeProperty("color"); // will remove the color in inline code in html

element.style.setProperty("font-size", "40px", "important"); // sets the fontS property

// CSS FILE Changes
// styleSheets = are the external css sheets you are using so we can get the first one with index 0

// rules = are the elements you are changing their css properties like div {}, .box {} , .class {} in css sheet
document.styleSheets[0].rules[0].style.removeProperty("line-height");

document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

/*



  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

const parent = document.querySelector(".parent");
const child1 = document.createElement("div");
const child2 = document.createElement("div");
//we add a text after the parent (out of it)
//the same process with befor
parent.after("hello");
parent.after(child1);

/*1 - .append()      => accepts Node objects and Strings 
      .appendChild() => accepts only Node objects

2 - .append()      =>  does not have a return value
    .appendChild() =>  returns the appended Node object

2 - .append()      =>  allows you to add multiple items
    .appendChild() =>  appendChild allows only a single item*/

parent.append(child1, child2); //add inside the element and in the last of it
parent.append("haitam");
//same caracteristiques of append , but add at the begining
parent.prepend(child1, child2);

/*
  DOM [Traversing]
  - nextSibling : next element or comment or text 
  - previousSibling:..........
  - nextElementSibling : next elemnt , ignore text and comments
  - previousElementSibling.........
  - parentElement: the parent of the element
*/

/* <div class="parent">
  <h1>Parent Element</h1>
  <p>First child element</p>
  <p>Second child element</p>
</div>; */

{
  const parent = document.querySelector(".parent");

  console.log(parent.firstChild); // #text(empty)
  console.log(parent.firstChild.nextSibling); // <h1>Parent Element</h1>
  console.log(parent.firstChild.nextSibling.nextElementSibling); // <p>First child element</p>

  console.log(parent.lastChild); // #text
  console.log(parent.lastChild.previousSibling); // <p>Second child element</p>
  console.log(parent.lastChild.previousSibling.previousElementSibling); // <p>First child element</p>

  console.log(parent.parentElement); // body

  parent.remove(); //remove the parent
}

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

{
  //take a separated copy of the element where you can do with it what ever you want
  //the default value is false which mean don't take a copy of the content inside the el
  //if we make true it take a copy of all the content
  let myP = document.querySelector("p").cloneNode(true);
  let myDiv = document.querySelector("div");

  //the id must be unique so we change it in the copy
  myP.id = `${myP.id}-clone`;

  myDiv.appendChild(myP);
}

/************************************************************************************
 * 
 
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

{
  let myP = document.querySelector("p");

  myP.onclick = one;
  myP.onclick = two;

  // function one() {
  //   console.log("Message From OnClick 1");
  // }
  // function two() {
  //   console.log("Message From OnClick 2");
  // }

  // window.onload = "Osama";

  // myP.addEventListener("click", function () {
  //   console.log("Message From OnClick 1 Event");
  // });

  //with the addev we can execute to events in one time , we can't do that with the other method
  myP.addEventListener("click", one);
  myP.addEventListener("click", two);

  // myP.addEventListener("click", "String"); // Error

  myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
  };

  let cloned = document.querySelector(".clone");
  //Error you can't execute an event on a cloned element cause it doesn't exist yet
  cloned.onclick = function () {
    console.log("Iam Cloned");
  };

  // event is a variable that holds the event object for the click event on the list item.
  document.addEventListener("click", function (event) {
    //work
    //target means the element you clicked at
    if (event.target.className === "clone") {
      console.log("Iam Cloned");
    }
  });
}
