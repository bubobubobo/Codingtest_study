// link : https://school.programmers.co.kr/learn/courses/30/lessons/77486

class Node {
  parent = null;

  children = [];

  name = '';

  profit = 0;

  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
  }

  appendChild(childName) {
    this.children = [...this.children, childName];
  }

  updateProfit(value) {
    this.profit += value;
  }
}

const getTree = (enroll, referral) => {
  const tree = [new Node('-', null), ...enroll.map((p, i) => new Node(p, referral[i]))];

  tree.forEach(p => {
    if (p.parent === null) return;
    const parentIdx = enroll.indexOf(p.parent) + 1;
    tree[parentIdx].appendChild(p);
  });

  return tree;
};

const dfs = (tree, seller, amount) => {
  const stack = [tree[0]];
  const nodes = tree.map(node => node.name);

  let current;
  while (stack.length) {
    current = stack.pop();

    for (const child of current.children) {
      stack.push(child);
    }

    if (seller.includes(current.name)) {
      const total = amount[seller.indexOf(current.name)] * 100;
      const myProfit = total;
      let parentProfit = Math.floor(myProfit * 0.1);

      // 처음엔 myProfit으로 업데이트
      current.updateProfit(myProfit);

      // 그 다음부턴 갖고있는 금액의 10%만큼 자신에게서 깎고, parent 업데이트
      while (current.parent !== null) {
        const parentIdx = nodes.indexOf(current.parent);

        // update current
        current.updateProfit(-1 * parentProfit);

        // update parent
        tree[parentIdx].updateProfit(parentProfit);

        parentProfit = Math.floor(parentProfit * 0.1);
        current = tree[parentIdx];
      }
    }
  }
  return tree;
};

const solution = (enroll, referral, seller, amount) => {
  // TODO: 중복 판매자를 고려해 다시 작성할 것!
  /**
   * 각 노드는 parent, children, profit을 가짐
   */

  // 1. enroll, referral로 트리 생성
  let tree = getTree(enroll, referral);

  // 2. dfs로 순회하며 각 노드에서 parent로 쭉 올라가며 profit update
  tree = dfs(tree, seller, amount);

  // 3. 트리를 순회하며 profit return
  return [...tree.slice(1)].map(node => node.profit);
};

// const enroll = ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'];
// const referral = ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'];
// const seller = ['young', 'john', 'tod', 'emily', 'mary'];
// const amount = [12, 4, 2, 5, 10];
const enroll = ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'];
const referral = ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'];
const seller = ['young', 'john', 'tod', 'emily', 'mary'];
const amount = [12, 4, 2, 5, 10];
console.log(solution(enroll, referral, seller, amount));
// [360, 958, 108, 0, 450, 18, 180, 1080]
