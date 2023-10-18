// Implement a function which convert the 
// given boolean value into its string representation.

fn boolean_to_string(b: bool) -> String {
  let mut string_value: String = String::from("");
  
  if b {
      string_value = String::from("true");
  } else {
      string_value = String::from("false");
  }
  
  return string_value;
}
