const {smallestSub} = require('../2-sliding-window/smallest-sub');

describe('Sliding Window - Max Sum test', () => {
  let example = [2, 1, 5, 2, 3, 2];
  let k = 7;

  it('Input: [2, 1, 5, 2, 3, 2], k=7 --> Expect output to be 2', () => {
    expect(smallestSub(k, example)).toBe(2);
  });

  it('Input: [2, 1, 5, 2, 8], k=7 --> Expect output to be 1', () => {
    example = [2, 3, 4, 1, 8];
    k = 7;
    expect(smallestSub(k, example)).toBe(1);
  });

  it('Input: [3, 4, 1, 1, 6], k=8 --> Expect output to be 3', () => {
    example = [3, 4, 1, 1, 6];
    k = 8;
    expect(smallestSub(k, example)).toBe(3);
  });
});