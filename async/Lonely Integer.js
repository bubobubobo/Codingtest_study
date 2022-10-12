// link : https://www.hackerrank.com/challenges/lonely-integer/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

function lonelyinteger(a) {
  // Write your code here
  a.sort((m, n) => m - n);
  for (let i = 0; i < a.length; i += 2) {
    if (a[i] !== a[i + 1]) return a[i];
  }
  return a[a.length - 1];
}

const a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));
