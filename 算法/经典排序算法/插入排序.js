function insertionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j + 1]) {
        break;
      } else {
        swap(arr, j, j + 1);
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

module.exports = insertionSort