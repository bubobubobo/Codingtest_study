const minCostClimbingStairs = cost => {
  // top of the floor
  const top = cost.length;
  const minCosts = [0, 0];

  for (let i = 2; i <= top; i++) {
    minCosts[i] = Math.min(minCosts[i - 2] + cost[i - 2], minCosts[i - 1] + cost[i - 1]);
  }
  return minCosts[top];
};

const cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
