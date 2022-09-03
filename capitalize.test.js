const capitalize = require("./modules/capitalize");

describe("Test if first letter of a string is capitalized", () => {
  test('String "waris" should return "Waris"', () => {
    expect(capitalize("waris")).toBe("Waris");
  });
});
