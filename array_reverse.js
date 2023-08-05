const reverseArray = (arr) => {
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

const reverseArrayInPlace = (arr) => {
  const lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }

  return arr;
}

console.log(reverseArray([ 13, 26, 30, 41, 51 ]));
console.log(reverseArrayInPlace([ 1, 2, -4, 8 ]));