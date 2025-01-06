const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";
  if (Math.floor(start) !== start || Math.floor(end) !== end) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  result = 0;
  if (start < end) {
    for (let i = start; i <= end; i++) {
      result += i;
    }
  } else {
    for (let i = end; i <= start; i++) {
        result += i;
      }
  }
    
  return result;
};

// Do not edit below this line
module.exports = sumAll;
