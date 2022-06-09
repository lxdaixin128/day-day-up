function test(arg1, arg2) {
  const arr1 = arg1.split('.').map((n) => parseInt(n));
  const arr2 = arg2.split('.').map((n) => parseInt(n));

  const length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    if (arr1[i] === arr2[i]) {
      if (i === length - 1) {
        if (arr1.length > arr2.length) {
          return 2;
        } else if (arr1.length === arr2.length) {
          return 3; // 等于
        } else {
          return 1; // 小于
        }
      }
      continue;
    } else if (arr1[i] < arr2[i]) {
      return 1; // 小于
    } else {
      return 2; // 大于
    }
  }
}

const res = test('2.4.3', '3.1.3');
const res2 = test('3.1.3.4', '3.1.3');
const res3 = test('3.4.3', '3.1.3');
console.log(res, res2, 3);
