const {pairWithTargetSum} = require('../../4-two-pointers/pair-with-target-sum');

describe('Pair With Target Sum - Test', () => {
  let nums = [1, 2, 3, 4, 6];
  let target = 6;

  it('Input: [1, 2, 3, 4, 6], Target = 6 --> Expect output to be [1, 3]', () => {
    expect(pairWithTargetSum(nums, target)).toEqual(expect.arrayContaining([1, 3]));
  });

  it('Input: [2, 5, 9, 11], Target = 11 --> Expect output to be [0, 2]', () => {
    nums = [2, 5, 9, 11];
    target = 11;
    expect(pairWithTargetSum(nums, target)).toEqual(expect.arrayContaining([0, 2]));
  });
});