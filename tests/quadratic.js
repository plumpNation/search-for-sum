module.exports = function test(values = [], desired = 0) {
    return values.some((value1, index1) => {
        values.some((value2, index2) => (index1 !== index2) && (value1 + value2 === desired));
    });
}
