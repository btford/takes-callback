var assert = require('assert'),
    fs = require('fs'),
    takesCallback = require('./callback');

assert(takesCallback(function (a, b, c) { /* lalala */ }) === false);
assert(takesCallback({}) === false);
assert(takesCallback('') === false);

assert(takesCallback(function (cb) {}));
assert(takesCallback(fs.readFile));
