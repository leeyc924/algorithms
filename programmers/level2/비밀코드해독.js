/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/388352?language=javascript
 */
function solution(n, q, ans) {
  let answer = 0;

  for (let i1 = 1; i1 <= n - 4; i1++) {
    for (let i2 = i1 + 1; i2 <= n - 3; i2++) {
      for (let i3 = i2 + 1; i3 <= n - 2; i3++) {
        for (let i4 = i3 + 1; i4 <= n - 1; i4++) {
          for (let i5 = i4 + 1; i5 <= n; i5++) {
            const tempArray = [i1, i2, i3, i4, i5];
            const m = q.length;
            let check = 0;
            for (let j = 0; j < m; j++) {
              const qArray = q[j];
              let count = 0;
              for (let k = 0; k < qArray.length; k++) {
                if (tempArray.includes(qArray[k])) {
                  count++;
                }
              }
              if (count === ans[j]) {
                check++;
              }
            }
            if (check === m) {
              answer++;
            }
          }
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(
    10,
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [3, 7, 8, 9, 10],
      [2, 5, 7, 9, 10],
      [3, 4, 5, 6, 7],
    ],
    [2, 3, 4, 3, 3],
  ) === 3,
);

console.log(
  solution(
    15,
    [
      [2, 3, 9, 12, 13],
      [1, 4, 6, 7, 9],
      [1, 2, 8, 10, 12],
      [6, 7, 11, 13, 15],
      [1, 4, 10, 11, 14],
    ],
    [2, 1, 3, 0, 1],
  ) === 5,
);
