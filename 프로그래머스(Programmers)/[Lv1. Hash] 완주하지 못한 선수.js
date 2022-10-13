const solution = (participant, completion) =>
  participant.filter(runner => !completion.includes(runner))[0];

const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];
console.log(solution(participant, completion));
