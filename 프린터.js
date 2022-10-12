const isPriorTask = taskQ => {
  const curPriority = taskQ[0][0];
  return !taskQ.slice(1).filter(task => task[0] > curPriority).length;
};

const solution = (priorities, location) => {
  const taskQ = priorities.map((priority, i) => [priority, String.fromCharCode(65 + i)]);
  const target = taskQ[location][1];
  let result = '';
  while (taskQ.length) {
    if (isPriorTask(taskQ)) result += taskQ.shift()[1];
    else taskQ.push(taskQ.shift());
  }
  return result.split('').indexOf(target) + 1;
};

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
