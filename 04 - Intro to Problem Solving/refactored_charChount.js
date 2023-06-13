function charCount(str) {
  let obj = {};
  for (let index = 0; index < str.length; index++) {
    let char = str[index].toLowerCase();
    console.log(char);
    console.log("---");
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
        console.log(obj[char]);
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function refactored_charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric(0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z)
    !(code > 96 && code < 123) //lower alpha(a-z)
  ) {
    return false;
  }
  return true;
}
console.log(refactored_charCount("Hello, World!!#$$"));
