class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = head => {
  let reversed = null;
  let current = head;
  while (current !== null) {
    if (reversed === null) reversed = new ListNode(current.val);
    else reversed = new ListNode(current.val, reversed);
    current = current.next;
  }
  return reversed;
};

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);
const head = n1;

console.log(reverseList(head));
