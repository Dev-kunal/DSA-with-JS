const sumByBreadthFirstSearchMethod = function (root) {
  if (root === null) return null;

  const queue = [root];
  let sum = 0;

  while (queue.length) {
    const node = queue.shift();
    sum += node.key;
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return sum;
};

// treeSum by depthSearchMethos using Recursion
// this can be done via usual way of using stack as well

const treeSumByDFT = function (root) {
  if (root === null) return null;
  return (
    treeSumByDFT(root.key) + treeSumByDFT(root.left) + treeSumByDFT(root.right)
  );
};
