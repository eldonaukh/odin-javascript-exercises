const removeFromArray = function (array, ...others) {
  let output = [];
  main: for (const item of array) {
    for (const other of others) {
      if (item === other) {
        continue main;
      }
    }

    output.push(item);
  }
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
