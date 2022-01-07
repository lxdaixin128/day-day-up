/* 
 * 题目: 最接近的三数之和
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * 
 * 思想: 排序 + 双指针
 * 时间复杂度: logn(快速排序) + n^2
 * 
*/




const quickSort = require('./经典排序算法/快速排序.js')
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  quickSort(nums, 0, len);
  let res;
  // 数组长度小于3 则返回
  if (len < 3) return res;

  let sumClosest;
  let diff;


  let i = 0;
  while (i < len - 2) {
    let j = i + 1, k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      
      if (sum < target) {
        j = moveRight(nums, j)
      } else if (sum > target) {
        k = moveLeft(nums, k)
      } else {
        console.log(res)
        return sum
      }

      const _diff = Math.abs(sum - target)
      if (diff) {
        if (_diff < diff) {
          res = [nums[i], nums[j], nums[k]]
          sumClosest = sum
          diff = _diff
        }
      } else {
        // 初始化
        diff = _diff;
        sumClosest = sum
      }
    }
    i = moveRight(nums, i);
  }
  console.log(res)
  return sumClosest;
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



const result = threeSumClosest([-1, 0, 1, 2, -1, -5, 2, 3, -4, 9, -1, -1, 4, -13], -20)
console.log(result)