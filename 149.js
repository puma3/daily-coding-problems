let L = [1, 2, 3, 4, 5];

const sum = (i, j) => {
  const subArray = L.slice(i, j);
  return subArray.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 3));
