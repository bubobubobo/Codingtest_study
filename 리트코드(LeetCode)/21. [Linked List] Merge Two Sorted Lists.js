class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const arrayToList = arr => {
    let head = null;
    arr.reverse().forEach(v => {
      if (!head) head = new ListNode(v);
      else head = new ListNode(v, head);
    });
    return head;
  };

  const listToArray = list => {
    const values = [];
    let current = list;
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  };

  return arrayToList([...listToArray(list1), ...listToArray(list2)].sort((a, b) => a - b));
};

// const mergeTwoLists = (list1, list2) => {
//   // initialization
//   let [left, right] = [list1, list2];

//   if (left === null) return right;
//   if (right === null) return left;

//   let mergedList;
//   let tail;

//   if (left.val < right.val) {
//     mergedList = new ListNode(left.val, null);
//     left = left.next;
//   } else {
//     mergedList = new ListNode(right.val, null);
//     right = right.next;
//   }
//   tail = mergedList;

//   // composition
//   while (left !== null && right !== null) {
//     if (left.val < right.val) {
//       tail.next = new ListNode(left.val, null);
//       left = left.next;
//     } else {
//       tail.next = new ListNode(right.val, null);
//       right = right.next;
//     }
//     tail = tail.next;
//   }

//   if (left === null) {
//     tail.next = right;
//     return mergedList;
//   }
//   if (right === null) {
//     tail.next = left;
//     return mergedList;
//   }
// };

const n3 = new ListNode(4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

const m3 = new ListNode(4);
const m2 = new ListNode(3, m3);
const m1 = new ListNode(1, m2);

const list1 = n1;
const list2 = m1;
console.log(mergeTwoLists(list1, list2));
