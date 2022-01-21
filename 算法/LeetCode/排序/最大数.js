/* 
 * 题目: 最大数
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 * 思想: 
 * 时间复杂度: 
 * 
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const len = nums.length;

  const raw = []
  for (let i = 0; i < len; i++) {
    const frNum = getUnit(nums[i], 0)
    if (!raw[frNum]) raw[frNum] = [];
    raw[frNum].push(nums[i]);
  }
  const arr = raw.filter(e => e)

  while (arr.length > 0) {
    const last = arr.pop()
    console.log(last)
    let unit = 1;
    
  }


};


function getUnit(num, unit) {
  return (num + '')[unit]
}


largestNumber([123, 45, 98, 5, 2, 45, 68])