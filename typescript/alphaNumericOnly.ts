export function alphanumeric(string: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(string);
}

console.log(alphanumeric("hello"));
