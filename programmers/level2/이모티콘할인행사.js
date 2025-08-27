/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150368?language=javascript
 */

function permutationWithRep(arr, length) {
  const result = [];

  function dfs(current) {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      current.push(arr[i]);
      dfs(current);
      current.pop();
    }
  }
  dfs([]);

  return result;
}

function calculateDiscountedPrice(users, discounts, emoticons) {
  const totalResult = [0, 0];
  for (let i = 0; i < users.length; i++) {
    const [maxDiscount, maxPrice] = users[i];
    let totalPrice = 0;
    const result = [0, 0];
    for (let j = 0; j < discounts.length; j++) {
      const discount = discounts[j];
      if (discount < maxDiscount) {
        continue;
      }
      const discountedEmoticon = (emoticons[j] * (100 - discount)) / 100;
      totalPrice += discountedEmoticon;
      if (totalPrice >= maxPrice) {
        result[0]++;
        result[1] = 0;
        break;
      }
    }
    if (result[0] === 0) {
      result[1] += totalPrice;
    }
    totalResult[0] += result[0];
    totalResult[1] += result[1];
  }
  return totalResult;
}

function solution(users, emoticons) {
  const discountList = [10, 20, 30, 40];
  const allDiscounts = permutationWithRep(discountList, emoticons.length);

  let answer = [0, 0];
  for (let j = 0; j < allDiscounts.length; j++) {
    const result = calculateDiscountedPrice(users, allDiscounts[j], emoticons);
    if (answer[0] < result[0]) {
      answer = result;
    } else if (answer[0] === result[0] && answer[1] < result[1]) {
      answer = result;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000],
  ).toString() === '1,5400',
);
console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900],
  ).toString() === '4,13860',
);
