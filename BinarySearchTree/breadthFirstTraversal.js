// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstTraersal = function (root) {
  if (root == null) return "";

  const values = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};
