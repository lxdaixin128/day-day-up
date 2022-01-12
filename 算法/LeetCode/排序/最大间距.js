/* 
 * 题目: 最大间距
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 思想: 
 * 时间复杂度: 
 * 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const radixSort = require('../经典排序算法/基数排序.js')
var maximumGap = function(nums) {
  let len = nums.length;
  if (len < 2) return 0;
  let maxVal = Math.max(...nums);
  
  let exp = 1;

  while(maxVal >= exp) {
    const buckets = [];
    // 收集
    for (let j = 0; j < len; j++) {
      const index = Math.floor((nums[j] / exp) % 10);
      if (!buckets[index]) {
        buckets[index] = [];
      }
      buckets[index].push(nums[j]);
    }
    nums = [];
    // 释放
    for (let k = 0; k < 10; k++) {
      const bucket = buckets[k];
      while (bucket?.length > 0) {
        nums.push(bucket.shift());
      }
    }
    exp *= 10;
  }
  console.log(nums, exp)
  let maxGap = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxGap = Math.max(maxGap, nums[i + 1] - nums[i]);
  }
  return maxGap;
};

const res = maximumGap([100,3,2,1])

console.log(res)