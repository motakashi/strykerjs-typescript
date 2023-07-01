export class FizzBuzzCalculator {
  calculate(n: number): string {
    let result = "";

    if (n % 3 === 0) {
      result += "Fizz";
    }
    
    if (n % 5 === 0) {
      result += "Buzz";
    }

    return result || n.toString();
  }

  printNumbers(max: number): void {
    for (let i = 1; i <= max; i++) {
      console.log(this.calculate(i));
    }
  }
}