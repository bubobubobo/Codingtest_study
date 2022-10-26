class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const isPalindrome = head => {
  const vals = [];
  let cur = head;
  while (cur !== null) {
    vals.push(cur.val);
    cur = cur.next;
  }
  for (let i = 0; i < Math.floor(vals.length / 2); i++) {
    if (vals[i] !== vals[vals.length - 1 - i]) return false;
  }
  return true;
};

const a = new ListNode(1);
const b = new ListNode(2, a);
const c = new ListNode(2, b);
const d = new ListNode(1, c);
const head = d;
console.log(isPalindrome(head));
