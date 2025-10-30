import { describe, expect, it } from "vitest";
import { RomanConverter } from "../src/roman-converter";

describe("Roman Converter Tests", () => {
  it("should throw an error if number equals 0", () => {
    const romanConverter = new RomanConverter();
    expect(() => romanConverter.convert(0)).toThrowError("Number must be between 1 and 3999");
  });

  it("should throw an error if number is greater than 3999", () => {
    const romanConverter = new RomanConverter();
    expect(() => romanConverter.convert(4000)).toThrowError("Number must be between 1 and 3999");
  });

  it("should convert 1 to I", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(1)).toBe("I");
  });

  it("should convert 2 to II", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(2)).toBe("II");
  });

  it("should convert 3 to III", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(3)).toBe("III");
  });

  it("should convert 4 to IV", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(4)).toBe("IV");
  });

  it("should convert 9 to IX", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(9)).toBe("IX");
  });

  it("should convert 58 to LVIII", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(58)).toBe("LVIII");
  });

  it("should convert 1994 to MCMXCIV", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(1994)).toBe("MCMXCIV");
  });

  it("should convert 3999 to MMMCMXCIX", () => {
    const romanConverter = new RomanConverter();
    expect(romanConverter.convert(3999)).toBe("MMMCMXCIX");
  });
});
