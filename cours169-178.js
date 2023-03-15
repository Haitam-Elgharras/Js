/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client (articles...)
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

// go to test.json

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key must Be between Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/
/*
{
    "string": "Elzero",
    "number": 100,
    "object": { "EG": "Giza", "KSA": "Riyadh" },
    "array": ["HTML", "CSS", "JS"],
    "boolean": true,
    "null": null
  }
  */

/*
  JSON
  - API Overview :https://api.github.com/users/haitam-elgharras
  - Tools To Test API
  - Preview Github API
*/

// *
// *
/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}'; //response text
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object so we can modify it
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject.Username = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*###########################################################################################################

  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

console.log("1");
console.log("2");
window.alert("Operation");
//this can't be run if the operation before it not finished
console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
// we passe directly to console log and not waiting for operation
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0); //execute last

/*
 even though the time delay passed to setTimeout() is 0, it will still be scheduled to execute after 
 the current execution context completes, which is after the three() function has completed executing.
  */
function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();

/* stack 
  =================================
  console.log("One");
  =================================
  function one() {
    console.log("One");
  }
  =================================
  function two() {
    one();
    console.log("Two");
  }
  =================================
  function three() {
    two();
    console.log("Three");
  }
  =================================
  */

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack :add the function from fifo to lifo
    so it will execute first(in the only stack we have )
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

/*
-Event loop constantly checks if there are any functions waiting in the event queue and adds them to the call stack when it's empty.
 This mechanism allows JavaScript to handle asynchronous operations without blocking the call stack and freezing the browser or application. 
 */
console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");
//one two three four

{
  // there is no probleme here cause the declaration will be add to the stack 1st then the st to the queue when
  //the dec complete the fnct go to the stack ....
  setTimeout(() => {
    console.log(myVar);
  }, 0);

  let myVar = 100;
  myVar += 100;

  // NOTE : also the console is a web API but it's execute sychronously
}
// ###############################################################################################################

/* Rendering refers to the process of taking the HTML, CSS, and JavaScript code of a web page 
and converting it into a visual representation that can be displayed on the user's screen.

Rendering never happens while the engine executes a task. It doesn’t matter if the task takes a long time.
 Changes to the DOM are painted only after the task is complete.

 ***chunking to break up long-running tasks into smaller pieces that can be executed without blocking rendering.
 */

//  ################################################################################################################################
/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*

  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is here
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);

  //200 means the response is correct

  // we should always verify these two conditions to be sure that the response is here
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
