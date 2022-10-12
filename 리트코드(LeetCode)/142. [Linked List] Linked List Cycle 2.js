class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const detectCycle = head => {
  let current = head;
  const visited = [];

  while (current !== null) {
    if (visited.includes(current)) return current;
    visited.push(current);
    current = current.next;
  }

  return null;
};

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
d.next = null;
const head = a;
console.log(detectCycle(head));
