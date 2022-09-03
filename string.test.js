const stringLength = require('./modules/stringLenght');

test('stringLength function should return the length of the string', () => {
  expect(stringLength("Waris")).toBe(5);
});