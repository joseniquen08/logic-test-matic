import { countReps } from './exercise2';

describe('exercise 2', () => {

  test('invalid index', () => {
    try {
      countReps("");
    } catch (error: any) {
      expect(error.message).toBe('invalid length');
    }
  });
});
