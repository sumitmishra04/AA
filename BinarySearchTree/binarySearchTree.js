/**
 * A binary search tree is made of nodes which contain a value and pointers to the left and the right children
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Search tree basic property is its root. We can perform any operation using this root.
 *
 *
 *                  11
 *          8---------------12
 *      6-------9               13
 *  4-------7       10              14
 *      5
 *
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param {number} value
   */
  insertNode(value) {
    var node = new Node(value);
    var current = this.root;
    if (this.findNode(value)) {
      return;
    }
    if (!this.root) {
      this.root = node;
    } else {
      while (true) {
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        }
      }
    }
    return this;
  }

  findNode(value) {
    if (!this.root) {
      return false;
    }
    var current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  preOrderTraversal() {
    const values = [];
    var current = this.root;
    (function traverse(current) {
      values.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    })(current);
    return values;
  }

  postOrderTraversal() {
    const values = [];
    var current = this.root;
    (function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      values.push(current.value);
    })(current);
    return values;
  }

  inOrderTraversal() {
    const values = [];
    var current = this.root;
    (function traverse(current) {
      if (current.left) traverse(current.left);
      values.push(current.value);
      if (current.right) traverse(current.right);
    })(current);
    return values;
  }

  BFSTraversal() {
    var queue = [];
    var data = [];
    queue.push(this.root);
    while (queue.length) {
      var item = queue.shift();
      data.push(item.value);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    return data;
  }

  getMinValue(root) {
    if (!root) {
      return null;
    }
    var current = root;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
  getMaxValue(root) {
    if (!root) {
      return null;
    }
    var current = root;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }

  inorderSuccessor(value) {
    const node = this.findNode(value);

    if (node) {
      if (node.right !== null) {
        return this.getMinValue(node.right);
      } else {
      }
    }
  }

  inorderPredecessor(value) {
    const node = this.findNode(value);
    if (node) {
      if (node.left !== null) {
        return this.getMaxValue(node.left);
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  // a recursive function to insert a new value in binary search tree
  removeNode(current, value) {
    if (current === null || !this.findNode(value)) return current;
    if (value === current.value) {
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        let tempNode = this.inorderSuccessor(current.right.value);
        current.value = tempNode.value;
        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }
    } else if (value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  getParent(target) {
    if (!this.root || !this.findNode(target) || target === this.root.value) {
      return null;
    }
    var current = this.root;
    function helper(current) {
      if (
        (current.left && current.left.value === target) ||
        (current.right && current.right.value === target)
      ) {
        return current;
      }
      if (target < current.value) {
        return helper(current.left);
      } else {
        return helper(current.right);
      }
    }
    return helper(current);
  }
}

var bst = new BinarySearchTree();
bst.insertNode(11);
bst.insertNode(8);
bst.insertNode(12);
bst.insertNode(6);
bst.insertNode(9);
bst.insertNode(10);
bst.insertNode(13);
bst.insertNode(4);
bst.insertNode(5);
bst.insertNode(7);
bst.insertNode(14);

// console.log(bst.BFSTraversal());
// console.log(bst.deleteNode(51));
// console.log(bst.deleteNode(51));
// console.log(bst.getMinValue(bst.root));
// console.log(bst.getMaxValue(bst.root));
// console.log(bst.inorderPredecessor(12));
console.log(bst.preOrderTraversal());
console.log(bst.remove(8));
console.log(bst.preOrderTraversal());
