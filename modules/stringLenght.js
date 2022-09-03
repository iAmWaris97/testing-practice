function stringLength(string) {
  if (string.length < 1 || string.length > 10) return 'String lengh is not in the expected range (1 to 10 characters long';
  return string.length;
}

module.exports = stringLength;
