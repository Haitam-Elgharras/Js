// ex1 Create Your Object Here
let member = {
  name: "elzero",
  age: 38,
  country: "egypt",
  fullDetails: function () {
    return `my name is ${this.name}, my age is ${this.age}, I live in ${this.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// ########################################################################################################################

/**object challenege */
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
//this will calculate how direct nested object we have
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  //this for the name of each direct nested obj
  let gameName = Object.keys(myFavGames)[i];
  console.log(`The Game Name Is ${gameName}`);
  //here is the use of [] to get propreties inside an obj
  console.log(`The Publisher Is ${myFavGames[gameName].publisher}`);
  console.log(`The Price Is ${myFavGames[gameName].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[gameName].bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[gameName].bestThree.one}`);
    console.log(`Second => ${myFavGames[gameName].bestThree.two}`);
    console.log(`Third => ${myFavGames[gameName].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Output:
// The Game Name Is Trinity Universe
// The Publisher Is NIS America
// The Price Is 40
// ####################
// The Game Name Is Titan Quest
// The Publisher Is THQ
// The Price Is 50
// - Game Has Releases
// First => Immortal Throne
// Second => Ragnarök
// Third => Atlantis
// ####################
// The Game Name Is YS
// The Publisher Is Falcom
// The Price Is 40
// - Game Has Releases
// First => Oath in Felghana
// Second => Ark Of Napishtim
// Third => origin
// ####################
