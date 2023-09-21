#include <iostream>

using namespace std;

class CircularQueue {
private:
  int size, front, rear;
  int *queue;

public:
  CircularQueue(int queueSize) {
    this -> size = queueSize;
    this -> queue = new int[size];
    this -> front = this -> rear = -1;
  }

  void enqueue(int element) {
    if (((this -> rear + 1) % this -> size) == this -> front) {
      cout << "\n- Overflow" << endl;
      return;
    }

    if (this -> front == -1) {
      front = 0;
    }

    this -> rear = ((this -> rear + 1) % this -> size);
    queue[rear] = element;
    cout << "Element enqueued" << endl;
  }

  int *dequeue() {
    if (this -> front == -1) {
      cout << "\n- Underflow" << endl;
      return nullptr;
    }

    int *element = &this -> queue[this -> front];

    if (this -> front == this -> rear) {
      this -> front = this -> rear = -1;
    } else {
      this -> front = ((this -> front + 1) % this -> size);
    }

    return element;
  }

  int peek() {
    if (front == -1) {
      return -1;
    }

    return this -> queue[this -> front];
  }
};

int main() {
  CircularQueue q(4); // 4 is the queue size
  bool menu = true;
  int *element = nullptr;
  int top = -1; // for peek
      
  do {
    int option = 0;
    cout << "\n1.Enqueue" << endl;
    cout << "2.Dequeue" << endl;
    cout << "3.Peek" << endl;
    cout << "4.Exit" << endl;
    cout << "\nInput: ";

    cin >> option;

    switch(option) {
      case 1: 
        cout << "\nElement: ";
        int temp;
        cin >> temp;
        q.enqueue(temp);
        break;

      case 2:
        element = q.dequeue();
        if (!(element == nullptr))
          cout << "\nElement: " << *element << endl;
        
        break;

      case 3:
        top = q.peek();
        if (!(top == -1)) {
          cout << "Top: " << top << endl;
        }
        break;
      
      case 4:
        menu = false;
        break;

      default:
        cout << "\nInvalid option" << endl;
    }
  } while (menu);

  return 0;
}
