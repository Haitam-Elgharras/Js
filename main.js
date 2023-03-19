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
