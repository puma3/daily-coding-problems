const canBePartitioned = L => {
  const sum = L.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const partSum = sum / 2;
  const sortedList = L.sort();
  let addedNums = {};
  let newSum = 0;

  L.forEach(e => {
    let iSum = newSum + e;
  });
};

console.log(canBePartitioned([15, 5, 20, 10, 35, 15, 10]));
console.log(canBePartitioned([15, 5, 20, 10, 35]));
