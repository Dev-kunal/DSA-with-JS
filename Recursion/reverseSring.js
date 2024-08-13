function reverseString(str) {
  let reverseString = "";
  let length = str.length - 1;

  while (length >= 0) {
    reverseString = reverseString + str[length];
    length = length - 1;
  }
  return reverseString;
}

// console.log("reversed string is ", reverseString("hello"));

function recersiveString(string) {
  if (string === "") return string;

  return (
    string[string.length - 1] +
    recersiveString(string.substr(0, string.length - 1))
  );
}

console.log("reversed string is ", recersiveString("hello"));
