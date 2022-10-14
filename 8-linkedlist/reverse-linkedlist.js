/**
 * ************************************
 *
 * @title Reverse a LinkedList (Easy)
 * 
 * @problemStatement Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
 * 
 * ************************************
 */

 class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}


function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    // before we move to the next node, point previous to the current node
    previous = current;
    current = next; // move on the next node
  }
  return previous;
}