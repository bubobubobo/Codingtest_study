const solution = (people, limit) => {
  people.sort((a, b) => a - b);
  let total = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    // 0. 한 명만 남은 경우
    if (left === right) return total + 1;

    // 1. 가장 무거운 사람과 가장 가벼운 사람이 타는 경우
    if (people[left] + people[right] <= limit) {
      total += 1;
      left += 1;
      right -= 1;
    }

    // 2. 가장 무거운 사람만 타는 경우
    else if (people[left] + people[right] > limit) {
      total += 1;
      right -= 1;
    }
  }
  return total;
};

const people = [70, 50, 80, 50];
const limit = 100;
console.log(solution(people, limit));
