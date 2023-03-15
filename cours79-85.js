/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/
//creat an object
{
  let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
      return `Hello`;
    },
  };

  console.log(user.theName);
  console.log(user.theAge);
  console.log(user.sayHello());
}

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  Bracket Notation : c'est le nom n'est pas standard tq number or my-Var or my Var
  - Dynamic Property Name
*/

{
  let myVar = "country";

  let user = {
    theName: "Osama",
    country: "Egypt",
  };

  console.log(user.theName);
  console.log(user.country); // user.country
  console.log(user.myVar); // user.country(undefined)
  console.log(user[myVar]); // user.country
}

// pour passer sur toutes les att d'un obj
for (attr in user) {
  console.log(user.attr);
}

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

//#############Nested Object And Advanced Examples
/*
  Object
  - Nested Object And Trainings
*/

{
  let available = true;

  let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
      ksa: "Riyadh",
      egypt: {
        one: "Cairo",
        two: "Giza",
      },
    },
    checkAv: function () {
      if (user.available === true) {
        return `Free For Work`;
      } else {
        return `Not Free`;
      }
    },
  };

  console.log(user.name);
  console.log(user.age);
  console.log(user.skills);
  console.log(user.skills.join(" | "));
  console.log(user.skills[2]); // Access With Index
  console.log(user.addresses.ksa);
  console.log(user.addresses.egypt.one);
  console.log(user["addresses"].egypt.one);
  console.log(user["addresses"]["egypt"]);
  console.log(user["addresses"]["egypt"]["one"]);

  console.log(user.checkAv());
}

/*
  Object
  - Create With New Keyword new Object();
*/

{
  let user = new Object();
  /*also   let user = new Object(
    {
    age: 20,
    ..
}
);
*/
  console.log(user);
  user.age = 38;
  user["country"] = "Egypt";

  user.sayHello = function () {
    return `Hello`;
  };

  console.log(user);
  console.log(user.age);
  console.log(user.country);
  console.log(user.sayHello());
}

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

{
  console.log(this);
  console.log(this === window);

  myVar = 100;

  console.log(window.myVar);
  console.log(this.myVar);

  function sayHello() {
    console.log(this);
    return this;
  }
  sayHello();

  console.log(sayHello() === window);

  document.getElementById("cl").onclick = function () {
    console.log(this);
  };

  let user = {
    age: 38,
    ageInDays: function () {
      console.log(this);
      //this refers to the caller of the method
      return this.age * 365;
    },
  };

  console.log(user.age);
  //always use ageInDays() with brakest when working at methods
  console.log(user.ageInDays());
}

/*In strict mode JavaScript, the "this" keyword behaves differently compared to non-strict mode.
 In non-strict mode, if "this" is used outside of any function, it refers to the global object 
 (e.g., window in a browser or global in Node.js).
  However, in strict mode, if "this" is used outside of any function, it will be undefined.

Inside a function, the value of "this" in strict mode depends on how the function is called.
 If the function is called as a method of an object, "this" will refer to that object. 
 If the function is called as a function, "this" will be undefined.

Here's an example to illustrate the difference in behavior between strict and non-strict mode:
*/

("use strict"); //activate strict mode
function myFunction() {
  console.log(this);
}

console.log(this); // undefined

myFunction(); // undefined

const myObject = {
  myMethod: function () {
    console.log(this);
  },
};
myObject.myMethod(); // myObject both in s and ns
/*


In the example above, when "this" is used outside of any function, it's undefined in strict mode,
 but it refers to the global object in non-strict mode. When "myFunction" is called,
 "this" is undefined in strict mode, but it refers to the global object in non-strict mode.
When "myMethod" is called as a method of "myObject", "this" refers to "myObject" in both strict and non-strict mode. */

// #################################################################################################################""

/*
  Object
  - Create Object With Create Method
*/

{
  let user = {
    age: 20,
    doubleAge: function () {
      /*when we use this if this function is called by another object that was
created by the Object.create(obj to inherit from) the function will work with the propreties 
of the new obj , in other case the user.age will also work with the age in the user Obj */
      return this.age * 2;
    },
  };

  console.log(user);
  console.log(user.age);
  console.log(user.doubleAge());

  let obj = Object.create({});

  obj.a = 100;

  console.log(obj);

  let copyObj = Object.create(user);

  copyObj.age = 50;

  console.log(copyObj);
  console.log(copyObj.age);
  console.log(copyObj.doubleAge());
}
//############################################################################################################
/*In JavaScript, the Object.assign() method is used to copy the values of all enumerable properties
 from one or more source objects to a target object, and return the target object.
  This method can also be used to create a new object by copying properties from one or more source objects.*/
/*
  Object
  - Create Object With Assign Method
*/
{
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const obj3 = { c: 3 };
  //target object is empty
  const newObj = Object.assign({}, obj1, obj2, obj3);
  console.log(newObj); // { a: 1, b: 2, c: 3 }
}

// Define an object with a property prop1 set to 1 and a method meth1 that returns
//the value of prop1 when called with the this keyword
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

// Define an object with a property prop2 set to 2 and a method meth2 that returns
//the value of prop2 when called with the this keyword
let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

// Define an object with a property prop1 set to 100 and a property prop3 set to 3
let targetObject = {
  prop1: 100,
  prop3: 3,
};

// Merge the properties of targetObject, obj1, and obj2 into a new object called finalObject
let finalObject = Object.assign(targetObject, obj1, obj2);

// Modify the prop1 property of finalObject to 200
finalObject.prop1 = 200;

// Add a new property prop4 set to 4 to finalObject
finalObject.prop4 = 4;

// Log the contents of finalObject to the console
console.log(finalObject);
