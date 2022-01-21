```js
//选择一个需要观察的节点
var targetNode = document.getElementById('root')

// 设置observer的配置选项
var config = { attributes: true, childList: true, subtree: true }

// 当节点发生变化时的需要执行的函数
var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      console.log('A child node has been added or removed.')
    } else if (mutation.type == 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.')
    }
  }
}

// 创建一个observer示例与回调函数相关联
var observer = new MutationObserver(callback)

//使用配置文件对目标节点进行观测
observer.observe(targetNode, config)

// 停止观测
observer.disconnect()

```