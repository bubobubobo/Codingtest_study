class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isValidBST = root => {
  const checkNodeValidity = node => {
    // check left subtree
    if (node.left !== null) {
      let leftMax = -Infinity;
      const stack = [node.left];

      while (stack.length) {
        const current = stack.pop();
        leftMax = leftMax < current.val ? current.val : leftMax;
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
      }

      if (node.val <= leftMax) return false;
    }
    // check right subtree
    if (node.right !== null) {
      let rightMin = Infinity;
      const stack = [node.right];

      while (stack.length) {
        const current = stack.pop();
        rightMin = rightMin > current.val ? current.val : rightMin;
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
      }

      if (node.val >= rightMin) return false;
    }

    return true;
  };

  // dfs
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    if (!checkNodeValidity(current)) return false;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }

  return true;
};

const a = new TreeNode(3);
const b = new TreeNode(6);
const c = new TreeNode(1);
const d = new TreeNode(4, a, b);
const root = new TreeNode(5, c, d);

// const a = new TreeNode(1);
// const b = new TreeNode(3);
// const root = new TreeNode(2, a, b);
console.log(isValidBST(root));
