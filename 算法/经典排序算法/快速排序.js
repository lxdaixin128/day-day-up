function quickSort(arr, left, right) {
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

// 关键函数
function partition(arr, left, right) {
  // 分区操作  pivot是中间值
  let pivot = left,
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
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

module.exports = quickSort;
