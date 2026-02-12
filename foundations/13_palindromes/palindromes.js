const palindromes = function (text) {
  onlyText = [];
  for (const char of text.split("")) {
    if (char.match(/[a-z0-9]/i)) {
      onlyText.push(char.toLowerCase());
    }
  }
  console.log(onlyText);
  const mid = Math.floor(onlyText.length / 2);
  for (let i = 0; i <= mid; i++) {    
    if (onlyText[i] != onlyText[onlyText.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
