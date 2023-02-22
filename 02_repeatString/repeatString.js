const repeatString = function(char, num) {
    if (num < 0) return "ERROR";
    let sentence = ''
    for(let i = 0; i<num; i++) {
        sentence = sentence + char
    }
    return sentence
};

// Do not edit below this line
module.exports = repeatString;
