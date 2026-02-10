/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/388351?language=javascript
 */
function parseTimeToMinute(time) {
  return Math.floor(time / 100) * 60 + (time % 100);
}

function solution(schedules, timelogs, startday) {
  let count = 0;
  const timelog = timelogs;
  const hopeMinuteList = schedules.map(schedule => {
    const minute = parseTimeToMinute(schedule);
    return minute + 10;
  });

  const day = [];
  for (let i = 0; i < 7; i++) {
    day.push((startday + i) % 7);
  }

  for (let i = 0; i < timelogs.length; i++) {
    let flag = true;
    for (let j = 0; j < timelogs[i].length; j++) {
      if (day[j] === 0 || day[j] === 6) {
        continue;
      }
      const logMinute = parseTimeToMinute(timelogs[i][j]);
      if (logMinute > hopeMinuteList[i]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }

  return count;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5,
    3,
  ),
);
console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1,
    2,
  ),
);
