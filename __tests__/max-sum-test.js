const {maxSum} = require('../2-sliding-window/max-sum');

describe('Maximum Sum Subarray of Size K - Test', () => {
  let example = [2, 1, 5, 1, 3, 2];
  let k = 3;

  it('Input: [2, 1, 5, 1, 3, 2], k=3 --> Expect output to be 9', () => {
    expect(maxSum(k, example)).toBe(9);
  });

  it('Input: [2, 3, 4, 1, 5], k=2 --> Expect output to be 7', () => {
    example = [2, 3, 4, 1, 5];
    k = 2;
    expect(maxSum(k, example)).toBe(7);
  });
});