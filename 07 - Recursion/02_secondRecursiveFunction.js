function sumRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}
//a função vai se repetir, diminuindo o valor de num por 1 até chegar a 1
//quando chega a 1 ele retorna 1 e acaba a recursividade
console.log(sumRange(2)); //3: 2 + 1
console.log(sumRange(2)); //15: 5 + 4 + 3 + 2 + 1
