//      **       Problem Statement            **

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

//
//        ------          Solution             -------
//

function majorityElement(nums: number[]): number {
  const occurence = new Map<number, number>();

  for (let number of nums) {
    const count = occurence.get(number) || 0;
    occurence.set(number, count + 1);
  }

  let mostOccuredCount = 0;
  let mostOccuredVal = 0;
  for (const [key, val] of occurence) {
    if (val > mostOccuredCount) {
      mostOccuredCount = val;
      mostOccuredVal = key;
    }
  }

  return mostOccuredVal;
}
