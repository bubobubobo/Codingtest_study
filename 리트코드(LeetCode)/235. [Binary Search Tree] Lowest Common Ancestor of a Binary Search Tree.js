class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const lowestCommonAncestor = (root, p, q) => {
  // root에서 같이 내려가며 갈라지는 경우가 최초 노드
  let current = root;
  while (current !== p || current !== q) {
    if ((current.val - p.val) * (current.val - q.val) <= 0) return current;
    current = current.val - p.val < 0 ? current.right : current.left;
  }
  return current;
};

const a = new TreeNode(3);
const b = new TreeNode(5);
const c = new TreeNode(0);
const d = new TreeNode(4, a, b);
const e = new TreeNode(7);
const f = new TreeNode(9);
const g = new TreeNode(2, c, d);
const h = new TreeNode(8, e, f);
const root = new TreeNode(6, g, h);
const p = c;
const q = e;
console.log(lowestCommonAncestor(root, p, q));
