let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let returnArray = [];

  const answerFunc = (arr, commands) => {
    if (commands.length === 0) {
      return returnArray;
    }

    let first = commands[0];
    let newArray = arr.slice(first[0] - 1, first[1]);
    if (newArray.length !== 1) {
      newArray = newArray.sort((a, b) => a - b);
    }

    returnArray = [...returnArray, newArray[first[2] - 1]];
    commands.splice(0, 1);

    return [...answerFunc(arr, commands)];
  };

  let answer = answerFunc(array, commands);
  console.log(answer);
}

solution(array, commands);
