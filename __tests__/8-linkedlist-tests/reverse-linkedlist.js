const {reverseLinkedList} = require('../../8-linkedlist/reverse-linkedlist');

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

const result = reverseLinkedList(head);

describe('Reverse a LinkedList - Test', () => {
  
  it('It should reverse the LinkedList', () => {
    expect(result.value).toBe(10);
    expect(result.next.value).toBe(8);
    expect(result.next.next.value).toBe(6);
    expect(result.next.next.next.value).toBe(4);
    expect(result.next.next.next.next.value).toBe(2);
  });
});