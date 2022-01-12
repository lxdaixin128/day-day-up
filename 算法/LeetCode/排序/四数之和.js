/* 
 * 题目: 四数之和
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 你可以按 任意顺序 返回答案 。
 * 
 * 思想: 排序 + 双指针
 * 时间复杂度: logn(快速排序) + n^3
 * 
*/





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const quickSort = require('../经典排序算法/快速排序.js')
var fourSum = function(nums, target) {
  const len = nums.length;
  quickSort(nums, 0, len);
  const res = [];
  // 数组长度小于3 则返回
  if (len < 4) return res;
  let h = 0;
  while (h < len - 3) {
    let i = h + 1;
    while (i < len - 2) {
      let j = i + 1, k = len - 1;
      while (j < k) {
        const sum = nums[h] + nums[i] + nums[j] + nums[k];
        if (sum < target) {
          j = moveRight(nums, j);
        } else if (sum > target) {
          k = moveLeft(nums, k);
        } else {
          res.push([nums[h], nums[i], nums[j], nums[k]]);
          k = moveLeft(nums, k);
        }
      }
      i = moveRight(nums, i);
    }
    h = moveRight(nums, h);
  }
  return res;
};

// 右移至第一个不相等的元素
function moveRight(arr, i) {
  do {
    i++;
  } while (arr[i - 1] === arr[i]);
  return i;
}

// 左移至第一个不相等的元素
function moveLeft(arr, i) {
  do {
    i--;
  } while (arr[i + 1] === arr[i]);
  return i;
}
const result = fourSum([2,2,2,2,2], 8)
console.log(result)