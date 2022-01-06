const quickSort = require('./经典排序算法/快速排序.js')

var threeSum = function(nums) {
  quickSort(nums, 0, nums.length)

  console.log(nums)
  


  return
};

const result = threeSum([-1,0,1,2,-1,-4])

console.log(result)