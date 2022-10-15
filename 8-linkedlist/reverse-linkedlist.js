/**
 * ************************************
 *
 * @title Reverse a LinkedList (Easy)
 * 
 * @problemStatement Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
 * 
 * ************************************
 */

function reverseLinkedList(head) {
  let current = head,
      previous = null;
  
  while (current !== null) {
    let temp = current.next; 
    current.next = previous; 
    previous = current;
    current = temp; 
  }

  return previous;
}

module.exports = {reverseLinkedList};