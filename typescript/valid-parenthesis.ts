function isValid(s: string): boolean {
  const isOpening = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const isClosing = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const stack = [];
  let valid = false;

  s.split("").some((bracket) => {
    const openingBracket = isOpening[bracket];

    if (openingBracket) {
      stack.push(bracket);
      valid = true;
    } else {
      // at this point we know it is a closing bracket
      const lastInStack = stack.pop();
      const opening = isClosing[bracket];

      console.log("lastInStack", lastInStack, "\nopening", opening);
      if (lastInStack !== opening) {
        valid = false;
        return true;
      }
    }
  });

  return valid && stack.length === 0;
}

console.log("isValid:", isValid("({})[]"));
