const stringLength = require('./modules/stringLenght');

test('stringLength function should return the length of the string', () => {
  expect(stringLength("Waris")).toBe(5);
});

test('String lenght should be between 1 to 10 characters', () => {
  expect(stringLength('')).toBe('String lengh is not in the expected range (1 to 10 characters long');
});

test('String lenght should be between 1 to 10 characters', () => {
  expect(stringLength('Waris Haleem not Shams Haleem')).toBe('String lengh is not in the expected range (1 to 10 characters long');
});