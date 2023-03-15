// ex1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    console.log("Car Is Running Now");
  }
  stop() {
    console.log("Car Is Stopped");
  }
}

let carOne = new Car("audi", "2020", "30000$");
let carTwo = new Car("audi", "2021", "30000$");
let carThree = new Car("audi", "2022", "30000$");

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);

carOne.run();

// ex2**********
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size = "Unknown") {
    super(name, serial, price);
    this.size = size;
  }
  fullDetails() {
    return `${this.name} serial is ${this.serial} and size if ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// ex3******************* important rgx **************************
// Edit The Class
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  showData() {
    const formattedCard = this.#c.toString().replace(/\d{4}(?=\d)/g, "$&-");
    // d{4}(?=\d) it's like separate each 4 number and returning 4n with the '-'
    return `Hello ${this.u} Your Credit Card Number Is ${formattedCard}`;
  }
  /*\d{4}: matches any sequence of four consecutive digits.
  (?=.): a positive lookahead assertion which means that the preceding pattern 
  should match any digit that is followed by any character. 
  
  The replace method uses the $& symbol to represent the entire matched substring,*/
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// ***************************************************

//ex4

// Write Your Code Here

// Do Not Edit Below
let myStr = "Elzero";
// the prototype is for classes and built in Object
String.prototype.addLove = function () {
  return `I Love Elzero Web School`;
};
console.log(myStr.addLove()); // I Love Elzero Web School
