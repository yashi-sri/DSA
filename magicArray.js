function findMagicArray(arr) {
  let magicArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    magicArr.push(count);
  }
  return magicArr;
}

const magicArr = findMagicArray([5, 1, 3, 4, 2]);
console.log(...magicArr);
