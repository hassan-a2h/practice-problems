#include <iostream>
using namespace std;

int calculateFactorial(int num);

int main () {
  cout << "Enter Number: ";
  int num {};
  cin >> num;

  cout << "Factorial: " << calculateFactorial(num) << endl;
}

// Find factorial of positive and negative numbers
int calculateFactorial(int num) {
  if (num == 1)
    return 1;
  else if (num == -1)
    return -1;

  if (num > 0)
    return num * calculateFactorial(num - 1);
  else
    return num * calculateFactorial(num + 1);
}
