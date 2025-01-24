function twoSum(nums: number[], target: number): number[] {
  const distanceFromTarget: { [key: number]: number } = {};

  for (const [index, num] of nums.entries()) {
    if (distanceFromTarget[num] !== undefined) {
      return [distanceFromTarget[num], index];
    }

    distanceFromTarget[target - num] = index;
  }

  return [];
}

console.log(twoSum([2, 7, 9, 11], 9));
