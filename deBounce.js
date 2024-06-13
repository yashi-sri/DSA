function chunk(arr, size) {
  let result = [];
  let Ans = [];
  for (let i = 0; i < arr.length; i++) {
    Ans.push(arr[i]);
    if (Ans.length === size || i === arr.length - 1) {
      result.push([...Ans]);
      Ans.length = 0;
    }
  }

  //   console.log(result);
  return result;
}

chunk([1, 2, 3, 4, 5], 1);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5], 3);

function Debounce(searchFn, delay) {
  let id;
  let first = true;
  return function optimisedFn(...args) {
    if (first) {
      searchFn(...args);
      first = false;
    } else {
      clearTimeout(id);
      id = setTimeout(() => {
        searchFn(...args);
      }, delay);
    }
  };
}

function print(data) {
  console.log(data);
}

let printOtimised = Debounce(print, 1000);

// printOtimised("i");
// printOtimised("ip");
// printOtimised("iph");

const counter = (() => {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
    return count;
  }
  inner.reset = function () {
    count = 0;
  };

  return inner;
})();

counter();
counter.reset();
counter();
