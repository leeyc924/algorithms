/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/389480?language=javascript
 */

// A A A 1 2 2    5 / 0
// A A B 1 2 1    3 / 3
// A B A 1 3 2    3 / 3
// A B B 1 3 1    1 / 4
// B A B 2 2 1    2 / 3
// B A A 2 2 2    4 / 2
// B B A 2 3 1    1 / 5
// B B B 2 3 1    0 / 6

function solution(info, n, m) {
  const sum = new Array(2 ** info.length).fill([]);
  for (let i = 0; i < 2 ** info.length; i++) {
    const binary = i.toString(2).padStart(info.length, '0');
    let sumA = 0;
    let sumB = 0;

    for (let j = 0; j < info.length; j++) {
      if (binary[j] === '0') {
        sumA += info[j][0];
      } else {
        sumB += info[j][1];
      }
    }

    sum[i] = [sumA, sumB];
  }

  let minA = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sum.length; i++) {
    const [a, b] = sum[i];

    // a 와 b 가 모두 최소흔적
    if (a < n && b < m) {
      minA = Math.min(minA, a);
    }
  }

  if (minA === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return minA;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4,
  ) === 2,
);
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    1,
    7,
  ) === 0,
);
console.log(
  solution(
    [
      [3, 3],
      [3, 3],
    ],
    7,
    1,
  ) === 6,
);
console.log(
  solution(
    [
      [3, 3],
      [3, 3],
    ],
    6,
    1,
  ) === -1,
);
