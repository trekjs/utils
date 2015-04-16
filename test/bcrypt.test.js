import assert from 'assert';
import bcrypt from '../src/bcrypt';
import co from 'co';

describe('bcrypt', () => {

  it('yield genSalt()', () => {
    return co(function* () {
      let salt = yield bcrypt.genSalt(10);
      assert.equal(29, salt.length);
    });
  });

  it('yield hash()', () => {
    return co(function* () {
      let salt = yield bcrypt.genSalt(10);
      let hash = yield bcrypt.hash('trek', 10);
      assert.notEqual(null, hash);
    });
  });

  it('yield compare()', () => {
    return co(function* () {
      let hash = yield bcrypt.hash('B4c0/\/', 1);
      let result = yield bcrypt.compare('B4c0/\/', hash);
      assert.equal(true, result);
    });
  });
});
