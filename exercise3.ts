export const printNumbers = (times: number) => {
  let result: string = "";
  for (let i = 1; i <= times; i++) {
    const multipleOf3: boolean = i % 3 === 0;
    const multipleOf5: boolean = i % 5 === 0;
    const multipleOf15: boolean = i % 15 === 0;
    result += `${multipleOf3 ? (multipleOf15 ? "fizz buzz" : "fizz") : (multipleOf5 ? (multipleOf15 ? "fizz buzz" : "buzz") : i)}${i !== times ? ', ' : ''}`;
  }
  console.log(result);
}

printNumbers(100);
