// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

const dpethFirstTraversal = function (root) {
  if (root == null) return null;

  const values = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return values;
};

const recursiveTraversal = function (root) {
  if (root == null) return null;

  const rightValues = recursiveTraversal(root.right);
  const leftValues = recursiveTraversal(root.left);

  return [root.key, ...leftValues, ...rightValues];
};
