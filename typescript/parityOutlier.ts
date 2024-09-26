//    **      Problem Statement       **

// You are given an array (which will have a length of at
// least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers
// or entirely comprised of even integers except for a single
// integer N. Write a method that takes the array as an argument
// and returns this "outlier" N.

// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

export function findOutlier(integers: number[]): number {
  // your code here
  if (integers.length < 3) return 0;

  let evenCount = 0;
  let oddCount = 0;
  //  globalParity '0' means even, '1' means odd
  let globalParity: number;

  for (let i = 0; i < 3; i++) {
    integers[i] % 2 === 0 ? evenCount++ : oddCount++;
  }

  evenCount >= 2 ? (globalParity = 0) : (globalParity = 1);

  for (const num of integers) {
    if (num % 2 === 0 && globalParity === 1) return num;
    if (num % 2 !== 0 && globalParity === 0) return num;
  }

  return 0;
}
