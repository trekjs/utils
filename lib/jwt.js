'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*!
 * utils - jwt
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

var _jwt = require('jsonwebtoken');

var _jwt2 = _interopRequireWildcard(_jwt);

_jwt2['default'].verifySync = _jwt2['default'].verify;

_jwt2['default'].verify = verify;

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
    _jwt2['default'].verifySync(token, sign, options, done);
  };
}

exports['default'] = _jwt2['default'];
module.exports = exports['default'];