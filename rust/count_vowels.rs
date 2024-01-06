fn main() {
  let sentence = "name is jeff";
  let vowels = count_vowels(&sentence[..]);

  println!("No. of Vowels: {}", vowels);
}

fn count_vowels(sentence: &str) -> u16 {
  let mut vowel_count: u16 = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for character in sentence.chars() {
      if vowels.contains(&character) {
          vowel_count += 1;
      }
  }

  return vowel_count;
}