/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212?language=javascript
 */
const MAX_VALUE = 1_000_000_000_000_001;

function solution(diffs, times, limit) {
  let start = 0;
  let end = MAX_VALUE;
  const time = limit;
  let answer = -1;

  while (start <= end) {
    const level = Math.ceil((start + end) / 2);
    if (answer === level || level === start || level === end) {
      break;
    }
    let sum = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (level < diffs[i]) {
        const diff = diffs[i] - level;
        sum += diff * (times[i - 1] + times[i]) + times[i];
      } else {
        sum += times[i];
      }
    }
    if (sum <= limit) {
      end = level;
      answer = level;
    } else {
      start = level;
    }
  }

  return answer;
}

console.log(
  solution(['AZWQY', 'CAABX', 'BBDDA', 'ACACA'], ['A', 'BB', 'A']) === 11,
);
console.log(
  solution(
    ['HAH', 'HBH', 'HHH', 'HAH', 'HBH'],
    ['C', 'B', 'B', 'B', 'B', 'H'],
  ) === 4,
);
