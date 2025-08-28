/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258711?language=javascript
 */

function solution(edges) {
  const answer = [0, 0, 0, 0];
  const inout = {};
  for (let i = 0; i < edges.length; i++) {
    const [outside, inside] = edges[i];
    if (!inout[inside]) {
      inout[inside] = [0, 0];
    }
    if (!inout[outside]) {
      inout[outside] = [0, 0];
    }
    inout[inside][1] = inout[inside][1] + 1;
    inout[outside][0] = inout[outside][0] + 1;
  }

  // biome-ignore lint/complexity/noForEach: <>
  Object.entries(inout).forEach(([key, [outside, inside]]) => {
    if (outside >= 2 && inside === 0) {
      answer[0] = Number(key);
    } else if (outside === 0 && inside > 0) {
      answer[2] += 1;
    } else if (outside >= 2 && inside >= 2) {
      answer[3] += 1;
    }
  });
  answer[1] = inout[answer[0]][0] - answer[2] - answer[3];

  return answer;
}

console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ]).toString() === '2,1,1,0',
);
console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ]).toString() === '4,0,1,2',
);
