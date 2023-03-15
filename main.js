fetch("https://elgharras.123.ma")
  .then((result) => {
    myData = result.json();
    myTitle = myData.title;
    console.log(myTitle);
  })
  .catch((error) => error);
