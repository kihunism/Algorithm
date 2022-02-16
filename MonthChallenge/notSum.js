function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
  }
  console.log(sum);
  return 45 - sum;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
