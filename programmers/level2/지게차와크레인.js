/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/388353?language=javascript
 */
function solution(storage, requests) {
  const newStorage = storage.map(row => row.split(''));
  const [n, m] = [newStorage.length, newStorage[0].length];
  let res = 0;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const check = (storage, x, y) => {
    const queue = [[x, y]];
    const visited = Array.from(Array(n), () => Array(m).fill(0));
    visited[x][y] = 1;

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < dir.length; i++) {
        const nx = curX + dir[i][0];
        const ny = curY + dir[i][1];

        // 외부와 연결된 곳을 찾으면 true 반환
        if (curX === 0 || curX === n - 1 || curY === 0 || curY === m - 1) {
          return true;
        }

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          !visited[nx][ny] &&
          storage[nx][ny] === '0'
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
    return false;
  };

  for (const request of requests) {
    const remove = [];

    if (request.length === 1) {
      // 명령어 길이 1개인 경우
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (newStorage[i][j] === request && check(newStorage, i, j)) {
            res += 1;
            remove.push([i, j]);
          }
        }
      }
    } else {
      // 길이 2개인 경우
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (newStorage[i][j] === request[0]) {
            res += 1;
            remove.push([i, j]);
          }
        }
      }
    }
    for (const [x, y] of remove) {
      newStorage[x][y] = '0';
    }
    // console.log('res', res);
    // console.log("remove", remove);
  }

  return n * m - res;
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
