/**
 * ************************************
 *
 * @title Longest Substring with K Distinct Characters (Medium)
 * 
 * @problemStatement Given a string, find the length of the longest substring in it with no more than K distinct characters. You can assume that K is less than or equal to the length of the given string.
 * 
 * @example1
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 * 
 * @example2
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct characters is "aa".
 * 
 * @example3
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 * 
 * ************************************
 */

function longestSub(k, str) {
  const hash = {};
  let windowStart = 0,
      result = 0;
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    
    if (!(rightChar in hash)) {
      hash[rightChar] = 0;
    }
    hash[rightChar]+= 1;

    while (Object.keys(hash).length > k) {
      const leftChar = str[windowStart];
      hash[leftChar]-= 1;
      if (hash[leftChar] === 0) {
        delete hash[leftChar];
      }
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result; 
}

module.exports = {longestSub};