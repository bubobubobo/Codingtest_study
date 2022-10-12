class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const middleNode = head => {
  const nodes = [];
  let current = head;
  while (current !== null) {
    nodes.push(current);
    current = current.next;
  }
  return nodes[Math.floor(nodes.length / 2)];
};

const e = new ListNode(5);
const d = new ListNode(4, e);
const c = new ListNode(3, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);
const head = a;
console.log(middleNode(head));
