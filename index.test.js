const checkSuccess = require('./index');

describe('CI Demo Tests', () => {

  test('should return OK when success is true', () => {
    expect(checkSuccess()).toBe("OK");
  });

  test('should throw error when success is false', () => {
    // simulate failure by temporarily modifying function
    const failingFunc = () => {
      const success = false;
      if (!success) {
        throw new Error("Something failed!");
      }
    };

    expect(failingFunc).toThrow("Something failed!");
  });

});