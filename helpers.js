module.exports = {
    createNumberArray
};

/**
 * Create an array of numbers.
 *
 * @param {number} numberOfItems
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 */
function createNumberArray(numberOfItems, min, max) {
    return Array.from(new Array(numberOfItems))
        .map(_ => Math.floor(Math.random() * (max - min + 1)) + min);
}
