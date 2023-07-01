import { FeeCalculator } from './../src/feeCalculator';

describe('FeeCalculator', () => {
  let calculator: FeeCalculator;

  beforeEach(() => {
    calculator = new FeeCalculator();
  });

  test.each([
    [12, 1000], // 12歳以下の料金は1000円
    [13, 1800], // 13歳から60歳までの料金は1800円
    [60, 1800], // 13歳から60歳までの料金は1800円
    [61, 1200], // 61歳以上の料金は1200円
  ])('calculateFee(%i) returns %i', (age, expected) => {
    expect(calculator.calculateFee(age)).toBe(expected);
  });
});
