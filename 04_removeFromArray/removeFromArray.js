const removeFromArray = function() {
    const arr = arguments[0];  // The first argument is the array
    const valuesToRemove = Array.prototype.slice.call(arguments, 1);  // All other arguments are the values to remove

    return arr.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;