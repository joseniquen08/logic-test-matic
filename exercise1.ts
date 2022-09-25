export const fibonacci = (index: number): number => {
  if (0 <= index) {
    if (index === 0) return 0;
    else if (index === 1) return 1;
    else return fibonacci(index - 1) + fibonacci(index - 2);
  } else {
    throw new Error('invalid index');
  }
}

console.log(fibonacci(6));
