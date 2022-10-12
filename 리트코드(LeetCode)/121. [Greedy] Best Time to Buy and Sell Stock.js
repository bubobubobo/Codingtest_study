// link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = prices => {
  // 증가하는 부분만 캐치하여 maxProfit 저장
  let max = -Infinity;
  let localMin;

  prices.forEach((price, idx) => {
    if (idx === 0) localMin = price;
    else if (price < prices[idx - 1]) localMin = price < localMin ? price : localMin;
    else max = price - localMin > max ? price - localMin : max;
  });

  return max === -Infinity ? 0 : max;
};

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
