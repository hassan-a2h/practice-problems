function isEven(number) {
  if (number > 0)
  {
    if (number === 0)
      return true;
    if (number === 1)
      return false;
    return isEven(number - 2);
  }

  if (number === 0)
    return true;
  if (number === -1)
    return false;
  return isEven(number + 2);
}

console.log(`-1 is even: ${isEven(-1)}`);
