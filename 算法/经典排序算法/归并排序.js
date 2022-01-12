function mergeSort(arr) {
  let len = arr.length;

  if (len < 2) return arr;

  let middle = Math.floor(len / 2);

  const left = arr.slice(0, middle);

  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }

  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;
}

module.exports = mergeSort