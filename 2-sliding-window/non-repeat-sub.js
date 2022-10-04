/**
 * ************************************
 *
 * @title Longest Substring with Distinct Characters (Hard)
 * 
 * @problemStatement Given a string, find the length of the longest substring, which has all distinct characters.
 * 
 * @example1
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 * 
 * @example2
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring with distinct characters is "ab".
 * 
 * @example3
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings with distinct characters are "abc" & "cde".
 * 
 * ************************************
 */

function nonRepeatSub(str) {
  const charFrequency = {};
  let windowStart = 0,
      result = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (charFrequency[rightChar] > 1) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result; 
}

module.exports = {nonRepeatSub};