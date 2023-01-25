const fizzBuzz = require('./index');

describe('FizzBuzz tests', () => {
  // This is just a starting point. Delete or update this test.
  test('Given input 1 should return the number', () => {
    const result = fizzBuzz(1);

    expect(result).toEqual(1);
  });
});