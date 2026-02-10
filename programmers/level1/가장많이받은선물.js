/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712?language=javascript
 */
function solution(friends, gifts) {
  const index = friends.reduce((acc, cur, i) => ({ ...acc, [cur]: i }), {});
  const giftTable = Array.from({ length: friends.length }).map(() =>
    Array.from({ length: friends.length }).fill(0),
  );
  const giftPoint = Array.from({ length: friends.length }).fill(0);

  const point = Array.from({ length: friends.length }).fill(0);

  for (let i = 0; i < gifts.length; i++) {
    const [give, recive] = gifts[i].split(' ');
    giftTable[index[give]][index[recive]]++;
    giftPoint[index[give]]++;
    giftPoint[index[recive]]--;
  }

  for (let i = 0; i < giftTable.length - 1; i++) {
    for (let j = i + 1; j < giftTable[i].length; j++) {
      const giveCnt = giftTable[i][j];
      const reciveCnt = giftTable[j][i];

      if ((giveCnt > 0 || reciveCnt > 0) && giveCnt !== reciveCnt) {
        if (giveCnt > reciveCnt) {
          point[i]++;
        } else {
          point[j]++;
        }
      } else if (giveCnt === reciveCnt) {
        if (giftPoint[i] > giftPoint[j]) {
          point[i]++;
        } else if (giftPoint[i] < giftPoint[j]) {
          point[j]++;
        }
      }
    }
  }

  return Math.max(...point);
}

console.log(
  solution(
    ['muzi', 'ryan', 'frodo', 'neo'],
    [
      'muzi frodo',
      'muzi frodo',
      'ryan muzi',
      'ryan muzi',
      'ryan muzi',
      'frodo muzi',
      'frodo ryan',
      'neo muzi',
    ],
    2,
  ),
);

console.log(
  solution(
    ['joy', 'brad', 'alessandro', 'conan', 'david'],
    [
      'alessandro brad',
      'alessandro joy',
      'alessandro conan',
      'david alessandro',
      'alessandro david',
    ],
    4,
  ),
);
console.log(
  solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a'], 0),
);
