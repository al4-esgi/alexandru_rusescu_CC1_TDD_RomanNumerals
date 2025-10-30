export class RomanConverter {
  convert(number: number): string {
    const romans = ["", "I", "II", "III"];
    return romans[number] ?? "";
  }
}
