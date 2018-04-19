# node-pgparser [![Build Status](https://travis-ci.org/MGorkov/node-pgparser.svg?branch=master)](https://travis-ci.org/MGorkov/node-pgparser)
node-pgparser - Node.js wrapper for [libpg_query](https://github.com/lfittl/libpg_query) C library.

It parses the query and returns the parse tree or error object.

## Usage

You can install the `node-pgparser` module like any other module:

```
npm install node-pgparser
```

## Example

```js
const pgparser = require('node-pgparser');
console.log(pgparser('select 1'));
```
