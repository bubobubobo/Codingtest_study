// const fetch = require('node-fetch');
import fetch from 'node-fetch';

function* genFunc(arr) {
  const x = yield arr;
  const y = yield x + 10;
  return x + y;
}

const generator = genFunc([1, 2, 3]);
// console.log(generator.return());
// console.log(generator.next('뭘 넣든 무시'));
// console.log(generator.next(15));
// console.log(generator.next(5));
// console.log(generator.next(13));
// console.log(generator.next({}));
// console.log(generator.next(13));

// tree 자료구조도 이터러블로 만들 수 있어
const infiniteFibonacci2 = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur };
      },
    };
  },
};

for (const n of infiniteFibonacci2) {
  if (n > 1000) break;
  console.log(n);
}

const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of infiniteFibonacci) {
  // if (num > 1000) break;
  if (num > 1000) infiniteFibonacci.return();
  console.log(num);
}

// 1. async/await pattern
// 동일한 역할이긴 해도 async 키워드와 혼동하지 말것
const async = generatorFunc => {
  const generator = generatorFunc(); // 2

  const onResolved = arg => {
    const result = generator.next(arg); // 5

    return result.done ? result.value : result.value.then(res => onResolved(res)); // 7
  };
  return onResolved; // 3
};

async(function* fetchTodo() {
  // 1
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url); // 6
  const todo = yield response.json(); // 8
  console.log(todo);
})(); // 4

// 2. using co library
// co library : 제너레이터 기반으로 프로미스를 사용해 non-blocking 코드 작성을 도와주는 라이브러리
const co = require('co');

co(function* fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url);
  const todo = yield response.json();
  console.log(todo);
});
