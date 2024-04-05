# node-pgparser
node-pgparser - Node.js wrapper for [libpg_query](https://github.com/lfittl/libpg_query) C library.

It parses the query and returns the parse tree or error object.

## Installation

```sh
npm install node-pgparser
```

Uses [node-pre-gyp](https://www.npmjs.com/package/@mapbox/node-pre-gyp) to download prebuild binaries from S3 Amazon.

Currently supports Nodejs v16,v18,v20 for Linux, Macos (x64 and arm64) and Windows. 

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
  version: 160001,
    stmts: [
    {
      stmt: {
        SelectStmt: {
          targetList: [
            {
              ResTarget: {
                val: { A_Const: { ival: { ival: 1 }, location: 7 } },
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

## Versions

| PG Major Version | libpg_query | Branch                                                       | npm
|--------------------------|-------------|--------------------------------------------------------------|---------|
| 16                       | 16-latest   | [`pg16`](https://github.com/MGorkov/node-pgparser/tree/pg16) | [`node-pgparser@16`](https://www.npmjs.com/package/node-pgparser/v/16.0.2)
| 15                       | 15-latest   | [`pg15`](https://github.com/MGorkov/node-pgparser/tree/pg15) | [`node-pgparser@15`](https://www.npmjs.com/package/node-pgparser/v/15.0.1)
| 14                       | 14-latest   | [`pg14`](https://github.com/MGorkov/node-pgparser/tree/pg14) | [`node-pgparser@14`](https://www.npmjs.com/package/node-pgparser/v/14.0.1)
| 13                       | 13-latest   | [`pg13`](https://github.com/MGorkov/node-pgparser/tree/pg13) | [`node-pgparser@13`](https://www.npmjs.com/package/node-pgparser/v/13.0.1)


