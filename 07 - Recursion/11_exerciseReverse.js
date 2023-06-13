function reverse(str) {
  let splitted = splitter(str);
  let rev = reversal(splitted);
  return joinArr(rev);

  function splitter(string) {
    return string.split("");
  }
  function reversal(splitArr) {
    return splitArr.reverse();
  }
  function joinArr(arr) {
    return arr.join("");
  }
}
console.log(reverse("APOLO"));
