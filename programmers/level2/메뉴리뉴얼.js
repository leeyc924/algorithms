/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72411?language=javascript
 */
// n개(0..n-1) 중 k개를 선택하는 모든 인덱스 조합을 생성하는 제너레이터
function* combIndices(n, k) {
  if (k < 0 || k > n) {
    return;
  }
  const index = Array.from({ length: k }, (_, i) => i); // [0,1,...,k-1]
  yield index.slice(); // 첫 조합

  while (true) {
    let i = k - 1;
    // 뒤에서부터 올릴 수 있는 위치 찾기
    while (i >= 0 && index[i] === i + n - k) {
      i--;
    }
    if (i < 0) {
      return; // 끝
    }

    index[i]++;
    for (let j = i + 1; j < k; j++) {
      index[j] = index[j - 1] + 1;
    }
    yield index.slice(); // 필요 시 복사본 반환
  }
}

// 실제 원소 배열에 매핑해서 조합을 생성
function* combinations(arr, length) {
  for (const index of combIndices(arr.length, length)) {
    const pick = Array.from({ length });
    for (let i = 0; i < length; i++) {
      pick[i] = arr[index[i]];
    }
    yield pick;
  }
}

function solution(orders, course) {
  const answer = [];
  for (let i = 0; i < course.length; i++) {
    const result = {};
    let maxAlphabet = [];
    let max = 0;
    for (let j = 0; j < orders.length; j++) {
      const arr = orders[j].split('');
      for (const c of combinations(arr, course[i])) {
        const alphabet = c.sort().join('');
        if (result[alphabet]) {
          result[alphabet]++;
          if (max < result[alphabet]) {
            max = result[alphabet];
            maxAlphabet = [alphabet];
          } else if (max === result[alphabet]) {
            maxAlphabet.push(alphabet);
          }
        } else {
          result[alphabet] = 1;
        }
      }
    }
    answer.push(...maxAlphabet);
  }
  return answer.sort();
}

console.log(
  solution(
    ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
    [2, 3, 4],
  ).toString() === 'AC,ACDE,BCFG,CDE',
);
console.log(
  solution(
    ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'],
    [2, 3, 5],
  ).toString() === 'ACD,AD,ADE,CD,XYZ',
);
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]).toString() === 'WX,XY');
