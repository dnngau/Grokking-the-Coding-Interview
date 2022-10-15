const {reverseSubList} = require('../../8-linkedlist/reverse-sublist');

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const result = reverseSubList(head, 2, 4);

describe('Reverse a LinkedList - Test', () => {
  
  it('It should reverse the sub-list in the LinkedList', () => {
    expect(result.value).toBe(1);
    expect(result.next.value).toBe(4);
    expect(result.next.next.value).toBe(3);
    expect(result.next.next.next.value).toBe(2);
    expect(result.next.next.next.next.value).toBe(5);
  });
});