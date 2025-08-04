/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/389479?language=javascript
 */
function solution(players, m, k) {
  let answer = 0; // 서버 증설횟수
  const servers = new Array(players.length).fill(0);

  for (let i = 0; i < players.length; i++) {
    const playerCount = players[i];
    // 서버한대가 처리할 수 있는 플레이어 수
    const server = Number.parseInt(playerCount / m);
    if (server > servers[i]) {
      // 필요한 서버 수
      const needServerCount = server - servers[i];

      // 서버 증설
      for (let j = 0; j < k; ++j) {
        if (i + j < 24) {
          // 서버 증설 후 서버 수 업데이트
          servers[i + j] = servers[i + j] + needServerCount;
        }
      }
      // 서버 증설횟수 증가
      answer += needServerCount;
    }
  }
  return answer;
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
