import assert from 'assert';
import pbkdf2 from '../src/pbkdf2';
import co from 'co';

describe('pbkdf2', () => {

  it('yield genSalt()', () => {
    return co(function* () {
      let salt = yield pbkdf2.genSalt(10);
      assert.equal(20, salt.length);
    });
  });

  it('yield hash()', () => {
    return co(function* () {
      let salt = yield pbkdf2.genSalt(10);
      let hash = yield pbkdf2.hash('trek', salt);
      assert.notEqual(null, hash);
    });
  });

  it('yield compare()', () => {
    return co(function* () {
      let salt = yield pbkdf2.genSalt(10);
      let hash = yield pbkdf2.hash('B4c0/\/', salt);
      let result = yield pbkdf2.compare(hash, 'B4c0/\/', salt);
      assert.equal(true, result);
    });
  });
});
