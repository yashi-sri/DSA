//  var a = 10
// if(true){
//  var a;
//  a= 20
//  console.log(a);
// }
// console.log(a);/////

let arr = [0, 1, 1, 0, 1, 0, 1, 0, 1];
// console.log(arr.sort((a, b) => a - b));

for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000);
}

let promise = new Promise((res, rej) => {
  setTimeout(function () {
    res("2 sec");
  }, 2000);
  setTimeout(function () {
    rej("3 sec");
  }, 3000);
});

promise
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch(function (errorMsg) {
    console.log(errorMsg);
  });
