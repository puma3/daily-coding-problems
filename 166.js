const test = (...params) => {
  console.log(">>> solution(", ...params, ")");
  console.log(`    => ${solution(...params)}\n`);
};

class Iterator {
  constructor(initializer) {
    this.array = initializer;
    this.outer_index = 0;
    this.inner_index = 0;
  }

  findNext() {
    let innerArray = this.array[this.outer_index];
    if (!innerArray) return false;

    while (innerArray) {
      if (!innerArray[this.inner_index]) {
        this.inner_index = 0;
        innerArray = this.array[++this.outer_index];
      } else {
        this.inner_index++;
      }
    }

    return true;
  }

  hasNext() {
    if (
      this.array[this.outer_index] &&
      this.array[this.outer_index][this.inner_index]
    )
      return true;
    else return this.findNext();
  }

  next() {
    let elem =
      this.array[this.outer_index] &&
      this.array[this.outer_index][this.inner_index];

    const found_next = this.findNext();

    if (!elem && found_next) {
      elem =
        this.array[this.outer_index] &&
        this.array[this.outer_index][this.inner_index];
    }

    return elem;
  }
}

const solution = A => {
  const it = new Iterator(A);
  while (it.hasNext()) {
    console.log(it.next());
  }
};

test([[1, 2], [3], [], [4, 5, 6]]);
test([[], [], [], [1, 2], [], [3]]);
