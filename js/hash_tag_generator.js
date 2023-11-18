// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag (str) {
  str = str.replace(/\s\s+/g, ' ');
  const words = str.split(' ');
  let finalStr = '';
  
  let finalLength = words.join('').length + words.length;
  if (str === '' || finalLength > 140) return false;
  
  for (let word of words) {
    switch (finalStr) {
      case '':
        finalStr += '#' + word[0].toUpperCase() + word.slice(1, );
        break;
      default:
        finalStr += word[0].toUpperCase() + word.slice(1, );
    };
  }
  
  return finalStr;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("a".repeat(139)));