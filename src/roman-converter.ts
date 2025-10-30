export class RomanConverter {
  convert(number: number): string {
    const romans = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    return romans[number] ?? "";
  }
}
