function abc(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
const debounceFunc = abc(() => {
  console.log("debounce Abc call");
}, 500);
debounceFunc();
