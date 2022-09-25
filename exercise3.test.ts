import { printNumbers } from './exercise3';

describe('exercise 3', () => {

  test('test', () => {
    console.log = jest.fn();
    printNumbers(3);
    expect(console.log).toHaveBeenCalledWith("1, 2, fizz");
  });
});
