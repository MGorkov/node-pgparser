const { parse } = require('bindings')('parser');

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
