const {nonRepeatSub} = require('../../2-sliding-window/non-repeat-sub');

describe('Longest Substring with Distinct Characters- Test', () => {
  let example = "aabccbb";

  it('Input: String="aabccbb" --> Expect output to be 3', () => {
    expect(nonRepeatSub(example)).toBe(3);
  });

  it('Input: String="abbbb" --> Expect output to be 2', () => {
    example = "abbbb";
    expect(nonRepeatSub(example)).toBe(2);
  });

  it('Input: String="abccde" --> Expect output to be 3', () => {
    example = "abccde";
    expect(nonRepeatSub(example)).toBe(3);
  });
});