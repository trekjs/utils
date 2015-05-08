/*!
 * utils - pbkdf2
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

import slowEquals from 'slow-equals';
import { pbkdf2 } from 'mz/crypto';
import token from './token';

/**
 * Generate a salt.
 *
 * @method
 * @param {Number} len
 * @param {String} encoding
 * @return {Promise} by default 32 of slat length.
 */
function genSalt(len = 16, encoding = 'hex') {
  return token(len, encoding);
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
function compare(hashstr, password, salt, iterations = 1024, keylen = 32, digest = 'sha256', encoding = 'hex') {
  return hash(password, salt, iterations, keylen, digest, encoding).then((data) => {
    return slowEquals(hashstr, data);
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
function hash(password, salt, iterations = 1024, keylen = 32, digest = 'sha256', encoding = 'hex') {
  return pbkdf2(password, salt, iterations, keylen, digest).then((buf) => {
    return buf.toString(encoding);
  });
}

export default {
  genSalt, compare, hash
};
