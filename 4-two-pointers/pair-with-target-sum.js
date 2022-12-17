/**
 * ************************************
 *
 * @title Pair with Target Sum (Easy)
 * 
 * @problemStatement Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 * 
 * @example1
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 * 
 * @example2
 * Input: [2, 5, 9, 11], target=11
 * Output: [0, 2]
 * Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 * 
 * ************************************
 */

function pairWithTargetSum(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    if (nums[leftPointer] + nums[rightPointer] === target) {
      return [leftPointer, rightPointer];
    } else if (nums[leftPointer] + nums[rightPointer] > target) {
      rightPointer -= 1;
    } else if (nums[leftPointer] + nums[rightPointer] < target) {
      leftPointer += 1;
    }
  }
}

module.exports = {pairWithTargetSum};