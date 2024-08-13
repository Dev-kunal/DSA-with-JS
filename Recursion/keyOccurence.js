function recurKeyOccurence(array, key, index = 0) {
  if (index >= array.length) return 0;

  return (
    (array[index] === key ? 1 : 0) + recurKeyOccurence(array, key, index + 1)
  );
}

console.log(recurKeyOccurence([2, 3, 4, 6, 2, 8, 9], 2, 0));
