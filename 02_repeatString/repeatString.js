
const repeatString = function(text, number) {
    let textString = "";
    if (number < 0) {
        textString += 'ERROR';
    } else {
        for (i = 1; i <= number; i++) {
            textString += text; 
        }
    }
    return textString;
};

repeatString("hey", 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);

// Do not edit below this line
module.exports = repeatString;
