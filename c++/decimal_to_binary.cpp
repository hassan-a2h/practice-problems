#include <iostream>
#include <vector>
using namespace std;

// Function Prototypes
void convert_to_binary(int num, vector <int> &binaryForm);
void display_number(int &num, vector <int> &binaryForm);

int main() {
  int num {};
  vector <int> binaryForm;

  cout << "Enter a positive number: ";
  cin >> num;

  convert_to_binary(num, binaryForm);

  // Display only if binary form exists
  if (binaryForm.size() > 0)
    display_number(num, binaryForm);
  else
    cout << "\t ** Could not process input ** " << endl;
}

// Function Definitions
void convert_to_binary(int num, vector <int> &binaryForm) {
  if (num <= 0)
    return;

  binaryForm.push_back(num % 2);
  convert_to_binary(num / 2, binaryForm);
}

void display_number(int &num, vector <int> &binaryForm) {
  cout << "\t" << num << " -> ";
  for (int i = binaryForm.size() - 1; i >= 0; i--) {
    cout << binaryForm.at(i);
  }
  cout << endl;
}
