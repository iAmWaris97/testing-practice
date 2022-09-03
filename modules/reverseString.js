function reverseString(string) {
  const result = [...string].reverse().join('');
  return result
}

reverseString("Waris");

module.exports = reverseString;
