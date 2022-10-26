class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeNthFromEnd = (head, n) => {
  const nodes = [];
  let cur = head;
  while (cur !== null) {
    nodes.push(cur);
    cur = cur.next;
  }
  // base case
  if (nodes.length === n) return nodes.length === 1 ? null : nodes[1];

  nodes[nodes.length - n - 1].next = nodes[nodes.length - n].next;
  return head;
};

const a = new ListNode(5);
const b = new ListNode(4, a);
const c = new ListNode(3, b);
const d = new ListNode(2, c);
const e = new ListNode(1, d);
const head = e;
const n = 2;
console.log(removeNthFromEnd(head, n));
