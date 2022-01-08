function selectionSort(arr) {
  const len = arr.length;
  let minIndex = 0;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = minIndex; j < len - 1; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        swap(arr, j + 1, minIndex);
      }
    }
  }
  return arr;
}



function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = selectionSort