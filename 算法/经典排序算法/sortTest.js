const insertionSort = require('./插入排序.js')
const radixSort = require('./基数排序.js')

const res = radixSort([-1, 0, 1, 2, -1, -5, 2, 3, -4, 9, -1, -1, 4, -13], 2)

console.log(res)