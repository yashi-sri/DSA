// iffe function sahi hai
// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

// 2  hoisting
x = 10;
console.log(x);
let x;

//3 timeout sahi hai

// function hello() {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   });
//   console.log("3");
// }
// hello();

//4 factorial sahi hai
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(10)
// );

// 5  log question
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " Result1=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " Result2=" + arr2.slice(-1));

// 6 reverse string using reverse method
let str = "floccinaucinihilipilification";
// console.log(str.split("").reverse().join(""));

userCollection = {
  name: "John",
  id: 1,
};

post = {
  user: userId,
};

postModel.find().populate("user", "name id");
