function solution(id_list, report, k) {
  let temp = [...id_list];
  let setReport = new Set(report);
  report = [...setReport];

  report = report.map((el) => {
    return el.split(" ");
  });
  //   console.log(report);

  let countObject = {};

  for (let i = 0; i < report.length; i++) {
    if (!countObject.hasOwnProperty(report[i][1])) {
      countObject[report[i][1]] = 1;
    } else {
      countObject[report[i][1]]++;
    }
  }
  //   console.log(countObject);

  let reporter = [];

  for (let key in countObject) {
    if (countObject[key] >= 2) {
      reporter = [...reporter, key];
    }
  }
  //   console.log(reporter);

  let reporterObject = {};
  for (let i = 0; i < report.length; i++) {
    for (let j = 0; j < reporter.length; j++) {
      if (reporter[j] === report[i][1]) {
        if (!reporterObject.hasOwnProperty(report[i][0])) {
          reporterObject[report[i][0]] = 1;
        } else {
          reporterObject[report[i][0]]++;
        }
      }
    }
  }
  //   let zeroArray = new Array(id_list.length).fill(0);
  //   console.log(zeroArray);
  //   console.log(reporterObject);
  //   console.log(id_list);

  temp = temp.map((el) => {
    for (let key in reporterObject) {
      if (el === key) {
        el = reporterObject[key];
        return el;
      }
    }
  });

  temp = temp.map((el) => {
    if (el === undefined) {
      el = 0;
      return el;
    } else {
      return el;
    }
  });
  console.log(temp);
  return temp;
}

let id_list = ["a", "b", "c", "d", "e"];
let report = [
  "a b",
  "b a",
  "a b",
  "a c",
  "c b",
  "c b",
  "e a",
  "e a",
  "d a",
  "a d",
  "c a",
  "b e",
];

solution(id_list, report, 1);
