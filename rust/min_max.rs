// Write a program that uses a loop to repeatedly ask the user to enter 
// a number. The program should keep track of the minimum and maximum 
// numbers entered by the user. When the user enters 0, the program 
// should print the minimum and maximum numbers and exit.

use std::io;

fn main() {
  let mut min: i32 = 0;
  let mut max: i32 = 0;

  loop {
    let mut number = String::new();

    println!("Enter Number: ");
    io::stdin().read_line(&mut number).expect(
      "\nInvalid input, please input a number\n"
    );

    let number = number.trim();

    match number.parse::<i32>() {
      Ok(number) => {
        if number < min {
          min = number;
        } else if number > max {
          max = number;
        } else if number == 0 {
          break;
        }

        println!("\nmax: {}\nmin: {}\n", max, min);
      }

      Err(_) => println!("Not a number, {}", number),
    }
  }
}