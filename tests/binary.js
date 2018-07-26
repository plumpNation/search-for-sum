/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search/binarySearch.js
 */

module.exports = function (sorted = [], desiredSum = 0) {
    let startIndex = 0;
    let endIndex = sorted.length - 1;

    for (let i = 0; i < sorted.length; i += 1) {
        while (startIndex < endIndex) {
            const middleIndex = startIndex + Math.floor((endIndex - startIndex) * .5);

            // If we've found the element just return its position.
            if (sorted[middleIndex] + sorted[i] === desiredSum) {
                return true;
            }

            // Decide which half to choose for seeking next: left or right one.
            if (sorted[middleIndex] + sorted[i] < desiredSum) {
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
