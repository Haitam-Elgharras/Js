// ex1
let promptMsg = prompt("write from", "5-15");

promptMsg = promptMsg.split("-").sort((a, b) => a - b);
let i = 0;
promptMsg.map((e) => {
  let div = document.createElement("div");
  div.textContent = e;
  document.body.append(div);
});

console.log(promptMsg);

//111-114

// ex1;
div = document.querySelector("div");
fontNames = document.querySelector("#fontNames");
colors = document.querySelector("#colors");
fontSize = document.querySelector("#fontSize");

colors.onchange = function () {
  div.style.color = colors.value;
  window.localStorage.color = colors.value;
};
fontSize.onchange = function () {
  div.style.fontSize = fontSize.value;
  window.localStorage.fontSize = fontSize.value;
};
fontNames.onchange = function () {
  div.style.fontFamily = fontNames.value;
  window.localStorage.fontFamily = fontNames.value;
};

div.style.color = window.localStorage.color;
div.style.fontFamily = window.localStorage.fontFamily;
div.style.fontSize = window.localStorage.fontSize;
//regler le problem du premier entrer
// window.localStorage.clear();
// if (
//   window.localStorage.fontFamily ||
//   window.localStorage.fontSize ||
//   window.localStorage.color
// ) {
//   console.log("here");
// }
// window.localStorage.clear();

/* <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@800&family=Open+Sans:wght@800&family=Roboto:wght@900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <select name="fontNames" id="fontNames">
      <option value="'Open Sans'" id="open" data="'Open Sans'" selected>
        open
      </option>
      <option value="cairo" id="cairo">cairo</option>
      <option value="roboto" id="roboto" data-f="roboto">roboto</option>
    </select>
    <select name="colors" id="colors">
      <option value="blue" id="blue" selected>blue</option>
      <option value="red" id="red">red</option>
      <option value="aqua" id="aqua">aqua</option>
      <option value="green" id="green">green</option>
      <option value="yellow" id="yellow">yellow</option>
      <option value="orangered" id="orangered">orangered</option>
    </select>

    <select name="fontSize" id="fontSize">
      <option value="16px" selected>16</option>
      <option value="17px">17</option>
      <option value="18px">18</option>
      <option value="19px">19</option>
      <option value="20px">20</option>
      <option value="21px">21</option>
      <option value="22px">22</option>
      <option value="23px">23</option>
      <option value="24px">24</option>
      <option value="25px">25</option>
      <option value="26px">26</option>
      <option value="27px">27</option>
      <option value="28px">28</option>
      <option value="29px">29</option>
      <option value="30px">30</option>
    </select>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
      veritatis voluptatem eveniet, id laboriosam odio, vitae nesciunt esse,
      tenetur voluptatibus cumque. Qui blanditiis dicta eaque harum ipsum culpa
      modi fugiat. Optio excepturi expedita quisquam aliquam adipisci totam
      tenetur, recusandae quibusdam illo ipsa ducimus molestiae accusamus minima
      ipsam consequatur eum reiciendis. Pariatur cupiditate impedit asperiores
      doloremque harum nostrum mollitia libero ad!
    </div>

    <script src="main.js"></script> */

/**
 *
 *
 *
 * EX2 */
// window.onload = function () {
//   radio = document.querySelector("#radio");

// };
radio = document.querySelector('input[name="myRadio"]');
text = document.querySelector("#text");
pass = document.querySelector("#pass");
fixed = document.querySelector("#fixed");
if (window.sessionStorage.text) {
  text.value = window.sessionStorage.text;
}
text.onchange = function () {
  window.sessionStorage.text = text.value;
};
if (window.sessionStorage.fixed) {
  fixed.value = window.sessionStorage.fixed;
}
fixed.onchange = function () {
  window.sessionStorage.fixed = fixed.value;
};
if (window.sessionStorage.radio) {
  radio.value = window.sessionStorage.radio;
}
radio.onchange = function () {
  window.sessionStorage.radio = radio.value;
};
if (window.sessionStorage.pass) {
  pass.value = window.sessionStorage.pass;
}
pass.onchange = function () {
  window.sessionStorage.pass = pass.value;
};

// console.log(radio.value);

<form action="">
  <label for="fixed">fixed value</label>
  <select name="" id="fixed">
    <option value="first">first</option>
    <option value="second">second</option>
    <option value="haitam">haitam</option>
  </select>
  <label for="text">text</label>
  <input type="text" id="text" />
  <label for="pass">pass</label>
  <input type="password" id="pass" />
  <label>
    <input type="radio" name="myRadio" value="option1" checked />
    Option 1
  </label>
  <label>
    <input type="radio" name="myRadio" value="option2" />
    Option 2
  </label>
</form>;
