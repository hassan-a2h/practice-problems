//   ####  Problem statement  ####

// The Fibonacci numbers are the numbers in the following integer sequence
// (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// F(0)=1
// F(1)=1
// F(n)=F(n−1)+F(n−2)

// Given a number, say prod (for product), we search two Fibonacci
// numbers F(n) and F(n+1) verifying:

// F(n) ∗ F(n+1)=prod

// Your function takes an integer (prod) and returns an
// array/tuple (check the function signature/sample tests for the
//   return type in your language):

// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)

// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)

// where F(n) is the smallest one such as F(n) * F(n+1) > prod.

export const productFib = (prod: number): [number, number, boolean] => {
  if (prod >= 6000000000) return [0, 0, false];

  let first = 0;
  let second = 1;
  let result = first * second;

  while (result < prod) {
    first += second;
    second = first - second;
    first -= second;
    second += first;

    result = first * second;

    if (result === prod) return [first, second, true];
  }

  return [first, second, false];
};

console.log(productFib(4895));
