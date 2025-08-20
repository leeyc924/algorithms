/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150369?language=javascript
 */
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let needD = 0;
  let needP = 0;

  for (let i = n - 1; i >= 0; i--) {
    needD += deliveries[i];
    needP += pickups[i];
    const t = Math.ceil(Math.max(needD, needP) / cap);
    if (t > 0) {
      answer += (i + 1) * 2 * t;
      needD -= t * cap;
      needP -= t * cap;
    }
  }
  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]) === 16);
console.log(
  solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]) === 30,
);
