// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(n1, n2) {
  if (n1.length != n2.length) return false;
  //números com comprimentos diferentes não podem possuir a mesma quantidade de dígitos

  let arr1 = n1.toString().split("");
  let arr2 = n2.toString().split("");
  //trasnformamos os números em strings e depois em arrays
  let freqCount1 = {};
  let freqCount2 = {};
  //criamos 2 objetos vazios para acompanhar a frequência de cada dígito nos 2 números
  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
    //console.log(freqCount1[val]);
  }

  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
    //console.log(freqCount2[val]);
  }

  for (let key in freqCount1) {
    if (!key in freqCount2) {
      return false;
    }
    if (freqCount1[key] != freqCount2[key]) {
      return false;
    }
  }

  return true;
}
console.log(sameFrequency(182, 281)); // true
//console.log(sameFrequency(34, 14)); // false
//console.log(sameFrequency(3589578, 5879385)); // true
//console.log(sameFrequency(22, 222)); // false
