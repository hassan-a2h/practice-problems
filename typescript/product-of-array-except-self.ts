//      ####  Problem statement  ####

// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

//

// solution

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let prefix: number = 0;

  // prefix pass
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(1);
      prefix = 1;
      continue;
    }

    const sum = prefix * nums[i - 1];
    result.push(sum);
    prefix = sum;
  }

  prefix = 1;

  // postfix pass
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log("prefix right now: ", prefix);
    result[i] = result[i] * prefix;
    prefix *= nums[i];
  }

  return result;
}
