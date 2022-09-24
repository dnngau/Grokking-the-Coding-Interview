const {longestSub} = require('../2-sliding-window/longest-sub');

describe('Longest Substring with K Distinct Characters - Test', () => {
  let example = "araaci";
  let k = 2;

  it('Input: String="araaci", k=2 --> Expect output to be 4', () => {
    expect(longestSub(k, example)).toBe(4);
  });

  it('Input: String="araaci", k=1 --> Expect output to be 2', () => {
    example = "araaci";
    k = 1;
    expect(longestSub(k, example)).toBe(2);
  });

  it('Input: String="cbbebi", k=3 --> Expect output to be 5', () => {
    example = "cbbebi";
    k = 3;
    expect(longestSub(k, example)).toBe(5);
  });
});