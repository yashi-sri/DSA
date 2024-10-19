// Anagram
const Anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  a = str1.split("").sort().join("");
  b = str2.split("").sort().join("");
  return a == b;
};

console.log(Anagram("cato", "taci"));
// takiikat
