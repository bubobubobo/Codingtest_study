// link : https://leetcode.com/problems/task-scheduler/

const leastInterval = (tasks, n) => {
  /**
   * 1. 횟수가 가장 많은 순서대로 정렬
   * 2. 많은 것부터 먼저 추출 => 되는대로 n size안에 서로 다른 task 추출
   *
   */
  const taskMap = new Map();
  tasks.forEach(task => {
    if (taskMap.has(task)) taskMap.set(task, taskMap.get(task) + 1);
    else taskMap.set(task, 1);
  });
  // sorted key list
  const sortedTaskEntry = [...taskMap].sort((t1, t2) => t2[1] - t1[1]);

  const isTasksDone = taskEntry => taskEntry[0][1] === 0;

  let availTaskIdx = 0;
  let leastUnitTime = 0;
  while (true) {
    let cnt = n + 1;
    for (let i = availTaskIdx; i < sortedTaskEntry.length && cnt !== 0; i++) {
      if (sortedTaskEntry[i][1] > 0) {
        sortedTaskEntry[i][1] -= 1;
        cnt -= 1;
        leastUnitTime += 1;
      }
    }
    sortedTaskEntry.sort((t1, t2) => t2[1] - t1[1]);

    // check if tasks all done after loop
    if (isTasksDone(sortedTaskEntry)) return leastUnitTime;

    leastUnitTime += cnt > 0 ? cnt : 0;

    if (sortedTaskEntry[availTaskIdx][1] === 0) {
      while (availTaskIdx !== sortedTaskEntry.length && sortedTaskEntry[availTaskIdx][1] === 0) {
        availTaskIdx += 1;
      }
    }
  }
};

const tasks = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'];
const n = 2;
console.log(leastInterval(tasks, n));
