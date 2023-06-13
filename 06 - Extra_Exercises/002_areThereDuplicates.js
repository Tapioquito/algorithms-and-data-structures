// Implement a function called "areThereDuplicates" which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areTheDuplicates(...args) {
  let charCount = {};
  console.log(args.length);
  console.log("--------------");
  for (let val in args) {
    //console.log(args[val]);
  }
}

console.log(areTheDuplicates(1, 2, 3));
console.log(areTheDuplicates(1, 2, 2));
console.log(areTheDuplicates("a", "b", "c", "a"));
