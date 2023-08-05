// Returns array inclusive of intervals
function range(start, end, step = 1) {
  const nums = [];

  // If step is negative swap the intervals
  if (step === 0) {
    return;
  }
  else if (step < 0) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i <= end; i += step) {
    nums.push(i);
  }

  return nums;
}

// Sums an array of numbers
function sum(arr) {
  let sum = 0;

  for (let i of arr) {
    if (typeof i !== 'number') return;
    sum += i;
  }

  return sum;
}

console.log(sum(range(1, 5)));