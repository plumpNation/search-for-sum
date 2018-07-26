const Benchmark = require('benchmark');
const helpers = require('./helpers');
const quadratic = require('./tests/quadratic');
const binary = require('./tests/binary');
const bidirectional = require('./tests/bidirectional');

const suite = new Benchmark.Suite;

const unsorted = helpers.createNumberArray(10000, 1, 10);
const sorted = unsorted.sort((a, b) => a - b);

const desired = 8;

// We're using .slice() to avoid mutating the original test arrays.
// We do it here to avoid it affecting the test results.
// @see https://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop
const testData = [
    unsorted.slice(),
    sorted.slice(),
    unsorted.slice(),
    unsorted.slice(),
    unsorted.slice(),
    unsorted.slice(),
    unsorted.slice()
];

suite
    .add('Quadratic `for()`', function () {
        // This test simply doesn't take into consideration if the data
        // is sorted or unsorted.
        quadratic.for(testData[0], desired);
    })
    .add('Binary', function () {
        // must use a sorted array, so it's not comparable to bidirectional
        binary.sorted(testData[1], desired);
    })
    .add('Binary unsorted', function () {
        // uses an unsorted array, so it's not comparable to bidirectional
        binary.unsorted(testData[2], desired);
    })
    .add('Bidirectional with [] cache', function () {
        bidirectional.array(testData[3], desired);
    })
    .add('Bidirectional with {} cache', function () {
        bidirectional.object(testData[4], desired);
    })
    .add('Bidirectional with Map() cache', function () {
        bidirectional.map(testData[5], desired);
    })
    .add('Bidirectional with Set() cache', function () {
        bidirectional.set(testData[6], desired);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': false });
