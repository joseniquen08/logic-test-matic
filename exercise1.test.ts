import { fibonacci } from './exercise1';

describe('exercise 1', () => {

  test('valid index', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('invalid index', () => {
    try {
      fibonacci(-3);
    } catch (error: any) {
      expect(error.message).toBe('invalid index');
    }
  });

});
