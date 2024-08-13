class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    this.insertNode(this.root, newNode);
  }

  insertNode(rootNode, newNode) {
    if (newNode.key < rootNode.key) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else this.insertNode(rootNode.left, newNode);
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(rootNode, key) {
    if (key < rootNode.key) {
      rootNode.left = this.deleteNode(rootNode.left, key);
    } else if (key > rootNode.key) {
      rootNode.right = this.deleteNode(rootNode.right, key);
    }
    // if the key found at the node
    else {
      if (rootNode.left == null && rootNode.right == null) {
        return null;
      } else if (rootNode.left == null) {
        return rootNode.right;
      } else if (rootNode.right == null) {
        return rootNode.left;
      } else {
        let tempNode = this.findMinNode(rootNode.right);
        rootNode.key = tempNode.key;
        rootNode.right = this.deleteNode(rootNode.right, key);
      }
    }
    return rootNode;
  }

  findMinNode(rootNode) {
    while (rootNode.left) {
      rootNode = rootNode.left;
    }
    return rootNode;
  }

  preOrderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
  }

  preOrder(rootNode, result) {
    if (node !== null) {
      result.push(rootNode.key);
      this.preOrder(rootNode.left, result);
      this.preOrder(rootNode.right, result);
    }
  }

  inOrderTraversal() {
    let result = [];
    this.inOrder(this.root, result);
  }

  inOrder(rootNode, result) {
    if (node !== null) {
      this.inOrder(rootNode.left, result);
      result.push(rootNode.key);
      this.inOrder(rootNode.right, result);
    }
  }

  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
  }

  postOrder(rootNode, result) {
    if (node !== null) {
      this.postOrder(rootNode.left, result);
      this.postOrder(rootNode.right, result);
      result.push(rootNode.key);
    }
  }
}

// strivers solution

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  deleteNode(root, key) {
    if (root === null) {
      return null;
    }

    if (root.val === key) {
      return this.deleteAndAttchSubtree(root);
    }

    let dummy = root;

    while (root !== null) {
      if (key < root.val) {
        if (root.left !== null && root.left.val === key) {
          root.left = this.deleteAndAttchSubtree(root.left);
          break;
        } else {
          root = root.left;
        }
      } else {
        if (root.right !== null && root.right.val === key) {
          root.right = this.deleteAndAttchSubtree(root.right);
          break;
        } else {
          root = root.right;
        }
      }
    }
    return dummy;
  }

  deleteAndAttchSubtree(root) {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    let rightChild = root.right;
    let lastRight = this.findLastRight(root.left);
    lastRight.right = rightChild;
    return root.left;
  }

  findLastRight(root) {
    if (root.right === null) {
      return root;
    }
    return this.findLastRight(root.right);
  }
}
