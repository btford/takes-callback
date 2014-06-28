var fnParams = require('fn-params');

var CALLBACK_NAMES = [
  'cb',
  'callback',
  'callback_',
  'fn',
  'done'
];

module.exports = function (fn) {
  var params = fnParams(fn);
  return CALLBACK_NAMES.indexOf(params[params.length -1]) !== -1;
};
