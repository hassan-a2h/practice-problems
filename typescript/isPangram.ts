//   ####  Problem statement  ####

// A pangram is a sentence that contains every single letter
// of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and
// punctuation.

export function isPangram(phrase: string): boolean {
  const dictionary: Record<string, boolean> = {};
  const sanitizedInput = phrase
    .toLowerCase()
    .split("")
    .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);

  sanitizedInput.forEach((char) => {
    dictionary[char] = true;
  });

  return Object.keys(dictionary).length >= 26;
}

console.log(
  "isPangram:",
  isPangram("The quick brown fox jumps over the lazy dog.")
);

console.log("isPangram:", isPangram("This is not a pangram."));
