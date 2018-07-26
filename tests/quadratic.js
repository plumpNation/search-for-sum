exports.some = function _some(values = [], desiredSum = 0) {
    return values.some((value1, index1) => {
        values.some((value2, index2) => (index1 !== index2) && (value1 + value2 === desiredSum));
    });
}

exports.for = function _for(values = [], desiredSum = 0) {
    for (let i = 0; i < values.length; i += 1) {
        for (let j = 0; j < values.length; j += 1) {
            if ((i !== j) && (values[i] + values[j] === desiredSum)) return true;
        }
    }

    return false;
}
