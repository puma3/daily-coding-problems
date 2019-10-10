const test = (...params) => {
  console.log(">>> solution(", ...params, ")");
  console.log(`    => ${solution(...params)}\n`);
};

const solution = A => {
  const arrayLength = A.length;
  return A.map((x, idx) => {
    const nextElems = A.slice(idx + 1, arrayLength);
    return nextElems.filter(e => e < x).length;
  });
};

test([3, 4, 9, 6, 1]);
