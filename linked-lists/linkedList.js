class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  remove(value) {
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  get(index){
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) { // with i < index the interation stop when i is the right index
      current = current.next;
    }
    return current.value;
  }

  print() {
    let current = this.head;
    console.log("Start of list");
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log("End of list");
  }
}

module.exports = LinkedList;
