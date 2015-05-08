'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*!
 * utils - token
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

var _mzCrypto = require('mz/crypto');

/*
 * Asynchronous generate the token.
 *
 * @example
 *  let tokenPromise = yield token();
 *
 * @param {Number} len, 20 by default
 * @param {String} encoding, hex by default
 * @return {Promise} 40 length hex string by default
 */
function token() {
  var len = arguments[0] === undefined ? 20 : arguments[0];
  var encoding = arguments[1] === undefined ? 'hex' : arguments[1];

  return _mzCrypto.randomBytes(len).then(function (buf) {
    return buf.toString(encoding);
  });
}

exports['default'] = token;
module.exports = exports['default'];