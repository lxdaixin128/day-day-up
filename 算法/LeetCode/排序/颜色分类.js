/* 
 * 题目: 颜色分类
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 
 * 思想: 颜色轮询
 * 时间复杂度: n
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const len = nums.length;
  let i = 0, j = 1;
  let color = 0;
  while(color < 3) {
    for (j = i + 1; j < len; j++) {
      if (nums[i] !== color && nums[j] === color) {
        swap(nums, i, j);
      }
      if (nums[i] === color) {
        i++;
      }
    }
    color++;
  }
};



function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



const nums = [2,0,2,1,1,0]
sortColors(nums)

console.log(nums)
