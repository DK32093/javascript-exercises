const removeFromArray = function(arr, ...rem) {
    arr = arr.filter(function(el) {
        return !rem.includes(el);
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
