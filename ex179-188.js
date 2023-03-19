// ex1
fetch("test.json")
  .then((e) => {
    e = e.json();
    console.log(e);
    return e;
  })
  .then((e) => {
    e.length = 5;
    console.log(e);
    return e;
  })
  .then((e) => {
    e.forEach((e) => {
      let div = document.createElement("div");
      div.style.cssText =
        " box-sizing:border-box ; padding:15px ;background-color:#eee ;margin:5px";
      let h3 = document.createElement("h3");
      h3.textContent = e.title;
      let p = document.createElement("p");
      p.textContent = e["description"];
      div.append(h3, p);
      document.body.append(div);
    });
  })
  .catch(() => console.log("error"));

/*the conversion of the keys from "key":value to key:value is done automatically by the JSON.parse() method
 when you call it on a valid JSON string. However, in the code you provided, this step is not necessary 
 because the json() method of the Response object already parses the response body as JSON and returns a JavaScript object.
  So there's no need to call JSON.parse() explicitly in this case. */

//   ex1 V2
async function myF() {
  let myData;
  myData = await fetch("test.json");
  console.log(myData);
  myData = await myData.json();
  console.log(myData);
  myData.forEach((e) => {
    let div = document.createElement("div");
    div.style.cssText =
      " box-sizing:border-box ; padding:15px ;background-color:#eee ;margin:5px";
    let h3 = document.createElement("h3");
    h3.textContent = e.title;
    let p = document.createElement("p");
    p.textContent = e["description"];
    div.append(h3, p);
    document.body.append(div);
  });
}
myF();
