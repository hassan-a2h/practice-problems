//      ####  Problem statement  ####

// Given an integer array nums, return the number of subarrays filled with 0.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation:
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more
// than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more
// than 3 filled with 0. Therefore, we return 9.
// Example 3:

// Input: nums = [2,10,2019]
// Output: 0
// Explanation: There is no subarray filled with 0. Therefore, we return 0.

// --------------------------------------------

// solution

//
function zeroFilledSubarray(nums: number[]): number {
  //    general steps

  //  1. iterate over the array & find sizes/lengths of zero sub-arrys
  //  2. for each sub-array's size find total sub-arrays count using:
  //            count = size * (size + 1) / 2;
  //  3. return the sum of all totals

  // we iterate over the given array
  if (nums.length < 1 || nums.length > 1_00_000) {
    return 0;
  }

  let totalCount = 0;

  nums.reduce((acc, num, i) => {
    // handle cases where last index & there is 0 sub-array
    if (i === nums.length - 1) {
      if (num === 0 && acc === 0) {
        totalCount += 1;
      } else if (num === 0 && acc !== 0) {
        const arrSize = acc + 1;
        totalCount += (arrSize * (arrSize + 1)) / 2;
      } else if (num !== 0 && acc !== 0) {
        totalCount += (acc * (acc + 1)) / 2;
      }

      return 0;
    }

    if (num === 0) {
      return ++acc;
    } else {
      totalCount += (acc * (acc + 1)) / 2;
      return 0;
    }
  }, 0);

  return totalCount;
}
