const threeConsecutiveOdds = function(arr) {
  let oddCount = 0;

  for (let i of arr) {
      if (i % 2 !== 0) {
          oddCount++;
      } else {
          oddCount = 0;
      }
      if (oddCount >= 3) return true;
  }

  return false;
};

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7];

console.log(arr, 'has 3 consecutive odds: ', threeConsecutiveOdds(arr));