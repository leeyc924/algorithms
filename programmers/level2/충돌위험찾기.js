/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340211?language=javascript
 */

function solution(points, routes) {
  let answer = 0;
  const map = new Map();
  function save(timer, r, c) {
    const key = `${timer}-${r}-${c}`;
    const count = (map.get(key) ?? 0) + 1;
    map.set(key, count);
  }

  for (let i = 0; i < routes.length; i++) {
    const start = routes[i][0];
    let [r, c] = points[start - 1];
    let timer = 0;
    save(timer, r, c);
    for (let j = 1; j < routes[i].length; j++) {
      const end = routes[i][j];
      const [nr, nc] = points[end - 1];
      const rStep = nr > r ? 1 : -1;
      const cStep = nc > c ? 1 : -1;

      while (r !== nr) {
        timer++;
        r += rStep;
        save(timer, r, c);
      }

      while (c !== nc) {
        timer++;
        c += cStep;
        save(timer, r, c);
      }
    }
  }
  for (const count of map.values()) {
    if (count < 2) {
      continue;
    }
    answer++;
  }
  return answer;
}

console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [2, 4],
    ],
  ) === 1,
);
console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [4, 2],
      [4, 3],
    ],
  ) === 9,
);
console.log(
  solution(
    [
      [2, 2],
      [2, 3],
      [2, 7],
      [6, 6],
      [5, 2],
    ],
    [
      [2, 3, 4, 5],
      [1, 3, 4, 5],
    ],
  ) === 0,
);
