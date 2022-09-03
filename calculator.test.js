const calculator = require("./modules/calculator");

describe("Test calculator operations", () => {
  test("5 + 5 should result into 10", () => {
    expect(calculator.add(5, 5)).toBe(10);
  });
  // 
  test("5 - 5 should result into 0", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });
  // 
  test("5 * 5 should result into 25", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
  // 
  test("5/5 should result into 1", () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });
});
