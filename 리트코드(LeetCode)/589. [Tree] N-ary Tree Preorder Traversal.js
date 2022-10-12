class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const levelOrder = root => {
  // bfs로 모든 노드를 순회하며 자신의 레벨과 값을 저장
  // base case
  if (root === null) return [];

  const visited = [];
  const queue = [[root, 0]];

  while (queue.length) {
    const [curNode, curLevel] = queue.shift();
    if (visited[curLevel] === undefined) visited[curLevel] = [curNode.val];
    else visited[curLevel].push(curNode.val);

    if (curNode.left) queue.push([curNode.left, curLevel + 1]);
    if (curNode.right) queue.push([curNode.right, curLevel + 1]);
  }

  return visited;
};

// const a = new TreeNode(15);
// const b = new TreeNode(7);
// const c = new TreeNode(9);
// const d = new TreeNode(20, a, b);
// const root = new TreeNode(3, c, d);
const root = null;
console.log(levelOrder(root));
