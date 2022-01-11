
/* 
 * KMP算法
 * 获取next数组
 */
export function getNext(str) {
  let i = 1, j = 0;
  let next = []
  next[0] = 0
  next[1] = 0
  while (i < str.length - 1) {
    if (j === 0 || str[i] === str[j]) {
      i++;
      j++;
      // 
      next[i] = j;
    } else {
      // 回溯j
      j = next[j];
    }
    console.log(j, i, next)
  }
  return next.join('');
}


/* 
 * KMP算法（改进）
 * 获取next数组
 */
export function getNextval(str) {
  let i = 1, j = 0;
  let next = []
  next[0] = 0
  next[1] = 0
  while (i < str.length - 1) {
    if (j === 0 || str[i] === str[j]) {
      i++;
      j++;
      if (str[i] === str[j]) {
        next[i] = next[j];
      } else {
        next[i] = j;
      }
    } else {
      // 回溯j
      j = next[j];
    }
  }
  return next.join('');
}

/* 
 * 检索位置（单次）
 */
export function indexByNext(str, subStr) {
  let i = 0, j = 0;
  let next = getNextval(subStr)
  console.log('nextval', next)
  while (i < str.length && j < subStr.length) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      if (j === 0) i++;
      j = parseInt(next[j]);
    }
  }
  if (j >= subStr.length - 1) {
    return i - subStr.length
  } else {
    return 0
  }
}


/* 
 * 检索位置（全匹配）
 */
export function indexAllByNext(str, subStr) {
  let pos = []
  let i = 0, j = 0;
  let next = getNextval(subStr)
  console.log('nextval', next)
  while (i < str.length && j < subStr.length) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      if (j === 0) i++;
      j = parseInt(next[j]);
    }
    if (j >= subStr.length) {
      pos.push(i - subStr.length)
      j = 0
    }
  }
  return pos
}



/* 
 * 替换（全匹配）
 */
export function replaceAllByNext(str, subStr, reStr) {
  let pos = []  // pos数组定位匹配到的位置
  let i = 0, j = 0;
  let next = getNextval(subStr)
  console.log('nextval', next)
  while (i < str.length && j < subStr.length) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else {
      if (j === 0) i++;
      j = parseInt(next[j]);
    }
    if (j >= subStr.length) {
      pos.push(i - subStr.length)
      j = 0
    }
  }
  // 根据返回的位置pos，截取字符串str并拼接
  let res = ''
  for (let i = 0; i <= pos.length; i++) {
    let start = i === 0 ? 0 : pos[i - 1] + subStr.length
    let end = i === pos.length ? undefined : pos[i]
    res += (str.slice(start, end) + (i === pos.length ? '' : reStr))
  }
  return res
}