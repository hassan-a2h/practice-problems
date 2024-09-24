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
