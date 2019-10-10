const solution = (L, k) => {
  let addsUp = false;
  let differences = {};

  L.forEach(n => {
    if (differences[n] !== null) {
      addsUp = true;
      return;
    }

    differences[k - n] = true;
  });

  return addsUp;
};

console.log(solution([10, 15, 3, 7], 17));
