/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";
window.console.log("hi");

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

//exectution after loading the page
// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);

/*



  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

setTimeout(function () {
  console.log("Msg");
}, 3000);

//we call it with sayMsg cause we need the function definition and not call it ()
setTimeout(sayMsg, 3000);

function sayMsg() {
  console.log(`Iam Message`);
}

//we can't write sayMsg(arg1,arg2) cause this will call the function directly
//so we define the args from left to right
setTimeout(sayMsg, 3000, "Osama", 38);

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}
//we must define it (unique ) to call it in clearTimeout
let counter = setTimeout(sayMsg, 3000, "Osama", 38);

let btn = document.querySelector("button");

btn.onclick = function () {
  //the set will not work again
  clearTimeout(counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

{
  //the same as setTimeout the difference is setInterval call the function each time
  setInterval(function () {
    console.log(`Msg`);
  }, 1000);
  //will call it each second
  setInterval(sayMsg, 1000);

  function sayMsg() {
    console.log(`Iam Message`);
  }

  setInterval(sayMsg, 1000, "Osama", 38);

  function sayMsg(user, age) {
    console.log(`Iam Message For ${user} His Age Is: ${age}`);
  }

  let div = document.querySelector("div");

  function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
      //stop the interval
      clearInterval(counter);
    }
  }

  let counter = setInterval(countdown, 1000);
}

/*


  BOM [Browser Object Model]

1/ The location object is part of the Browser Object Model (BOM) 
 and represents the current URL of the browser window.

2/href property is used to get or set the entire URL of the current page.

3/host property is used to get or set the hostname and port number of the URL.

4/hash property is used to get or set the anchor part of the URL after the # symbol.

5/protocol property is used to get or set the protocol of the URL (http, https, ftp, etc.)

6/reload() method is used to reload the current page. It is equivalent to clicking the reload button in the browser.

7/replace() method is used to replace the current page with a new one 
without creating a new entry in the browser's history.

8/assign() method is used to load a new document into the current window. It is similar to setting 
the location.href (also doesn't delete it from history) property, but allows you to navigate to 
a new URL without losing the current page's state in the history stack.
*/

console.log(location);
console.log(location.href);

location.href = "https://google.com";
location.href = "/#sec02";
location.href =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);

console.log(location.hash); //#

/****************************************************************************
 * 
 * 
  BOM [Browser Object Model]
  - open(URL [Opt][what you want to open], Window Name Or Target Attr[_blank][_self] [Opt][as an identifier],
     Win Features [Opt]width height ...], History Replace [Opt(true or false)])
  - close() : close only the windows opened by the open()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
  window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=400,height=400,left=200,top=10"
  );
}, 2000);

/************************************************************************************** */
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*n<0 : will go back with the negatif number
n>0 : go forward 
n=0 : reload */
console.log(history.go(n));

/**************************************************************************************** */
/*
  BOM [Browser Object Model]
  - stop(): stop loading the page in this state
  - print()
  - focus():focus at the new example
  - scrollTo(x, y || Options) : the position will be the same always
  - scroll(x, y || Options): the same as scrollTo (advanced)
  - scrollBy(x, y || Options): scroll relative to the position (always change)
*/

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth",
});

/***************************************************************************************** */
/*

  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]: it returns the value of scroll at X axis(px)
  - scrollY [Alias => PageYOffset] :it returns the value of scroll at Y axis
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/***************************************************************************************** */

/*
  BOM [Browser Object Model]
  all are objects inside the local storage object
--setItem(key, value): This method is used to store a key/value pair
 in local storage. The key and value can be any string.

--getItem(key): This method is used to retrieve a value from local storage using the specified key.
 If the key does not exist, getItem() returns null.

--removeItem(key): This method is used to remove a key/value pair from local storage using the specified key.

--clear(): This method is used to remove all key/value pairs from local storage.

--key(n): This method is used to retrieve the key at the specified index n.
 This can be useful when you want to iterate over all of the keys in local storage.

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
window.localStorage.removeItem("color");

// Remove All
window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

/*****************************************************************************************
 *
 *
 */
// Local Storage Color Application Practice
//mine

red = document.querySelector(".red");
green = document.querySelector(".green");
blue = document.querySelector(".blue");
aqua = document.querySelector(".aqua");
vrBackg = document.querySelector(".vrBackg");
allColors = document.querySelectorAll(".container div");
console.log(vrBackg);
console.log(aqua);

allColors.forEach((element) => {
  element.onclick = function () {
    vrBackg.style.backgroundColor = element.style.backgroundColor;
    window.localStorage.backgroundColor = element.style.backgroundColor;
  };
});
window.onload = function () {
  if (window.localStorage.backgroundColor) {
    vrBackg.style.backgroundColor =
      window.localStorage.getItem("backgroundColor");
  }
};

/* 
  <body>
    <div
      class="container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      "
    >
      <div
        class="red active"
        style="width: 100px; height: 100px; background-color: red"
      ></div>
      <div
        class="green"
        style="width: 100px; height: 100px; background-color: green"
      ></div>
      <div
        class="blue"
        style="width: 100px; height: 100px; background-color: blue"
      ></div>
      <div
        class="aqua"
        style="width: 100px; height: 100px; background-color: aqua"
      ></div>
    </div>
    <div
      class="vrBackg"
      style="
        background-color: red;
        width: 500px;
        height: 400px;
        margin: 50px auto;
      "
    ></div>
  
  </body>
</html>
*/

/***********************************************************************************************************
 * 
 * 
 * 
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session(the sessionStorage will stay)
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
};

/* dataset 
Using just the attribute name data without any additional characters is not a valid attribute name in HTML.
 The data-* attribute is a special HTML attribute that allows you to define custom data attributes for an element. 
 you can name it data-haitam
 To access a custom data-* attribute in JavaScript, you can use the dataset property of the element, like this:

javascript
Copy code
const myDiv = document.getElementById('myDiv');
const fontFamilyValue = myDiv.dataset.f;
myDiv.style.fontFamily = fontFamilyValue;
In this example, we've accessed the data-f attribute of a div element using the dataset property and assigned its value
 to the fontFamilyValue variable. We've then set the fontFamily CSS property of the same div element using the retrieved value.

Note that the property name in JavaScript should match the data-* attribute name, but without the "data-" prefix.
 In this case, we've used f as the attribute name, so we access it as dataset.f in JavaScript.*/
