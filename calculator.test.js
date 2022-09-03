const calculator = require("./modules/calculator");

// to test add method
describe("Test calculator addition operation", () => {
  test("5 + 5 should result into 10", () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test("(-5) + 5 should result into 0", () => {
    expect(calculator.add(-5, 5)).toBe(0);
  });

  test("(-5) + (-5) should result into -10", () => {
    expect(calculator.add(-5, -5)).toBe(-10);
  });
});

// to test subtract method
describe("Test calculator subtraction operation", () => {
  test("5 - 5 should result into 0", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });

  test("(-5) - 5 should result into -10", () => {
    expect(calculator.subtract(-5, 5)).toBe(-10);
  });

  test("(-5) - (-5) should result into 0", () => {
    expect(calculator.subtract(-5, -5)).toBe(0);
  });
});

// to test multiply method
describe("Test calculator multiplication operation", () => {
  test("5 * 5 should result into 25", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test("(-5) * 5 should result into -25", () => {
    expect(calculator.multiply(-5, 5)).toBe(-25);
  });

  test("(-5) * (-5) should result into 25", () => {
    expect(calculator.multiply(-5, -5)).toBe(25);
  });
});

// to test divide method
describe("Test calculator division operation", () => {
  test("5 / 5 should result into 1", () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });

  test("(-5) / 5 should result into -1", () => {
    expect(calculator.divide(-5, 5)).toBe(-1);
  });

  test("(-5) / (-5) should result into 1", () => {
    expect(calculator.divide(-5, -5)).toBe(1);
  });
});
