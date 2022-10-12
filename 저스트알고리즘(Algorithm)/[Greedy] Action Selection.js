const actionSelection = schedule => {
  // 끝나는 시간을 기준으로 정렬 후에 할 수 있는 일 중 가장 먼저 시작할 수 있는 일을 선택
  schedule.sort((a, b) => a[2] - b[2]);

  const workFlow = [];
  let time = 0;
  schedule.forEach(([name, start, end]) => {
    if (time <= start) {
      workFlow.push(name);
      time = end;
    }
  });
  return workFlow;
};

const schedule = [
  ['A', 7, 8],
  ['B', 5, 7],
  ['C', 3, 6],
  ['D', 1, 2],
  ['E', 6, 9],
  ['F', 10, 11],
];

console.log(actionSelection(schedule));
