/* 
 * 题目: 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * 思想: 排序区间左端点， 遍历区间比较右端点是否大于下个节点的左端点
 * 时间复杂度: nlogn
 * 
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length
  const arr = quickSort(intervals, 0, len - 1)
  const res = []
  if (len < 2) return arr
  for (let i = 0; i < len - 1; i++) {
    if (arr[i][1] < arr[i + 1][0]) {
      res.push(arr[i])
    } else {
      const merge = [arr[i][0], max(arr[i][1], arr[i + 1][1])]
      arr[i + 1] = merge
    }
    i + 1 === len - 1 && res.push(arr[i + 1])
  }
  return res
};

function max(a, b) {
  return a > b ? a : b
}



function quickSort(arr, left, right) {
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {     // 分区操作
  let pivot = left, index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i][0] < arr[pivot][0]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


const res = merge([[1, 3], [2, 6], [12, 15], [8, 10], [15, 18]])


console.log(res, res.toString())


