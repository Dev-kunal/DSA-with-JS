function getFibonacci(num) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < num; i++) {
    let temp = n0 + n1;
    n0 = n1;
    n1 = n0;
    n1 = temp;
  }

  return n0;
}

console.log(getFibonacci(5));
console.log(getFibonacci(6));

function recursiceFibonacci(num) {
  if (num <= 1) return num;
  return recursiceFibonacci(num - 2) + recursiceFibonacci(num - 1);
}

console.log(recursiceFibonacci(5));
console.log(recursiceFibonacci(6));
