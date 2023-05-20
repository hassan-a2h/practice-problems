function countChars(string, character) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character)
      count++;
  }
  return count;
}

console.log(`Input String: Hassan,
count of 's': ${countChars("Hassan", 's')}`);
