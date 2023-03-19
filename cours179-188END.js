/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

// best example for callback hell
setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State ****
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success , Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

/*The then method of a Promise object accepts two parameters:

The first parameter is a function that will be executed if the Promise is resolved successfully, 
with the resolved value passed as the argument to the function.

The second parameter is an optional function that will be executed if the Promise is rejected, 
with the rejection reason passed as the argument to the function.

Both functions return a new Promise object, which allows for chaining multiple then methods together. */

{
  const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = [];
    if (employees.length === 4) {
      resolveFunction(employees);
    } else {
      //we write error cause it indicate the line of the error
      rejectFunction(Error("Number Of Employees Is Not 4"));
    }
  });

  myPromise
    .then((resolveValue) => {
      resolveValue.length = 2;
      //will return it to the next then
      return resolveValue;
    })
    .then((resolveValue) => {
      resolveValue.length = 1;
      //will return it to the next then
      return resolveValue;
    })
    .then((resolveValue) => {
      console.log(`The Choosen Emplyee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done"));
  //will write before the catch
  /*The finally() method is always executed, regardless of whether there was an error or not,
   and it does not receive any arguments. On the other hand, the catch() method is executed 
   only when there is an error, and it receives the rejected reason as an argument. */

  // this will write after the catch cause the function will be in the queue
  // .finally(() => console.log("The Operation Is Done"));
  /*Yes, that's correct. When a promise settles, it puts the handlers in a microtask queue, which is processed 
  after the current task is finished. The finally() handler is also put in this queue, and it will execute after the previous
   handlers (then() or catch()) have finished executing. Therefore, even if there is an error and the promise is rejected,
    the finally() handler will still execute after the rejection handler (catch()) has finished executing. */
}

/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        /*when the promise is resolved with resolve(JSON.parse(this.responseText)), the resolved value,
         which is the parsed JSON data, is sent to the first then() method. The then() method returns a new promise,
          which can be used to chain multiple then() methods. */
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json(); // return a promise
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//   ##########################################################################################################

/*
  Promise
  - All : if all the promises are fulfilled it return a table of the returned values , rejected when meeting the 1st rejected
  - All Settled : return a table of object of all promises [{status:.. value}] even if some of them rejected 
  - Race: return the value of the first promise executed
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
// ######################################################################################################

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// we can use promises like this in a clean way
function getData() {
  let users = ["Osama"];
  if (users.length > 0) {
    return Promise.resolve("Users Found");
  } else {
    return Promise.reject("No Users Found");
  }
}

/* or we can use promises like this in a clean way just by 
adding async this will make the function returns a promise (but async not identical with promise) */
async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript code after it  Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
  
  *Wait for a Promise to resolve or reject before executing the next line of code.
  *Capture the resolved value of a Promise and use it in the next line of code.
  *Capture any errors that occur during Promise execution and handle them in a catch block.
  *Chain multiple asynchronous operations in a more readable and sequential manner.
*/

{
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Iam The Good Promise");
      reject(Error("Iam The Bad Promise"));
    }, 3000);
  });

  async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue));
    // console.log(await myPromise);
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
  }

  readData();
}

{
  /*
  Async & Await With Try, Catch, Finally
*/

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Iam The Good Promise");
    }, 3000);
  });

  // async function readData() {
  //   console.log("Before Promise");
  //   try {
  //     console.log(await myPromise);
  //   } catch (reason) {
  //     console.log(`Reason: ${reason}`);
  //   } finally {
  //     console.log("After Promise");
  //   }
  // }

  // readData();

  // "https://api.github.com/users/elzerowebschool/repos"

  async function fetchData() {
    console.log("Before Fetch");
    try {
      let myData = await fetch(
        "https://api.github.com/users/elzerowebschool/repos"
      );
      console.log(await myData.json());
    } catch (reason) {
      console.log(`Reason: ${reason}`);
    } finally {
      console.log("After Fetch");
    }
  }

  fetchData();
}
