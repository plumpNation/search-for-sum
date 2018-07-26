exports.array = function _array(unsorted = [], desiredSum = 0) {
    const compliments = [];

    let endIndex = unsorted.length - 1;
    let startIndex = 0;

    for (let startIndex = 0; startIndex < endIndex; startIndex += 1, endIndex -= 1) {
        if (unsorted[startIndex] + unsorted[endIndex] === desiredSum) {
            return true;
        }

        const compliment = desiredSum - unsorted[startIndex];

        if (compliments.indexOf(compliment) > -1) {
            return true;
        }

        compliments.push(compliment);
    }

    return false;
}

exports.object = function _object(unsorted = [], desiredSum = 0) {
    const compliments = {};

    let endIndex = unsorted.length - 1;
    let startIndex = 0;

    for (let startIndex = 0; startIndex < endIndex; startIndex += 1, endIndex -= 1) {
        if (unsorted[startIndex] + unsorted[endIndex] === desiredSum) {
            return true;
        }

        const compliment = desiredSum - unsorted[startIndex];

        if (compliments[compliment]) {
            return true;
        }

        compliments[compliment] = compliment;
    }

    return false;
}

exports.map = function _map(unsorted = [], desiredSum = 0) {
    const compliments = new Map();

    let endIndex = unsorted.length - 1;
    let startIndex = 0;

    for (let startIndex = 0; startIndex < endIndex; startIndex += 1, endIndex -= 1) {
        if (unsorted[startIndex] + unsorted[endIndex] === desiredSum) {
            return true;
        }

        const compliment = desiredSum - unsorted[startIndex];

        if (compliments.get(compliment)) {
            return true;
        }

        compliments.set(compliment, compliment)
    }

    return false;
}

exports.set = function _set(unsorted = [], desiredSum = 0) {
    const compliments = new Set();

    let endIndex = unsorted.length - 1;
    let startIndex = 0;

    for (let startIndex = 0; startIndex < endIndex; startIndex += 1, endIndex -= 1) {
        if (unsorted[startIndex] + unsorted[endIndex] === desiredSum) {
            return true;
        }

        const compliment = desiredSum - unsorted[startIndex];

        if (compliments.has(compliment)) {
            return true;
        }

        compliments.add(compliment)
    }

    return false;
}
