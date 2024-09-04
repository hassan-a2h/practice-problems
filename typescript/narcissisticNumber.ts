export function narcissistic(value: number): boolean {
  const digits: number[] = value
    .toString()
    .split("")
    .map((x) => Number(x));

  const power: number = digits.length;
  let sum: number = 0;

  for (let digit of digits) {
    sum += Math.pow(digit, power);
  }

  return sum === value;
}

console.log("52 is narcissistic number:", narcissistic(1));
console.log("153 is narcissistic number:", narcissistic(153));
