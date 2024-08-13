function RSAT(string) {
  let outputString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char !== " " && char !== "\t") {
      outputString += char;
    }
  }

  return outputString;
}

// console.log(RSAT("Hello     world "));

function recuriseRSAT(string) {
  if (string.length == 0) return "";

  let firstChar = string[0];
  let restOfString = string.slice(1);

  if (firstChar === " " || firstChar == "\t") return recuriseRSAT(restOfString);

  return firstChar + recuriseRSAT(restOfString);
}

console.log(recuriseRSAT("Hello     world "));
