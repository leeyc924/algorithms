/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
 */
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length > 0 ? 0 : 1;
}

console.log(solution('baabaa') === 1);
console.log(solution('cdcd') === 0);
