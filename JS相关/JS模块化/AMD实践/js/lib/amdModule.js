define([], () => {
  // 业务逻辑
  // 处理部分
  let count = 0;
  const increase = () => ++count;
  const reset = () => {
    count = 0;
  };

  const log = () => {
    console.log(count);
  };

  return {
    increase,
    reset,
    log,
  };
});
