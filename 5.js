const cons = (a, b) => {
  const pair = f => {
    return f(a, b);
  };

  return pair;
};

const car = pair => {
  return pair((a, b) => a);
};
const cdr = pair => {
  return pair((a, b) => b);
};

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
