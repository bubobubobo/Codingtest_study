// const iter = {
//   [Symbol.iterator]() {
//     let val = 0;
//     return {
//       next() {
//         return { value: val++, done: val > 10 };
//       },
//     };
//   },
//   a: 1,
//   b: 2,
//   0: 3,
//   1: 4,
//   7: 3,
//   length: 7,
// };

// // const arr = Array.prototype.slice.call(iter);
// // console.log(arr);
// // const iterator = iter[Symbol.iterator]();

// // for (const val in iter) {
// //   console.log(val);
// // }

// const { a, b, c, ...arg } = iter;
// console.log(a, b, c);
// console.log(arg);
// // 배열 디스트럭처링 하려 할 때 왜 이터러블이어야 하는가?
// // 객체 디스트럭처링은 배열 디스트럭처링과 어떻게 다르게 작동하는가?

// const [...arr] = iter;
// console.log(arr);
// // const arr = [1,2,3]
// // const arr = {0: 1, 1: 2, 2: 3}

// console.log([...iter]);
// console.log([][Symbol.iterator]());

// 사용자정의 이터러블 집합
const iter = {
  [Symbol.iterator]() {
    const maxVal = 100;
    let [pre, cur] = [0, 1];
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur > maxVal };
      },
    };
  },
  a() {},
};

const testSymbol = Symbol.for('testSymbol');
const abcde = [[testSymbol, 123]];

const test123 = new Map(abcde);
console.log(test123);
const test2 = new Map(Object.entries(iter));
console.log(Object.entries(iter));
console.log(test2);
console.log(test2.size);

const iterableSet = new Set(iter);
console.log(iterableSet);

console.log(Object.is(NaN, NaN));

// NaN, +0, -0 또한 중복추가되지 않음
const s = new Set();
for (let _ = 0; _ < 10; _++) {
  s.add(NaN);
}
s.add(-0);
s.add(+0);
console.log(s);

// Map
// const m = new Map(iter);
const arr1 = [
  [1, 2],
  [2, 3],
];
const m1 = new Map(arr1);
console.log(m1);
const arr2 = [
  [1, [2, 3]],
  [2, 3, 4],
];
const m2 = new Map(arr2);
console.log(m2);

const arr3 = [(1, 2), (3, 4)];
// const m3 = new Map(arr3)

const arr4 = [{ 1: 2 }, { 3: 4 }];
const m4 = new Map(arr4);
console.log(m4);

const arrayLike1 = { 1: 2, 2: 3, 3: 4, length: 3 };
// const m5 = new Map(obj1)

const iter2 = {
  [Symbol.iterator]() {
    const maxVal = 100;
    let idx = 0;
    let [pre, cur] = [0, 1];
    return {
      next() {
        idx += 1;
        [pre, cur] = [cur, pre + cur];
        return { key: idx, value: cur, done: cur > maxVal };
      },
    };
  },
};

// const m6 = new Map(iter2);

const iter3 = {
  [Symbol.iterator]() {
    const maxVal = 100;
    let idx = 0;
    let [pre, cur] = [0, 1];
    return {
      next() {
        idx += 1;
        [pre, cur] = [cur, pre + cur];
        return { value: [idx, cur], done: cur > maxVal };
      },
    };
  },
};

const m7 = new Map(iter3);
console.log(m7);
console.log([...m7]);
const [el1, el2, ...rest] = m7;
console.log(el1, el2, rest);

function solution(nums) {
  return Math.min(new Set(nums), nums.length / 2);
}

const nums = [3, 3, 3, 2, 2, 2];

// const test = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const m10 = new Map(Object.entries(test));
// console.log(m10);
