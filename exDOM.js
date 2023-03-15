//ex1
console.log(document.querySelectorAll("[name='js']"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("div"));
console.log(document.querySelector("div.element"));
console.log(document.querySelectorAll("div"));
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByName("js"));
console.log(document.body.firstElementChild);

//ex2
/* <div>
      <img decoding="async" src="#" alt="" />
    </div> *20 */
let newSrc =
  "https://i.pinimg.com/236x/1c/fa/3f/1cfa3f7fdaddaf74bb2861d7c598c7d1.jpg";
let newAlt = "gone pic";
let number = document.images.length;
let images = document.images;
document.body.style.display = "flex";
document.body.style.flexWrap = "wrap";
for (let i = 0; i < number; i++) {
  images[i].setAttribute("src", newSrc);
  //two ways
  // images[i].src = newSrc;
  images[i].alt = newAlt;
}

//###############################################

//ex3 very important
{
  /* <form action="">
    <input type="number" name="dollar" placeholder="USD Dollar" />
    <div class="result">
      {0} USD Dollar = {0} Egyptian Pound
    </div>
  </form>; */
}

let form = document.forms[0];
let myInput = document.querySelector("[type='number']");
let myDiv = document.getElementsByClassName("result")[0];
/*In the case of an input element, when a user types something into the input field,
   an "input" event is triggered. The event object that is created when this event occurs
    has a target property that points to the input element, and the value of this input element
     can be accessed using the target.value property.
  
  So, event.target.value is the value that the user has entered into an input element that triggered
   the event, and it can be accessed using the target.value property of the event object. */
myInput.addEventListener("input", function (event) {
  // type: The type of event to listen for (e.g. "click", "keydown", etc.).
  let dollarValue = event.target.value;
  const exchangeRate = 15.6;
  let egyPounds = dollarValue * exchangeRate;
  egyPounds = egyPounds.toFixed(2);
  //  textContent to change the text content of the div it's the best way
  //if we use appendChild all the text will be at the page
  myDiv.textContent = `${dollarValue} USD Dollar = ${egyPounds} Egyptian Pound`;
});

//easy method
let input = document.querySelector("input");
let result = document.querySelector(".result");

input.oninput = function () {
  result.innerHTML = `{${input.value}} USD Dollar = {${(
    input.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
};

//ex 4
let mySt = document.querySelector(".one");
let myNd = document.querySelector(".two");
let tmpSt = mySt.getAttribute("title");
let tmpNd = myNd.getAttribute("title");
let contentSt = mySt.innerHTML;
let contentNd = myNd.innerHTML;
myNd.setAttribute("title", tmpSt);
mySt.setAttribute("title", tmpNd);
myNd.textContent = contentSt;
mySt.textContent = contentNd;

//other method
let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");

elOne.title = elOne.className;
elTwo.title = elTwo.className;
elOne.textContent = elOne.className.toUpperCase();
elTwo.textContent = `${elTwo.className.toUpperCase()} ${
  elTwo.attributes.length
}`;

//ex5
{
  let images = document.images;

  for (let i = 0; i < images.length; i++) {
    if (images[i].hasAttribute("alt")) {
      images[i].alt = "old";
    } else {
      images[i].alt = "New";
    }
  }
}

//ex6
{
  let myForm = document.forms[0];
  let number = document.querySelector('[type="number"]');
  let text = document.querySelector('[ type="text"]');
  let result = document.querySelector(".results");
  let element = document.querySelector("select");

  // console.log(result);
  myForm.onsubmit = function (event) {
    //make the div empty
    result.innerHTML = "";
    /*it's a best practice to call preventDefault() as soon as possible in the event listener function 
  to make sure that it is executed before any other code that could cause the form to submit. */
    console.log(+number.value);

    event.preventDefault();
    for (let i = 0; i < +number.value; i++) {
      let myElement = document.createElement(element.value);
      console.log(myElement);
      //we can't assigne the createTextNode to the text content
      myElement.textContent = text.value; //here
      myElement.setAttribute(
        "style",
        "padding:10px;background-color:red;margin:10px auto;"
      );
      myElement.setAttribute("class", "box");
      myElement.setAttribute("title", "Element");
      myElement.setAttribute("id", `id-${i + 1}`);
      console.log(myElement);
      result.appendChild(myElement);
    }
  };
}

// ****************************************************************************
//94-101
//ex1

/* <script> */

window.onload = function () {
  let ar = document.querySelectorAll("a");
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].classList.contains("open") && ar[i].textContent == "Elzero") {
      ar[i].click();
    }
  }
};
{
  /* </script>
</head>
<body>
<a class="open" href="https://google.com">Google</a>
<a class="open" href="https://elzero.org">Elzero</a>
<a class="not" href="https://facebook.com">Facebook</a>
<a class="linked" href="https://linkedin.com">Elzero</a>
<!-- <script src="main.js"></script> -->
</body> */
}

// ************************************************************************************
//ex2

{
  let mainDev = document.querySelector(".assign");
  let addC = document.querySelector(".classes-to-add");
  let deleteC = document.querySelector(".classes-to-remove");
  let current = document.querySelector(".element.current");
  let classL = document.querySelector(".classes-list");
  let result = document.querySelector(".classes-list div");
  console.log(addC);
  // addC.onblur=function
  addC.onblur = function () {
    console.log(addC.value);
    let newDiv = document.createElement("div");
    newDiv.className = addC.value;
    newDiv.textContent = addC.value;
    newDiv.style = "        background-color: #ff5722";
    console.log(newDiv);
    result.append(newDiv);
    addC.value = "";
  };
  deleteC.onblur = function () {
    newEl = document.querySelector(".classes-list div ." + deleteC.value);
    console.log(newEl);
    newEl.remove();
    deleteC.value = "";
  };
}

/*
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      .assign {
        text-align: center;
        padding-top: 20px;
      }
      .assign input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ddd;
      }
      .assign input:focus {
        outline: none;
        border-color: #ccc;
      }
      .assign [title="Current"] {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list h5 {
        margin: 0 0 10px;
        text-align: left;
      }
      .assign .classes-list div {
        padding: 10px;
        margin-right: 5px;
        border-radius: 6px;
        color: white;
        display: flex;
        width: fit-content;
        gap: 20px;
      }
    </style>
  </head>
  <body>
    <div class="assign">
      <input type="text" class="classes-to-add" placeholder="Add Classes" />
      <input
        type="text"
        class="classes-to-remove"
        placeholder="Remove Classes"
      />
      <div class="element current" title="Current">Current Element</div>
      <div class="classes-list">
        <h5>Current Element Class Lists</h5>
        <div></div>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>
 */

// ***********************************************************
// ex3
{
  let supP = document.querySelector("p");
  console.log(supP);
  supP.remove();
  let myDiv = document.querySelector(".our-element");
  let newBefore = document.createElement("div");
  newBefore.setAttribute("title", "start element");
  newBefore.setAttribute("class", "start");
  newBefore.setAttribute("data-value", "start");
  newBefore.textContent = "start";

  myDiv.before(newBefore);
  let newAfter = document.createElement("div");
  newAfter.setAttribute("title", "end element");
  newAfter.setAttribute("class", "end");
  newAfter.setAttribute("data-value", "end");
  newAfter.textContent = "end";
  myDiv.after(newAfter);
}

/************************************************ */
// ex5;
const elements = document.querySelectorAll("div, span, p, article, section");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(`This Is ${element.tagName}`);
  });
});
