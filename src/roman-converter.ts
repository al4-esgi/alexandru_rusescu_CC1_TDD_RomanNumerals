export class RomanConverter {
  private readonly romanNumerals: Array<{ value: number; symbol: string }> = [
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  convert(number: number) {
    let result = "";

    for (const { value, symbol } of this.romanNumerals) {
      while (number >= value) {
        result += symbol;
        number -= value;
      }
    }

    return result;
  }
}
