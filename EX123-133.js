// ex1
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);
// ex2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"].sort();
console.log([...new Set(myFriends)].sort());

// EX3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
// Object.values(myInfo)[i] return the values of each key
map = new Map();
for (let i = 0; i < Object.keys(myInfo).length; i++) {
  map.set(Object.keys(myInfo)[i], Object.values(myInfo)[i]);
}
// or simply
// Object.keys(myInfo).forEach((key) => map.set(key, myInfo[key]));

// or

// Object.keys(myInfo).forEach(function (key) {
//     map.set(key, this[key]);
//   }, myInfo);
console.log(map);
console.log(map.size);
console.log(map.has("role"));

// EX4
let theNumber = 100020003000;

console.log(
  +[...new Set([...theNumber.toString()].filter((n) => n != 0))].join("")
);

// EX6 challenge
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let nb = 0;
chars.forEach(function (e, i, arr) {
  if (typeof e == "number") {
    arr.unshift(e);
    arr.splice(i + 1, 1);
    nb++;
  }
});

for (let i = nb; i < nb + nb; i++) {
  chars[i - nb] = chars[i];
}
console.log(chars);
//**************** */

// or using sort : wrong we can't use sort cause the elements must stay in the given order
{
  let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
  let nb = 0,
    i = 0;
  chars.sort();
  while (typeof chars[i] == "number") {
    nb++;
    i++;
  }
  for (let i = nb; i < nb + nb; i++) {
    chars[i - nb] = chars[i];
  }
  console.log(chars);
}

// EX7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log([...new Set([...numsOne, ...numsTwo])]);
numsOne.push(...numsTwo);
console.log(numsOne);
// Needed Output
// [1, 2, 3, 4, 5, 6]

// EX8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);

/*leet code ex */
var threeSum = function (nums) {
  let bigT = [];

  if (nums.every((e) => e == 0)) {
    bigT.push([0, 0, 0]);
    return bigT;
  } else {
    nums.forEach(function (n, i, arr) {
      arr.forEach(function (e, j) {
        if (n + arr[i + 1 + j] + arr[i + 2 + j] == 0) {
          let newT = [n, arr[i + 1 + j], arr[i + 2 + j]];
          let test = false;
          for (let i = 0; i < bigT.length; i++) {
            if (
              bigT[i].includes(newT[0]) &&
              bigT[i].includes(newT[1]) &&
              bigT[i].includes(newT[2])
            ) {
              test = true;
              break;
            }
          }
          if (test == false) bigT.push(newT);
        }
      });
    });
  }

  return bigT;
};

console.log(threeSum([-1, 0, 1, -1]));

/*var threeSum = function (nums) {
  let bigT = [];

  if (nums.every((e) => e == 0)) {
    bigT.push([0, 0, 0]);
    return bigT;
  } else {
    nums.forEach(function (n, i, arr) {
      arr.forEach(function (e, j) {
        arr.forEach(function (r, p) {
          if (n + arr[i + j + 1] + arr[i + 2 + p] == 0) {
            let newT = [n, arr[i + 1 + j], arr[i + 2 + p]];

            let test = false;
            for (let i = 0; i < bigT.length; i++) {
              if (
                bigT[i].includes(newT[0]) &&
                bigT[i].includes(newT[1]) &&
                bigT[i].includes(newT[2])
              ) {
                test = true;
                break;
              }
            }
            if (test == false) bigT.push(newT);
          }
        });
      });
    });
  }

  return bigT;
};

console.log(threeSum([1, 2, -2, -1]));
 */
