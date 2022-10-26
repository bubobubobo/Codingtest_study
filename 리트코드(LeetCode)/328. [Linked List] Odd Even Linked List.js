// link : https://leetcode.com/problems/odd-even-linked-list/
// TODO: space complexity O(1) && time complexity O(n)

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 홀수번 째가 나올 때마다 짝수 head 앞에 push
const oddEvenList = head => {
  // base case
  if (head === null || head.next === null || head.next.next === null) return head;

  let evenPrev = head;
  const evenHead = head.next;
  let prev = head.next;
  let idx = 3;
  for (let cur = head.next.next; cur !== null; cur = cur.next) {
    if (idx % 2 === 1) {
      // pop
      prev.next = cur.next;
      // push
      evenPrev.next = cur;
      cur.next = evenHead;

      evenPrev = cur;
      cur = prev;
    }
    prev = cur;
    idx += 1;
  }
  return head;
};

const a = new ListNode(7);
const b = new ListNode(4, a);
const c = new ListNode(6, b);
const d = new ListNode(5, c);
const e = new ListNode(3, d);
const f = new ListNode(1, e);
const g = new ListNode(2, f);
const head = g;
console.log(oddEvenList(head));
