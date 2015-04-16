import assert from 'assert';
import jwt from '../src/jwt';
import co from 'co';

describe('jsonwebtoken', () => {

  it('sign()', () => {
    var token = jwt.sign({ name: 'robo' }, 'shhhhh', { noTimestamp: true });
    assert.equal('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicm9ibyJ9.IvsSs2euRKi9a2CPiCb2YOm7z4mAfHx48CKikuxkJts', token);
  });

  it('verify()', () => {
    jwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicm9ibyJ9.IvsSs2euRKi9a2CPiCb2YOm7z4mAfHx48CKikuxkJts', 'shhhhh', (err, decoded) => {
      assert.equal(decoded.name, 'robo');
    });
  });

  it('yield verify()', () => {
    return co(function* () {
      var decoded = yield jwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicm9ibyJ9.IvsSs2euRKi9a2CPiCb2YOm7z4mAfHx48CKikuxkJts', 'shhhhh');
      assert.equal(decoded.name, 'robo');
    });
  });
});
