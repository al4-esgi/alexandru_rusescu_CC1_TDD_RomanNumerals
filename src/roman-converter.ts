export class RomanConverter {
  private readonly romanNumerals: Array<{ value: number; symbol: string }> = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  private checkIfNumberToConvertIsValid(numberToConvert: number) {
    if (numberToConvert <= 0 || numberToConvert >= 4000) throw new Error("Number must be between 1 and 3999");
  }

  convert(numberToConvert: number) {
    let finalResult = "";

    this.checkIfNumberToConvertIsValid(numberToConvert);

    for (const { value, symbol } of this.romanNumerals) {
      while (numberToConvert >= value) {
        finalResult += symbol;
        numberToConvert -= value;
      }
    }

    return finalResult;
  }
}
