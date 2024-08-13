// aabcc
function removeAdjDuplicates(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1])
      result += inputString[i];
  }

  return result;
}

console.log(removeAdjDuplicates("aabcc"));
