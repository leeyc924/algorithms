/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/389479?language=javascript
 */
function solution(players, m, k) {
  const serverArr = Array.from({ length: 24 + k }).fill(0);
  let increaseCnt = 0;
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const needServer = Math.floor(player / m);
    if (serverArr[i] < needServer) {
      const increase = needServer - serverArr[i];
      increaseCnt += increase;
      for (let j = i; j < i + k; j++) {
        serverArr[j] += increase;
      }
    }
  }
  return increaseCnt;
}

console.log(
  solution(
    [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
    3,
    5,
  ) === 7,
);
console.log(
  solution(
    [
      0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0,
      0,
    ],
    5,
    1,
  ) === 11,
);
console.log(
  solution(
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    1,
    1,
  ) === 12,
);
