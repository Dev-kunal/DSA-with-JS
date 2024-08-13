function gcd(num1, num2) {
  if (num1 == num2) return num1;

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  } else return gcd(num1, num2 - num1);
}

// console.log(gcd(42, 56));

function getDivisors(num) {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(getDivisors(42));
console.log(getDivisors(56));

function getGreatestCommonNumber(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  let commonNumbers = [...set1].filter((num) => set2.has(num));
  return Math.max(...commonNumbers);
}

function gcdUsualWay(num1, num2) {
  const num1Divisors = getDivisors(num1);
  const num2Divisors = getDivisors(num2);

  console.log(num2Divisors, num1Divisors);
  const greatestCommonDivisor = getGreatestCommonNumber(
    num1Divisors,
    num2Divisors
  );
  return greatestCommonDivisor;
}

console.log(gcdUsualWay(42, 56));
