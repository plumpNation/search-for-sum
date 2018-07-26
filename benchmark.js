const Benchmark = require('benchmark');
const createNumberArray = require('./helpers').createNumberArray;
const quadratic = require('./quadratic').test;

const suite = new Benchmark.Suite;

const values = createNumberArray(10000, 1, 10);

suite
    .add('Quadratic', function () {
        quadratic(values, 8);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
