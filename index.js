const Benchmark = require('benchmark');
const helpers = require('./helpers');
const quadratic = require('./tests/quadratic');
const binary = require('./tests/binary');

const suite = new Benchmark.Suite;

const unsorted = helpers.createNumberArray(10000, 1, 10);
const sorted = unsorted.sort();

suite
    .add('Quadratic `for()`', function () {
        quadratic.for(sorted, 8);
    })
    .add('Binary', function () {
        binary(sorted, 8);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': false });
