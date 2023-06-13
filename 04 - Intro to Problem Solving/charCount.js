//Write a function wich takes in a string and returns counts of each character in the string;

function charCount(string) {
  let count = 0;
  const stringArr = string.split("");
  console.log(`Array length: ${stringArr.length}`);
  for (let index = 0; index < stringArr.length; index++) {
    console.log(stringArr[index]);
    count++;
  }
  console.log(count);
}
//charCount("minha brasília amarela está de portas abertas");
function charCount2(str) {
  // console.log(`Array length: ${str.length}`);
  //make an object to return at the end
  let result = {};
  //loop over the string, for each Character....
  for (let index = 0; index < str.length; index++) {
    let char = str[index].toLowerCase();
    //if the char is a number/letter AND is key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if the char is number/letter AND it's not in the object, add it and set value to 1
      result[char] = 1;
    }
  }
  //if a char is something else, (space, period, etc. ), don't do anything

  //return object at end
  return result;
}
console.log(charCount2("hello"));
console.log(charCount2("Hi, there!"));
