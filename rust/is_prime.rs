//    **        Problem Statement         **

// Define a function that takes an integer argument and 
// returns a logical value true or false depending on if 
// the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a 
// natural number greater than 1 that has no positive 
// divisors other than 1 and itself.

// Requirements

// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. 
// You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, 
// but still the most trivial solutions might time out. Numbers go 
// up to 2^31 ( or similar, depending on language ). Looping all 
// the way up to n, or n/2, will be too slow.


fn is_prime(x: i64) -> bool {    
  if x <= 0 || x == 1 { return false }
  if x == 2 { return true }
  if x % 2 == 0 { return false }
  
  let num = absolute(x);

  let sqrt_num = (num as f64).sqrt() as i64;
  for divisor in 3 ..= sqrt_num {
      if num % divisor == 0 { return false }
  }
  
  return true;
}

fn absolute(num: i64) -> i64 {
  if num < 0 { return num * -1 }
  return num;
}