// test file for hello.js
const { hello } = require('./hello');
const assert = require('assert');

describe('hello function', () => {
    it('should return "hello world"', () => {
        const result = hello();
        assert.strictEqual(result, 'hello world');
    });
}
// test file for hello.js