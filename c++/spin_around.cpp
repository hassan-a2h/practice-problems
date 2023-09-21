#include <iostream>
#include <cstring>
using namespace std;

int computeRotations(string rotations[], int size);

int main() {
  // Input sequence
  string rotations[] = {"right", "left", "left", "left", "left", "left"};
  int size = 6;
  int totalRotations = computeRotations(rotations, size);

  cout << "Total 360 rotations: " << totalRotations << endl;
}

int computeRotations(string rotations[], int size) {
  int totalRotations = 0;
  for (int i = 0; i < size; ++i) {
    if (rotations[i] == "right") {
      totalRotations++;
    }
    else if (rotations[i] == "left") {
      totalRotations--;
    }
  }
  return abs(totalRotations / 4);
}
