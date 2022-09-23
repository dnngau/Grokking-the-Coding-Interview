/**
 * ************************************
 *
 * @title Maximum Sum Subarray of Size K (Easy)
 * 
 * @problemStatement Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * @example1
 * Input: [2, 1, 5, 1, 3, 2], k=3 
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 * 
 * @example2
 * Input: [2, 3, 4, 1, 5], k=2 
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 * 
 * ************************************
 */

function maxSum(k, arr) {
  let windowStart = 0,
      windowEnd = 0,
      windowSum = 0,
      result = 0;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      result = Math.max(windowSum, result);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}

module.exports = {maxSum};