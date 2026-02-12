const reverseString = function(text) {
    let output = "";
    for (let i = -1; i >= -text.length; i--) {
        output += text.at(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
