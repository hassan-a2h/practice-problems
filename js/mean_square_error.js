// Write a function that
// accepts two integer arrays of equal length
// compares the value each member in one array 
// to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value 
// difference between each member pair.

const solution = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return -1;
  
  return firstArray.reduce((total, val, index) => {
    return total += Math.pow(Math.abs(val - secondArray[index]), 2);
  }, 0) / firstArray.length;
}

console.log(solution([1,2,3],[4,5,6]));