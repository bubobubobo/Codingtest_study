const minCostClimbingStairs = cost => {
  const minCost = [0, 0];
  const goal = cost.length;
  for (let i = 2; i <= goal; i++) {
    minCost.push(Math.min(minCost[i - 2] + cost[i - 2], minCost[i - 1] + cost[i - 1]));
  }
  return minCost[goal];
};

const cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
