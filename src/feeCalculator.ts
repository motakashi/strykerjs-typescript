export class FeeCalculator {
  calculateFee(age: number): number {
    if (age <= 12) {
      return 1000;
    } else if ( age <= 60 ) {
      return 1800;
    } else {
      return 1200;
    }
  }
}