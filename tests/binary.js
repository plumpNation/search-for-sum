/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search/binarySearch.js
 */

exports.sorted = function _sorted(values = [], desiredSum = 0) {
    let startIndex = 0;
    let endIndex = values.length - 1;

    for (let i = 0; i < values.length; i += 1) {
        while (startIndex < endIndex) {
            const middleIndex = startIndex + Math.floor((endIndex - startIndex) * .5);

            // If we've found the element just return its position.
            if (values[middleIndex] + values[i] === desiredSum) {
                return true;
            }

            // Decide which half to choose for seeking next: left or right one.
            if (values[middleIndex] + values[i] < desiredSum) {
              // Go to the right half of the array.
              startIndex = middleIndex + 1;

            } else {
              // Go to the left half of the array.
              endIndex = middleIndex - 1;
            }
        }
    }

    return false;
}

exports.unsorted = function _unsorted(values = [], desiredSum = 0) {
    // NOTE: We are sorting the values array here, this is the only difference
    // between this and `sorted`.
    values.sort(sortNumbers);

    let startIndex = 0;
    let endIndex = values.length - 1;

    for (let i = 0; i < values.length; i += 1) {
        while (startIndex < endIndex) {
            const middleIndex = startIndex + Math.floor((endIndex - startIndex) * .5);

            // If we've found the element just return its position.
            if (values[middleIndex] + values[i] === desiredSum) {
                return true;
            }

            // Decide which half to choose for seeking next: left or right one.
            if (values[middleIndex] + values[i] < desiredSum) {
              // Go to the right half of the array.
              startIndex = middleIndex + 1;

            } else {
              // Go to the left half of the array.
              endIndex = middleIndex - 1;
            }
        }
    }

    return false;
}

function sortNumbers(a, b) {
    return a - b;
}
