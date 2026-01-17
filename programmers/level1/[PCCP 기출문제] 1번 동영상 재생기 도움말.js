function padLeft(number) {
  if (typeof number !== 'number') {
    return `${number}`;
  }
  const str = number.toString();
  if (str.length < 2) {
    return `0${str}`;
  }
  return `${number}`;
}

function parseSecond(time) {
  const [m, s] = time.split(':');
  return Number(m) * 60 + Number(s);
}

function parseTime(second) {
  return `${padLeft(Math.floor(second / 60))}:${padLeft(second % 60)}`;
}

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340213
 */
function solution(video_len, pos, op_start, op_end, commands) {
  const video_len_sec = parseSecond(video_len);
  const pos_sec = parseSecond(pos);
  const op_start_sec = parseSecond(op_start);
  const op_end_sec = parseSecond(op_end);

  let result = pos_sec;
  for (let i = 0; i < commands.length; i++) {
    if (result >= op_start_sec && result <= op_end_sec) {
      result = op_end_sec;
    }
    const command = commands[i];
    if (command === 'next') {
      result = Math.min(result + 10, video_len_sec);
    } else {
      result = Math.max(result - 10, 0);
    }
    if (result >= op_start_sec && result <= op_end_sec) {
      result = op_end_sec;
    }
  }
  return parseTime(result);
}

console.log(
  solution('34:33', '13:00', '00:55', '02:55', ['next', 'prev']) === '13:00',
);
console.log(
  solution('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next']) ===
    '06:55',
);
console.log(solution('07:22', '04:05', '00:15', '04:07', ['next']) === '04:17');
