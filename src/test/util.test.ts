const { phoneNrsAreEqual } = require("../app/util");

describe("phone numbers are equal", () => {
  test("phone number is equal", () => {
    const result = phoneNrsAreEqual("0911918548", "0911918548");
    expect(result).toBe(true);
  });

  test("different phone number is not equal", () => {
    const result = phoneNrsAreEqual("0911918548", "0944918547");
    expect(result).toBe(false);
  });

  test("phone number with blank spaces is equal", () => {
    const result = phoneNrsAreEqual("  0911 918 5 4 8", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with dashes is equal", () => {
    const result = phoneNrsAreEqual("0911-918-548", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with underscores is equal", () => {
    const result = phoneNrsAreEqual("0911_918_548", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with dots is equal", () => {
    const result = phoneNrsAreEqual("0911.918.548", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with slashes is equal", () => {
    const result = phoneNrsAreEqual("0911918/548", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with state code (+) is equal", () => {
    const result = phoneNrsAreEqual("+421911918548  ", "0911918548");
    expect(result).toBe(true);
  });

  test("phone number with state code (00) is equal", () => {
    const result = phoneNrsAreEqual("00421911918547", "0911918547");
    expect(result).toBe(true);
  });

  test("phone number with state code in paranthesis is equal", () => {
    const result = phoneNrsAreEqual("(+421)911918547", "0911918547");
    expect(result).toBe(true);
  });

  test("phone number withou 0 at the beginning", () => {
    const result = phoneNrsAreEqual("911918547", "0911918547");
    expect(result).toBe(true);
  });

  test("phone number with various characters is equal", () => {
    const result = phoneNrsAreEqual("(+421)/9-11 918-548", "0911918548");
    expect(result).toBe(true);
  });
});
