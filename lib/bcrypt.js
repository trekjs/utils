'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

/*!
 * utils - bcrypt
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

var _thenifyAll = require('thenify-all');

var _thenifyAll2 = _interopRequireWildcard(_thenifyAll);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireWildcard(_bcrypt);

_thenifyAll2['default'](_bcrypt2['default'], exports, ['genSalt', 'compare', 'hash']);