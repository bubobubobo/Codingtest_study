class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 1. 배열로 만든 뒤 내장 함수로 정렬한 뒤 linked list 반환
// const sortList = head => {
//   const nodes = [];
//   let cur = head;
//   while (cur !== null) {
//     nodes.push(cur);
//     cur = cur.next;
//   }

//   // base case
//   if (nodes.length === 0) return null;

//   nodes.sort((a, b) => a.val - b.val);
//   const sortedHead = nodes[0];
//   let tail = sortedHead;
//   for (let i = 1; i < nodes.length; i++) {
//     tail.next = nodes[i];
//     tail = tail.next;
//   }
//   tail.next = null;
//   return sortedHead;
// };

// TODO: 2. 직접 sort alg사용해 정렬
const sortList = head => {};

const a = new ListNode(3);
const b = new ListNode(1, a);
const c = new ListNode(2, b);
const d = new ListNode(4, c);
const head = d;
console.log(sortList(head));
