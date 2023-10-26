// Create an enum called TrafficLight with variants for different 
// traffic light states (Red, Yellow, Green). Write a function that 
// takes a TrafficLight enum as input and prints a message depending 
// on the state (e.g., "Stop" for Red, "Slow down" for Yellow, and "Go" 
// for Green). Use pattern matching to achieve this.

#[derive(Debug)]
enum TrafficLight {
  Red,
  Yellow,
  Green,
}

impl TrafficLight {
  fn state(&self) {
    println!("Signal State: {:?}", self);
  }
}

fn main() {
  let chowk: TrafficLight = TrafficLight::Red;
  let square: TrafficLight = TrafficLight::Green;
  let roundabout: TrafficLight = TrafficLight::Yellow;

  chowk.state();
  square.state();
  roundabout.state();
}