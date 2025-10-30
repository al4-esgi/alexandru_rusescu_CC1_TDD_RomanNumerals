import { describe, expect, it } from "vitest";
import { RomanConverter } from "../src/roman-converter";

describe("Roman Converter Tests", () => {
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
});
