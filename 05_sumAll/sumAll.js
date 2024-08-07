const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) & Number.isInteger(num2) & num1 > 0 & num2 > 0) {
        if (num1 < num2) {
            let sum = num1
            for (i = num1 + 1; i <= num2; i++) {
               sum = sum + i
            }
            return sum;
        } else {
            let sum = num2
            for (i = num2 + 1; i <= num1; i++) {
               sum = sum + i
            }
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
