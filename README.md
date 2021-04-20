# node-pgparser [![Build Status](https://travis-ci.org/MGorkov/node-pgparser.svg?branch=master)](https://travis-ci.org/MGorkov/node-pgparser)
node-pgparser - Node.js wrapper for [libpg_query](https://github.com/lfittl/libpg_query) C library.

It parses the query and returns the parse tree or error object.

## Usage

You can install the `node-pgparser` module like any other module:

```
npm install node-pgparser
```

When you install this module, it builds parts of the PostgreSQL server source from [libpg_query](https://github.com/lfittl/libpg_query) project, and then statically links it to this module.

## Example

```js
const pgparser = require('node-pgparser');

let tree = pgparser('select 1');
if (tree instanceof Error) {
    console.log('Error parsing: ', tree);
} else {
    console.dir(tree, {depth: null});
}
```

## Result
```js
{
  version: 130002,
    stmts: [
    {
      stmt: {
        SelectStmt: {
          targetList: [
            {
              ResTarget: {
                val: {
                  A_Const: { val: { Integer: { ival: 1 } }, location: 7 }
                },
                location: 7
              }
            }
          ],
          limitOption: 'LIMIT_OPTION_DEFAULT',
          op: 'SETOP_NONE'
        }
      }
    }
  ]
}
```
