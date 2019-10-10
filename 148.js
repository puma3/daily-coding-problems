const reverser = A => {
  const newA = [...A].reverse();
  return newA;
};
const solution = n => {
  if (n == 0) return [];

  let l1 = ["0", "1"];
  let l2 = [];

  for (let i = 1; i < n; i++) {
    l2 = reverser(l1);
    l1 = l1.map(e => "0".concat(e));
    l2 = l2.map(e => "1".concat(e));

    l1 = l1.concat(l2);
  }

  return l1;
};

console.log(solution(3));
