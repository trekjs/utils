'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*!
 * utils - pbkdf2
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

var _mzCrypto = require('mz/crypto');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

/**
 * Generate a salt.
 *
 * @method
 * @param {Number} len
 * @param {String} encoding
 * @return {Promise} by default 32 of slat length.
 */
function genSalt() {
  var len = arguments[0] === undefined ? 16 : arguments[0];
  var encoding = arguments[1] === undefined ? 'hex' : arguments[1];

  return _token2['default'](len, encoding);
}

/**
 * Compare hash and  password + salt.
 *
 * @method
 * @param {String} hashstr
 * @param {String} password
 * @param {string} salt
 * @param {Number} [iterations] 1024
 * @param {Number} [keylen] 32
 * @param {String} [digest] sha256
 * @param {String} [encoding] hex
 * @return {Promise}
 */
function compare(hashstr, password, salt) {
  var iterations = arguments[3] === undefined ? 1024 : arguments[3];
  var keylen = arguments[4] === undefined ? 32 : arguments[4];
  var digest = arguments[5] === undefined ? 'sha256' : arguments[5];
  var encoding = arguments[6] === undefined ? 'hex' : arguments[6];

  return hash(password, salt, iterations, keylen, digest, encoding).then(function (data) {
    return hashstr === data;
  });
}

/**
 * Hash a password with salt.
 *
 * @method
 * @param {String} password
 * @param {string} salt
 * @param {Number} [iterations] 1024
 * @param {Number} [keylen] 32
 * @param {String} [digest] sha256
 * @param {String} [encoding] hex
 * @return {Promise} by default 64 of password_hash length.
 */
function hash(password, salt) {
  var iterations = arguments[2] === undefined ? 1024 : arguments[2];
  var keylen = arguments[3] === undefined ? 32 : arguments[3];
  var digest = arguments[4] === undefined ? 'sha256' : arguments[4];
  var encoding = arguments[5] === undefined ? 'hex' : arguments[5];

  return _mzCrypto.pbkdf2(password, salt, iterations, keylen, digest).then(function (buf) {
    return buf.toString(encoding);
  });
}

exports['default'] = {
  genSalt: genSalt, compare: compare, hash: hash
};
module.exports = exports['default'];