const { add } = require('./hello');

test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4);
});
