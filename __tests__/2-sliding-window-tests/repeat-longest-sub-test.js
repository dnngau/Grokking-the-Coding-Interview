const {longestSubRepeat} = require('../../2-sliding-window/repeat-longest-sub');

describe('Longest Substring with K Distinct Characters - Test', () => {
  let example = "aabccbb";
  let k = 2;

  it('Input: String="aabccbb", k=2 --> Expect output to be 5', () => {
    expect(longestSubRepeat(example, k)).toBe(5);
  });

  it('Input: String="abbcb", k=1 --> Expect output to be 4', () => {
    example = "abbcb";
    k = 1;
    expect(longestSubRepeat(example, k)).toBe(4);
  });

  it('Input: String="abccde", k=1 --> Expect output to be 1', () => {
    example = "abccde";
    k = 1;
    expect(longestSubRepeat(example, k)).toBe(3);
  });
});