const assert = require('assert');

const random = require('./index');
assert.ok(typeof random.randomQuote === 'function');