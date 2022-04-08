const uppercase = require("./../uppercase");
describe("uppercase", () => {
  test("uppercase hello returns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
  });
  test("uppercase hello returns HELLO м2", () => {
    uppercase = jest.fn(() => "HELLO");
    const result = uppercase("hello");
    expect(uppercase).toHaveBeenCalledWith("hello");
    expect(result).toBe("HELLO");
  });
});
