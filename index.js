const Benchmark = require('benchmark');
const helpers = require('./helpers');
const quadratic = require('./tests/quadratic');
const binary = require('./tests/binary');
const bidirectional = require('./tests/bidirectional');

const suite = new Benchmark.Suite;

const unsorted = helpers.createNumberArray(10000, 1, 10);
const sorted = unsorted.sort((a, b) => a - b);

const desired = 8;

suite
    .add('Quadratic `for()`', function () {
        quadratic.for(unsorted, desired);
    })
    .add('Binary', function () {
        // must use a sorted array, so it's not comparable to bidirectional
        binary(sorted, desired);
    })
    .add('Bidirectional with [] cache', function () {
        bidirectional.array(unsorted, desired);
    })
    .add('Bidirectional with {} cache', function () {
        bidirectional.object(unsorted, desired);
    })
    .add('Bidirectional with Map() cache', function () {
        bidirectional.map(unsorted, desired);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': false });
