// Anagram
const Anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  a = str1.split("").sort().join("");
  b = str2.split("").sort().join("");
  return a == b;
};

// console.log(Anagram("cato", "taci"));
// takiikat

const arr = [
  { name: "kmm", jei: "jeee" },
  { name: "kam", jei: "jeee" },
  [{ name: "yip", jei: "j" }],
];

delete arr.jei;
console.log(arr);

for (let item of arr) {
}

function deepCopyArray(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopyArray(item) : item));
}

const originalArray = [
  [1, 2, 3],
  [4, [5, 6], 7],
  [8, 9, [10, [11, 12]]],
];

// Perform a deep copy using map and recursion
const deepCopy = deepCopyArray(originalArray);

// Modify the original array
originalArray[1][1][0] = 99; // Change value inside a nested array

console.log("Original Array:", originalArray);
console.log("Deep Copy Array:", deepCopy);
// -------------------

// const originalArray = [1, 2, 3, [4, 5]];

// // Create a shallow copy using the spread operator
// const shallowCopy = [...originalArray];

// // Modify the original array
// originalArray[3][0] = 99; // Modify a nested array element

// console.log("Original Array:", originalArray);
// console.log("Shallow Copy Array:", shallowCopy);
