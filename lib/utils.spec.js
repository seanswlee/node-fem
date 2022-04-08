const { isNumEven } = require('./utils');

describe('isNumEven(num)', () => {
  test('Should return true when passed 100', () => {
    expect(isNumEven(100)).toBe(true);
  });

  test('Should return false when passed 1', () => {
    expect(isNumEven(1)).toBe(false);
  });
});
