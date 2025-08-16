/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118667?language=javascript
 */
function solution(queue1, queue2) {
  let answer = 0;
  let queue1Sum = 0;
  let queue2Sum = 0;
  for (let i = 0; i < queue1.length; i++) {
    queue1Sum += queue1[i];
  }
  for (let i = 0; i < queue2.length; i++) {
    queue2Sum += queue2[i];
  }
  const target = (queue1Sum + queue2Sum) / 2;

  let leftIndex = 0;
  let rightIndex = queue1.length;
  const queue = queue1.concat(queue2);
  const maxIndex = queue.length;

  let sum = queue1Sum;
  while (sum !== target && leftIndex < maxIndex && rightIndex < maxIndex) {
    answer++;

    if (sum > target) {
      sum -= queue[leftIndex];
      leftIndex++;
    } else {
      sum += queue[rightIndex];
      rightIndex++;
    }
  }

  if (sum !== target) {
    return -1;
  }

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]) === 2);
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]) === 7);
console.log(solution([1, 1], [1, 5]) === -1);
