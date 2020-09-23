class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    var node = new Node(value);
    var current = this.root;
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
        return true;
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

  deleteNode() {}
}

var bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(7);
bst.insertNode(12);
bst.insertNode(14);
