/*

                            NAIVE STRING SEARCH

    - Suppose you want to count the number of times a smaller string appears
    in a longer string
    - A straighfowars approach involves checking pairs of characters individually

                            PSEUDOCODE
    
    - Define a function that takes 2 strings: the larger and the one we're looking
    - Loop over the longer string
    - Loop over the shorter string
    - If the characters don't match, break out of the inner loop
    - If the characters do match, keep going
    - If you complete the inner loop and find a match, increment the count of matches
    - Return the count at the end

*/

function naiveStringSearch(longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    console.log(`Outter loop:${longStr[i]}`);
    for (let j = 0; j < shortStr.length; j++) {
      console.log(`Inner loop: ${(shortStr[j], longStr[i + j])}`);
      if (shortStr[j] !== longStr[i + j]) {
        console.log("BREAK!");
        break;
      }
      if (j === shortStr.length - 1) {
        console.log("IT's A MATCH!");
        count++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch("ivo viu a uva", "viu"));
// console.log(
//   naiveStringSearch(
//     "farinha é a que a minha mãe manda lá de alagoas",
//     "farinha"
//   )
// );
