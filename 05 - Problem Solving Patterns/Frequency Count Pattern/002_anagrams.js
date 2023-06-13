function anagram_frequencyCounter(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freqCount1 = {};
  let freqCount2 = {};

  for (let value of str1) {
    freqCount1[value] = (freqCount1[value] || 0) + 1;
    //console.log(freqCount1);
  }

  for (let value of str2) {
    freqCount2[value] = (freqCount2[value] || 0) + 1;
    // console.log(freqCount2);
  }

  for (let key in freqCount1) {
    if (!(key in freqCount2)) {
      return false;
    }
    if (freqCount2[key] !== freqCount1[key]) {
      return false;
    }
  }
  return true;
}
//=========== versão do professor ==============

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(`1 - ${anagram_frequencyCounter("", "")}`); //true

console.log(`2 - ${anagram_frequencyCounter("aaz", "zza")}`); //false

console.log(`3- ${anagram_frequencyCounter("anagram", "nagaram")}`); //true

console.log(`4- ${anagram_frequencyCounter("rat", "car")}`); //false

console.log(`5- ${anagram_frequencyCounter("awesome", "awesom")}`); //false

console.log(`6- ${anagram_frequencyCounter("rat", "car")}`); //false

console.log(`7- ${anagram_frequencyCounter("qwerty", "qeiwrt")}`); //true

console.log(`8- ${anagram_frequencyCounter("texttwisttime", "timetwisttext")}`); //true
