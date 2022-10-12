// link : https://school.programmers.co.kr/learn/courses/30/lessons/118667

const getProperSteps = (queue1, queue2, left, right) => {
  if (right < queue1.length) return right + left + queue2.length;
  return right + left - queue1.length;
};

const getTotalSteps = (queue1, queue2, target) => {
  const searchQueue = [...queue1, ...queue2];
  let [left, right] = [0, 1];
  let tmpSum = searchQueue[0];

  while (left < right && right < searchQueue.length) {
    if (tmpSum === target) return getProperSteps(queue1, queue2, left, right);
    if (tmpSum < target) {
      tmpSum += searchQueue[right];
      right += 1;
    }
    if (tmpSum > target) {
      tmpSum -= searchQueue[left];
      left += 1;
    }
  }
  return -1;
};

const solution = (queue1, queue2) => {
  const totalSum = [...queue1, ...queue2].reduce((s, v) => s + v, 0);
  if (totalSum % 2) return -1;

  const target = totalSum / 2;
  return Math.min(getTotalSteps(queue1, queue2, target), getTotalSteps(queue2, queue1, target));
};

// const queue1 = [3, 2, 7, 2];
// const queue2 = [4, 6, 5, 1];
const queue1 = [1, 1, 1, 1];
const queue2 = [2];
// const queue1 = [1, 2, 1, 2];
// const queue2 = [1, 10, 1, 2];
// const queue1 = [1, 1];
// const queue2 = [1, 5];

console.log(solution(queue1, queue2));
