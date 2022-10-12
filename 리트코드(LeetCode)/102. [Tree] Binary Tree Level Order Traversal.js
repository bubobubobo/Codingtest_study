class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

const preorder = root => {
  if (root === null) return [];

  const visited = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    visited.push(current.val);

    current.children.reverse().forEach(child => {
      stack.push(child);
    });
  }
  return visited;
};

const a = new Node(5);
const b = new Node(6);
const c = new Node(3, [a, b]);
const d = new Node(2);
const e = new Node(4);
const root = new Node(1, [c, d, e]);
console.log(preorder(root));
