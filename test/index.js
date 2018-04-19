var pgparser = require('../');
var assert = require('assert');

describe('node-pgparser', function() {
  it('should parse a query', function() {
    assert.equal(typeof pgparser('select 1')[0].RawStmt.stmt.SelectStmt, 'object');
  });

  it('should parse a null', function() {
    assert(pgparser("select null")[0].RawStmt.stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.val.Null);
  });

  it('should parse an empty string', function() {
    assert(pgparser("select ''")[0].RawStmt.stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.val.String.str === '');
  });

  it('should not parse a bogus query', function() {
    assert.ok(pgparser('NOT A QUERY') instanceof Error);
  });
});
