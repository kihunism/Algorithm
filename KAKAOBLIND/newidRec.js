function solution(new_id) {
  let id = new_id.toLowerCase();

  const reg = /[a-z]/;
  const regNum = /[0-9]/;
  let id2 = [];
  for (let i = 0; i < id.length; i++) {
    if (
      id[i] === "-" ||
      id[i] === "." ||
      id[i] === "_" ||
      reg.test(id[i]) ||
      regNum.test(id[i])
    ) {
      id2 = [...id2, id[i]];
    }
  }
  id2 = id2.join("");
  let stack = [];

  for (let i = 0; i < id2.length; i++) {
    stack.push(id2[i]);
    if (
      stack[stack.length - 1] === stack[stack.length - 2] &&
      stack[stack.length - 2] === "."
    ) {
      stack.pop();
    }
  }
  id2 = stack.join("");

  const dotRemove = (str) => {
    if (str[0] !== "." && str[str.length - 1] !== ".") {
      return str;
    }

    if (str[0] === ".") {
      str = str.slice(1);
    }
    if (str[str.length - 1] === ".") {
      str = str.slice(0, -1);
    }

    return dotRemove(str);
  };

  id2 = dotRemove(id2);

  if (id2.length >= 16) {
    id2 = id2.slice(0, 15);
  }

  id2 = dotRemove(id2);
  if (id2.length === 0) {
    return "aaa";
  }

  if (id2.length === 1) {
    return `${id2}${id2}${id2}`;
  }
  if (id2.length === 2) {
    if (id2[0] === ".") {
      return `${id2[1]}${id2[1]}${id2[1]}`;
    }
    if (id2[1] === ".") {
      return `${id2[0]}${id2[0]}${id2[0]}`;
    }
    return `${id2}${id2[1]}`;
  }
  return id2;
}

let new_id = "z-+.^.";
solution(new_id);
