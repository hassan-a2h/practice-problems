use std::io;

fn main() {
    println!("Limit: ");
    let limit: i32 = get_number();

    if limit <= 0 {
        println!("Invalid Input");
        return;
    }

    let mut counter: i32 = 0;
    let mut previous: i32 = 1;
    let mut previous_2: i32 = 0;

    println!("\n\tFibonacci:"); 

    while counter < limit {
        if counter == 0 {
            println!("{}", previous_2);
            counter += 1;

            continue;
        } else if counter == 1 {
            println!("{}", previous);
            counter += 1;

            continue;
        }

        println!("{}", (previous_2 + previous));
        let temp: i32 = previous;
        previous = previous_2 + temp;
        previous_2 = temp;
        counter += 1;
    }
}

fn get_number() -> i32 {
    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect("Input Error");

    let numbr: i32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };

    return numbr;
}