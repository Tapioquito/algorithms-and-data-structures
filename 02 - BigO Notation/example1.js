function sumofallnumbers(n) {
  let count = 0;
  for (let index = 1; index <= n; index++) {
    //console.log(`Index: ${index}`);
    count += index;
    //console.log(`Soma: ${count}`);
  }
}

function optimizedSum(n) {
  return (n * (n + 1)) / 2;
}
let t1 = performance.now();
//sumofallnumbers(1000000000);
optimizedSum(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${t2 - t1 / 1000} seconds`);
