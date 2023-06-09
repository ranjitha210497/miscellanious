class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adding an element to the list
  add(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert element at a specific position
  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      let curr, prev;
      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // remove element from a specific position
  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  // remove element by value
  removeElement(element) {
    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
}

const firstList = new SinglyLinkedList();
firstList.add("hi");
firstList.add("hello");
firstList.add("how are you");
firstList.removeFrom(0);
console.log("first list", firstList);
