// const obj = {
//   id: "1",
//   name: "John",
//   age: 30,
// };
// // obj.subject = "hindi";
// let key = "subject";
// obj[`${key}`] = "hindi";
// console.log(obj);

let arr = [1, 1, 12, 3, 4, 5, 7, 5, 3, 6, 3];
// let NewArray = [...new Set(arr)].sort((a, b) => a - b);
// console.log(NewArray);

// let arr2 = [];
// unqiue value using includes
// function unique(arr) {
//   arr.filter((item) => {
//     if (!arr2.includes(item)) {
//       arr2.push(item);
//     }
//   });
// }

//unique array using for loops
// function unique(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isunqiue = true;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr[i] == arr[j]) {
//         isunqiue = false;
//         break;
//       }
//     }
//     if (isunqiue) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(unique(arr));

//Sorting
// function BubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp;
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// BubbleSort(arr);
// console.log(arr);

// charter count
let str = "sameer is badd boy";

let counts = {};

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") continue; // ignore spaces
  if (counts[`${str[i]}`]) {
    counts[`${str[i]}`] = counts[`${str[i]}`] + 1;
  } else {
    counts[`${str[i]}`] = 1;
  }
}
console.log(counts);

let data = {
  todo: [{ id: "1", title: "gdh", category: "todo" }],
  progress: [{ id: "1", title: "gdh", category: "progress" }],
  done: [{ id: "1", title: "gdh", category: "done" }],
};
