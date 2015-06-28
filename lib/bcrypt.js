/*!
 * utils - bcrypt
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _thenifyAll = require('thenify-all');

var _thenifyAll2 = _interopRequireDefault(_thenifyAll);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

(0, _thenifyAll2['default'])(_bcrypt2['default'], exports, ['genSalt', 'compare', 'hash']);