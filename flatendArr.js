const Input = [1, 2, 5, [5, 10, [1, 4, 6]]];
// output -[1,2,5,5,10,1,4,6]

const faltendArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(faltendArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const flatArr = faltendArray(Input);
console.log(flatArr);
