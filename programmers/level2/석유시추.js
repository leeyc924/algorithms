/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250136?language=javascript
 */

function solution(land) {
  const N = land.length;
  const M = land[0].length;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = Array(N)
    .fill()
    .map(_ => new Array(M).fill(0));
  const oils = Array(M).fill(0);

  function isValid(x, y) {
    return x >= 0 && x < N && y >= 0 && y < M;
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = true;
    let size = 0;
    const columnSet = new Set();

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      size++;
      columnSet.add(y);
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (!isValid(nx, ny)) {
          continue;
        }
        if (land[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }

    for (const column of columnSet) {
      oils[column] += size;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  let max = 0;
  for (let i = 0; i < M; i++) {
    max = Math.max(oils[i], max);
  }
  return max;
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ]) === 9,
);
console.log(
  solution([
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ]) === 16,
);
