function radixSort(arr, maxDigit) {
  const len = arr.length;
  let mod = 10;
  let dev = 1;
  for (let i = 0; i < maxDigit; i++, mod *= 10, dev *= 10) {
    const buckets = []
    // 收集
    for (let j = 0; j < len; j++) {
      const index = Math.floor((arr[j] % mod) / dev);
      if (!buckets[index]) {
        buckets[index] = [];
      }
      buckets[index].push(arr[j]);
    }
    arr = [];
    // 释放
    for (let k = 0; k < 10; k++) {
      const bucket = buckets[k];
      while (bucket?.length > 0) {
        arr.push(bucket.shift())
      }
    }
  }
  return arr;
}



module.exports = radixSort