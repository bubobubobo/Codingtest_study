class TreeNode{
    constructor(val = 0, left: TreeNode = null, right: TreeNode = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const diameterOfBinaryTree = root => {

}

const a = new TreeNode(4)
const b = new TreeNode(5)
const c = new TreeNode(2, a, b)
const d = new TreeNode(3)
const root = new TreeNode(1, c, d)
console.log(diameterOfBinaryTree(root))