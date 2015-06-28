/*!
 * utils - jwt
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

_jsonwebtoken2['default'].verifySync = _jsonwebtoken2['default'].verify;

_jsonwebtoken2['default'].verify = verify;

/**
 * Asynchronous verify the token.
 *
 * @example
 *  let result = yield jwt.verify(token, sign, options);
 *
 * @method
 * @param {String} token
 * @param {String} sign
 * @param {Object} [options]
 * @return {Function}
 */
function verify(token, sign, options) {
  return function (done) {
    _jsonwebtoken2['default'].verifySync(token, sign, options, done);
  };
}

exports['default'] = _jsonwebtoken2['default'];
module.exports = exports['default'];