var pgparser = require('../');
var assert = require('assert');

describe('node-pgparser', function() {
  it('should parse a query with positive value', function() {
    assert(pgparser('select 1').stmts[0].stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.ival.ival === 1);
  });

  it('should parse a query with negative value', function() {
    assert(pgparser('select -1').stmts[0].stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.ival.ival === -1);
  });

  it('should parse a query with zero value', function() {
    assert(pgparser('select 0').stmts[0].stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.ival.ival === 0);
  });

  it('should parse a null', function() {
    assert(pgparser("select null").stmts[0].stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.isnull);
  });

  it('should parse an empty string', function() {
    assert(pgparser("select ''").stmts[0].stmt.SelectStmt.targetList[0].ResTarget.val.A_Const.sval.sval === '');
  });

  it('should not parse a bogus query', function() {
    assert.ok(pgparser('NOT A QUERY') instanceof Error);
  });

  it('should parse a PL/pgSQL', function() {
    assert(pgparser('DO $$ BEGIN SELECT 1; END$$;', true)[0].PLpgSQL_function.action.PLpgSQL_stmt_block.body[0].PLpgSQL_stmt_execsql.sqlstmt.PLpgSQL_expr.query === 'SELECT 1');
  });
});
