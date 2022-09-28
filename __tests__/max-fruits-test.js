const {maxFruits} = require('../2-sliding-window/max-fruits');

describe('Fruits into Baskets - Test', () => {
  let example = ['A', 'B', 'C', 'A', 'C'];

  it(`Input: Fruit = ['A', 'B', 'C', 'A', 'C'] --> Expect output to be 3`, () => {
    expect(maxFruits(example)).toBe(3);
  });

  it(`Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C'] --> Expect output to be 5`, () => {
    example = ['A', 'B', 'C', 'B', 'B', 'C'];
    expect(maxFruits(example)).toBe(5);
  });
});