import { FizzBuzzCalculator } from '../src/fizzBuzzCalculator';

describe('FizzBuzzCalculatorクラスに対する単体テスト', () => {
  let fizzBuzzCalculator: FizzBuzzCalculator;

  beforeEach(() => {
    fizzBuzzCalculator = new FizzBuzzCalculator();
  });

  test.each([
    [3, 'Fizz'],
    [5, 'Buzz'],
    [15, 'FizzBuzz'],
    [2, '2'],
  ])('calculateメソッドに対して %i を渡したときに %s が返却されていることを確認するテスト', (input, expected) => {
    expect(fizzBuzzCalculator.calculate(input)).toBe(expected);
  });

  // console.logをモック化してprintNumbersメソッドのテストを行う
  test('printNumbers method', () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockImplementation(() => {});

    fizzBuzzCalculator.printNumbers(5);

    const expectedOutputs = ['1', '2', 'Fizz', '4', 'Buzz'];
    expectedOutputs.forEach((output, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, output);
    });
    
    logSpy.mockRestore();
  });
});
