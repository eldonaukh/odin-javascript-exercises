const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR"
    }
    let i = 0;
    let output =  "";
    while (i<num) {
        output += text;
        i += 1;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
