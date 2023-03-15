// EX2
let myArticles = new XMLHttpRequest();

myArticles.open("GET", "articles.json");
myArticles.send();

myArticles.onreadystatechange = function () {
  if (myArticles.readyState == 4 && myArticles.status == 200) {
    console.log(myArticles.responseText);
    console.log(myArticles.readyState);
    console.log(myArticles.status);
    console.log("Data Loaded");
  }
};

// and this doesn't work let myArticles = new XMLHttpRequest();

/*myArticles.open("GET", "articles.json");
myArticles.send();

if (myArticles.readyState == 4 && myArticles.status == 200) {
  console.log(myArticles.responseText);
} else console.log("error");
console.log(myArticles.readyState);
console.log(myArticles.status);*/

// explaination;
/*The first solution works because the onreadystatechange function is triggered when the state of the XMLHttpRequest object changes. In this case, the function is only executed when the state is equal to 4 (the operation is complete) and the status is equal to 200 (the request was successful).

The second solution does not work because the if statement that checks the state and status of the XMLHttpRequest object
 is executed immediately after sending the request. At this point, the readyState is likely still less than 4 and 
 the status may not have been set yet. Therefore, the code inside the if statement does not get executed and the output 
 will always be "error". The console.log statements that follow also do not give any useful information because 
 they are executed immediately after sending the request, before the response is received. */

// ###########################################################################################

//  ex3

let myArticles = new XMLHttpRequest();

myArticles.open("GET", "articles.json");
myArticles.send();

myArticles.onreadystatechange = function () {
  if (myArticles.readyState == 4 && myArticles.status == 200) {
    console.log("the JSON object before updating \n");
    console.log(myArticles.responseText);

    mainData = JSON.parse(myArticles.responseText);
    mainData.map((e) => {
      e.category = "All";
    });
    console.log("the Js object is \n");
    console.log(mainData);

    updatedData = JSON.stringify(mainData);
    console.log("the JSON object after updating \n");
    console.log(updatedData);
  }
};
// ###########################################################################################

//  ex4
let myArticles = new XMLHttpRequest();

myArticles.open("GET", "articles.json");
myArticles.send();

myArticles.onreadystatechange = function () {
  if (myArticles.readyState == 4 && myArticles.status == 200) {
    mainData = JSON.parse(myArticles.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.className = "data";
    mainData.map((e) => {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.textContent = e.title;
      let pAr = document.createElement("p");
      pAr.textContent = e.content;
      let pAu = document.createElement("p");
      pAu.textContent = "author name : " + e.author;
      let pCa = document.createElement("p");
      pCa.textContent = "Category: " + e.category;
      div.append(h2, pAu, pCa, pAr);
      mainDiv.append(div);
    });
    console.log(mainDiv);
    document.body.append(mainDiv);
  }
};
