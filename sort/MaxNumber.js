function solution(numbers) {
  let tempArray = [];

  tempArray = numbers.map((el, idx) => {
    return String(el)[0];
  });
  console.log(tempArray);
}

const numbers = [3, 30, 34, 5, 9];
solution(numbers);
