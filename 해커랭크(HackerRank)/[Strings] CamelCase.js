// link : https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function camelcase(s) {
  const upperCases = s.match(/[A-Z]/g);
  return !upperCases ? 1 : upperCases.length + 1;
}

const s = 'one';
console.log(camelcase(s));
