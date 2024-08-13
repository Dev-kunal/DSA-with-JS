function sumOfNumbers(n) {
  if (n == 1) return n;
  return n + sumOfNumbers(n - 1);
}

console.log(sumOfNumbers(10));
