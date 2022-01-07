/* 
 * 题目: 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 思想: 排序 + 双指针
 * 时间复杂度: logn(快速排序) + n^2
 * 
*/




const quickSort = require('./经典排序算法/快速排序.js')
var threeSum = function (nums) {
  const len = nums.length;
  quickSort(nums, 0, len);
  const res = [];
  // 数组长度小于3 则返回
  if (len < 3) return res;
  let i = 0;
  while (i < len - 2) {
    let j = i + 1, k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j = moveRight(nums, j);
      } else if (sum > 0) {
        k = moveLeft(nums, k);
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        k = moveLeft(nums, k);
      }
    }
    i = moveRight(nums, i);
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



const result = threeSum([-1, 0, 1, 2, -1, -5, 2, 3, -4, 9, -1, -1, 4, -13])
console.log(result)