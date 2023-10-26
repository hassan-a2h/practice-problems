// Define a Person struct with fields for a person's name (String) 
// and age (u32). Write a function that takes ownership of a Person 
// and returns a new Person with the same name but incremented age. 
// Implement this without using the Clone trait.

#[derive(Debug)]
struct Person {
  name: String,
  age: u16,
}

fn main() {
  let mut hamza: Person = Person {
    name: "Hamza Ahmad".to_string(),
    age: 22,
  };

  hamza = increase_age(hamza);

  println!("After increasing age {:?}", hamza);
}

fn increase_age(person: Person) -> Person {
  Person {
    name: person.name,
    age: person.age + 1,
  }
}