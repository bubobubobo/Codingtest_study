class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Height{
    constructor() {
        this.h = 0;
    }
}

const diameter = (root, height) => {
    const lh = new Height();
    const rh = new Height();

    if (root === null) {
        height.h = 0
        return 0
    }

    const lDiameter = diameter(root.left, lh)
    const rDiameter = diameter(root.right, rh)

    height.h = Math.max(lh.h, rh.h) + 1

    return Math.max(lh.h + rh.h + 1, Math.max(lDiameter, rDiameter))
}

const diameterOfBinaryTree = root => {
    const height = new Height()
    return diameter(root, height)
}


const a = new TreeNode(-1)
const b = new TreeNode(-4)
const c = new TreeNode(-2)
const d = new TreeNode(0, null,a)
const e = new TreeNode(6, b)
const f = new TreeNode(5)
const g = new TreeNode(9, c)
const h = new TreeNode(6, d, e)
const i = new TreeNode(-6, f)
const j = new TreeNode(-6, g)
const k = new TreeNode(9, h)
const l = new TreeNode(-7, i, j)
const m = new TreeNode(-4)
const n = new TreeNode(-9, k, l)
const o = new TreeNode(-3, m)
const p = new TreeNode(-7)
const q = new TreeNode(-3, n, o)
const root = new TreeNode(4, p, q)
console.log(diameterOfBinaryTree(root))