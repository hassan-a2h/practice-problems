use std::io;

fn main() {
    let mut input = String::new();
    println!("1. C to F\n2. F to C\n\n\tInput: ");
    
    io::stdin()
        .read_line(&mut input)
        .expect("Input error!");

    let input: i32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };

    println!("Enter temperature: ");
    let temperature: i32 = get_number();

    if input == 1 {
        println!("{}F", to_fahrenheight(temperature));
    } else if input == 2 {
        println!("{}C", to_celcius(temperature));
    } else {
        println!("Invalid Input!");
    }
}

fn get_number() -> i32 {
    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect("Input error!");

    let input: i32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };

    input
}

fn to_fahrenheight(temp: i32) -> i32 {
    (temp * 9 / 5) + 32
}

fn to_celcius(temp: i32) -> i32 {
    (temp - 32) * 5 / 9
}
