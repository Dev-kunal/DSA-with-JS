function stringLength(string) {
  if (string === "") return 0;
  else return 1 + stringLength(string.substring(1));
}

console.log(stringLength("helloafhtn"));
