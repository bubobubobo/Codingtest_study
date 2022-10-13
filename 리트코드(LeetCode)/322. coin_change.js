// link : https://leetcode.com/problems/coin-change/
!asdf;
function coinChange(coin, change) {
  let answer = Number.MAX_SAFE_INTEGER;
  coin.sort((a, b) => b - a); // 거스름돈을 큰 단위부터 바꿔주면서 연산횟수를 단축시킨다.

  function DFS(L, sum) {
    if (sum > change) return; // change보다 sum이 크면 더 이상 계산 할 필요가 없음.
    if (answer <= L) return; // answer보다 작은 값을 구해야하는데 L이 더 크면 가지치기를 더 이상 할 필요가 없음.
    if (sum === change) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < coin.length; i++) {
        DFS(L + 1, sum + coin[i]);
      }
    }
  }

  DFS(0, 0);
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

const coins = [186, 419, 83, 408];
const amount = 2859;
console.log(coinChange(coins, amount));

// 두 번째
// var coinChange = function (coins, amount) {
//   return amount === 0 ? 0 : bfs(coins, amount);
// };

// function bfs(coins, amount) {
//   const queue = [[0, amount]];

//   while (queue.length) {
//     queue.sort((a, b) => a[1] - b[1]);
//     const curVal = queue.shift();
//     for (let coinVal of coins) {
//       if (curVal[1] - coinVal === 0) {
//         return curVal[0] + 1;
//       }
//       if (curVal[1] - coinVal > 0) {
//         queue.push([curVal[0] + 1, curVal[1] - coinVal]);
//       }
//     }
//   }
//   return -1;
// }

// 첫 번째
// var coinChange = function (coins, amount) {
//   if (amount === 0) return 0;
//   for (let coinVal of coins) {
//     if (coins.includes(amount)) return 1;
//   }

//   let res = 1;
//   let restAmounts = [amount];
//   main: while (true) {
//     if (restAmounts.length === 0) return -1;

//     const outerLoop = restAmounts.length;
//     for (let i = 0; i < coins.length; i++) {
//       if (restAmounts.includes(coins[i])) break main;
//     }

//     for (let i = 0; i < outerLoop; i++) {
//       for (let coinVal of coins) {
//         if (restAmounts[i] - coinVal > 0) {
//           restAmounts.push(restAmounts[i] - coinVal);
//         }
//       }
//     }
//     restAmounts = [...new Set(restAmounts.slice(outerLoop))];
//     res++;
//   }
//   return res;
// };
