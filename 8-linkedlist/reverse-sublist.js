/**
 * ************************************
 *
 * @title Reverse a Sub-list (Medium)
 * 
 * @problemStatement Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
 * 
 * ************************************
 */

function reverseSubList(head, left, right) {
  if (left === right) {
    return head;
  }

  let current = head;
  let previous = null;
  let i = 0;

  while (current !== null && i < left - 1) {
    previous = current;
    current = current.next;
    i += 1;
  }

  let leftPrevious = previous;
  let rightAfter = current;

  i = 0;
  while (current !== null && i < right - left + 1) {
    let temp = current.next; 
    current.next = previous; 
    previous = current;
    current = temp;
    i += 1;
  }

  if (leftPrevious !== null) {
    leftPrevious.next = previous;
  } else {
    head = previous;
  }

  rightAfter.next = current; 
  return head;
}

module.exports = {reverseSubList};