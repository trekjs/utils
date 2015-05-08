/*!
 * utils - token
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */


import { randomBytes } from 'mz/crypto';

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
function token(len = 20, encoding = 'hex') {
  return randomBytes(len)
    .then((buf) => {
      return buf.toString(encoding);
    });
}

export default token;
