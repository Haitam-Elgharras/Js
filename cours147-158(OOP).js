/*
OOP :JS 
  Constructor Function
*/

function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - New Syntax
*/

{
  class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
    }
  }

  // LIKE C++ the constructor has the name of the class
  let userOne = new User(100, "Elzero", 5000);

  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);

  console.log(userOne instanceof User);
  console.log(userOne.constructor === User);
}

/*
  Constructor Function
  - Deal With Properties And Methods
*/

{
  class User {
    constructor(id, username, salary) {
      // Properties
      this.i = id;
      this.u = username || "Unknown";
      this.s = salary < 6000 ? salary + 500 : salary;
      this.msg = function () {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      };
    }
    // Methods
    writeMsg() {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }

  // a little difference when declaring a variable
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "", 6000);

  console.log(userOne.u);
  console.log(userOne.s);
  console.log(userOne.msg()); //it's a proprety
  console.log(userOne.writeMsg()); //it's a function

  console.log(userTwo.u);
  console.log(userTwo.s);
  console.log(userTwo.msg); // Native Code
  console.log(userTwo.writeMsg); // Native Code
}

/**
 * 
 * 
 * 
 * 
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

{
  class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary;
    }
    updateName(newName) {
      this.u = newName;
    }
  }

  let userOne = new User(100, "Elzero", 5000);

  console.log(userOne.u);
  userOne.updateName("Osama");
  console.log(userOne.u);

  let strOne = "Elzero";
  // built in contructor
  let strTwo = new String("Elzero");

  console.log(typeof strOne); //string
  console.log(typeof strTwo); //object

  console.log(strOne instanceof String); //flase
  console.log(strTwo instanceof String); //true

  console.log(strOne.constructor === String); //true
  console.log(strTwo.constructor === String); //true

  /* it's a little bit advanced to know why the two came from the string contrcutor
   while they are instances of diffrente classes , the same for number */
}

/*
  Class
  - Static Properties And Methods
*/

{
  class User {
    // Static Property: it's only accesible from the class itself
    // if u call it from an object => undefined
    static count = 0;

    // object proprety
    //call it with class => undefined
    count = 0;

    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary;
      User.count++;
    }

    // Static Methods
    static sayHello() {
      return `Hello From Class`;
    }
    static countMembers() {
      // this refer to the class
      return `${this.count} Members Created`;
    }
  }

  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "Ahmed", 5000);
  let userThree = new User(102, "Sayed", 5000);

  console.log(userOne.u);
  console.log(userTwo.u);
  console.log(userOne.count);
  console.log(User.count);
  console.log(User.sayHello());
  console.log(User.countMembers());
}

{
  /*
  Class
  - Inheritance
*/

  // Parent Class
  class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }

  // Derived Class
  class Admin extends User {
    constructor(id, username, permissions) {
      // send the id and usn u recieve to the i and u , there are the attr that admin inherite
      super(id, username);
      /*like
       this.i = id;
      this.u = username;*/
      this.p = permissions;
    }
  }

  class Superman extends Admin {
    constructor(att, username, permissions, ability) {
      super(att, username, permissions);
      this.a = ability;
    }
  }

  let userOne = new User(100, "Elzero");
  let adminOne = new Admin(110, "Mahmoud", 1);

  console.log(userOne.u);
  console.log(userOne.sayHello());
  console.log("####");
  console.log(adminOne.i);
  console.log(adminOne.u);
  console.log(adminOne.p);
  console.log(adminOne.sayHello());
}

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

{
  class User {
    // to declare Private Property
    #e;
    constructor(id, username, eSalary) {
      this.i = id;
      this.u = username;
      this.#e = eSalary;
    }
    getSalary() {
      return parseInt(this.#e);
    }
  }

  let userOne = new User(100, "Elzero", "5000 Gneh");

  console.log(userOne.u);
  console.log(userOne.getSalary() * 0.3);
}
class User1 extends User {
  constructor(id, username, top = "10") {
    super(id, username);
    this.t = top;
  }
  tellMe() {
    //Property '#test' is not accessible outside class 'User' because it has a private identifier
    // console.log(this.#test);
  }
}

/**
 * 
 * 
 * 
 * 
 * 
  Prototype :In JavaScript, every object has a prototype. A prototype is a blueprint object 
  that provides a shared set of properties and methods for other objects to inherit from.
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

{
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);

  console.log(User.prototype);

  //this string can use any method defined in the string constructor
  let strOne = "Elzero";

  console.log(String.prototype);
}

{
  /**
   * 
   * 
   * 
   * 
   * 
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

  class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }

  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);

  // it's adding a method to the contructor
  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };

  Object.prototype.love = "Elzero Web School";

  String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
  };

  let myString = "Elzero";
}

/**
 * 
 * 
 * 
 * 
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1, //all true
  b: 2,
};

//here all the descriptors are true by default
myObject.d = 100;

// here if we don't define the descriptors => false by default
Object.defineProperty(myObject, "c", {
  // can't be modefied
  writable: false,

  // doesn't include in loop at the object elements
  enumerable: true,

  // you can't delete it , you can't redeclare it
  configurable: false,

  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

for (let key in myObject) {
  console.log(key, myObject[key]);
}

console.log(myObject);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

// the diff is we write the key inside
// we can't write myObj={c:{....} } it's considred like a value or obj(obj)
Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));

// ************************************************

//ex5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
// Object.defineProperty(myObj, "score", {
//   writable: false,
//   // enumerable: false,
// });
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    // disappear from the big elements
    enumerable: false,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
