const solution = sizes => {
  const sortedSizes = sizes.map(card => (card[0] < card[1] ? [card[1], card[0]] : card));
  let height = -Infinity;
  let width = -Infinity;
  sortedSizes.forEach(card => {
    height = card[0] > height ? card[0] : height;
    width = card[1] > width ? card[1] : width;
  });
  return width * height;
};

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes));
