const binary = require('@mapbox/node-pre-gyp');
const path = require('path');
const binding_path = binary.find(path.resolve(path.join(__dirname,'./package.json')));
const { parse } = require(binding_path);

module.exports = (query) => {
    let result = parse(query);
    if (result instanceof Error) {
        return result;
    } else {
        try {
            return JSON.parse(result);
        } catch (err) {
            return err;
        }
    }
};
