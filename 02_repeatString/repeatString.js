const repeatString = function(string,num) {
    
    if (num < 0) return 'ERROR';
    let newstring = '';

    for(i=0;i<num;i++){
        newstring += string;
    }
    return newstring
};

// Do not edit below this line
module.exports = repeatString;
