const getTheTitles = function(array) {
    output = [];
    for (item of array) {
        output.push(item["title"])
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
