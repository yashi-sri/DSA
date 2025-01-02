function poly(callback, thisArg) {
  let result = new Array();

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return result;
}

function customMap(array, callback) {
  const result = [];
  array.forEach(function (element, index, arr) {
    result.push(callback(element, index, arr));
  });
  return result;
}
