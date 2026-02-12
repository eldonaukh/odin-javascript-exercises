const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";
  if (num == 0) return 0;

  if (num > 2) {
    let last = 1;
    let current = 1;
    let temp = 0;
    let count = 2;
    while (count < num) {
      temp = current + 0;
      current += last;
      last = temp + 0;
      count += 1;
    }
    return current;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = fibonacci;
