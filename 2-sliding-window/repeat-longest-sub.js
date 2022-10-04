/**
 * ************************************
 *
 * @title Longest Substring with Same Letters after Replacement (hard)
 * 
 * @problemStatement Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
 * 
 * @example1
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 * 
 * @example2
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
 * 
 * @example3
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 * 
 * ************************************
 */

function longestSubRepeat(str, k) {
  const charFrequency = {};
  let windowStart = 0,
      maxReplacementLetterCount = 0,
      result = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    maxReplacementLetterCount = Math.max(maxReplacementLetterCount, charFrequency[rightChar]);

    if (windowEnd - windowStart + 1 - maxReplacementLetterCount > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      windowStart += 1;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result; 
}

module.exports = {longestSubRepeat};