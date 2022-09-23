/**
 * ************************************
 *
 * @title Smallest Subarray with a Greater Sum (Easy)
 * 
 * @problemStatement Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 * 
 * @example1
 * Input: [2, 1, 5, 2, 3, 2], S=7 
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 * 
 * @example2
 * Input: [2, 1, 5, 2, 8], S=7 
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 * 
 * @example3
 * Input: [3, 4, 1, 1, 6], S=8
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 * 
 * ************************************
 */

function smallestSub(k, arr) {
  let windowStart = 0,
      windowEnd = 0,
      windowSum = 0,
      result = Infinity;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= k) {
      result = Math.min(result, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (result === Infinity) {
    return 0;
  }
  
  return result;
}

module.exports = {smallestSub};