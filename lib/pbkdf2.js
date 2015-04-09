'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*!
 * utils - pbkdf2
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

var _pbkdf2$randomBytes = require('mz/crypto');

/**
 * Generate a salt.
 *
 * @method
 * @param {Number} len
 * @param {String} encoding
 * @return {String} by default 32 of slat length.
 */
function genSalt() {
  var len = arguments[0] === undefined ? 16 : arguments[0];
  var encoding = arguments[1] === undefined ? 'hex' : arguments[1];

  return _pbkdf2$randomBytes.randomBytes(len).then(function (buf) {
    return buf.toString(encoding);
  });
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
 * @return {Boolean}
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
 * @return {String} by default 64 of password_hash length.
 */
function hash(password, salt) {
  var iterations = arguments[2] === undefined ? 1024 : arguments[2];
  var keylen = arguments[3] === undefined ? 32 : arguments[3];
  var digest = arguments[4] === undefined ? 'sha256' : arguments[4];
  var encoding = arguments[5] === undefined ? 'hex' : arguments[5];

  return _pbkdf2$randomBytes.pbkdf2(password, salt, iterations, keylen, digest).then(function (buf) {
    return buf.toString(encoding);
  });
}

exports.genSalt = genSalt;
exports.compare = compare;
exports.hash = hash;