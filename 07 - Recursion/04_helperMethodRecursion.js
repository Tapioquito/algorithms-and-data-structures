/*
            HELPER METHOD RECURSION

    A helper method in recursion is a function that is used within a larger 
    recursive function to help solve the problem. 
    The helper function is usually used to perform a specific sub-task 
    in the recursion, such as updating a counter or processing a sub-array.

    The basic idea behind using a helper method in recursion is to simplify 
    the problem by breaking it down into smaller sub-problems. 
    The main recursive function calls the helper function to handle 
    the sub-problems, which in turn calls itself recursively 
    until a BASE CASE is reached.

    The helper method can be used to perform any number of tasks 
    in a recursive function, such as processing sub-arrays 
    or updating a counter variable.

*/

function collectOdds(arr) {
  let result = [];

  //função auxiliar:
  function checkIfOdd(inputArr) {
    //se o array for vazio, encerra a função:
    if (inputArr.lenght === 0 || inputArr[0] === undefined)
      return "It's empty!";

    if (inputArr[0] % 2 !== 0) {
      // console.log(`input array: ${inputArr[0]}`);
      //começa no índice zero do array
      //se for par, insere o elemento em result
      result.push(inputArr[0]);
    }
    //fazemos recursividade:
    checkIfOdd(inputArr.slice(1));
    //o Slice dessa forma exclui o primeiro elemento do array (já lido)
    //então chamamos  array, que será lido sem o primeiro elemento original
  }
  //chamamos a função auxiliar, que vai trabalhar recursivamente dentro dela:
  checkIfOdd(arr);

  return `Final result: ${result}`;
}

console.log(collectOdds([1, 2, 3, 4, 5]));
