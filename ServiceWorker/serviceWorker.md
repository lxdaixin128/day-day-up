# ServiceWorker

- 基于web worker
- 在web worker的基础上增加了离线缓存的能力
- 本质上充当Web应用程序（服务器）与浏览器之间的代理服务器 


#### 上下文
- Service worker运行在worker上下文 --> 不能访问DOM
- 可以访问cache和indexDB
- 它设计为完全异步，同步API（如XHR和localStorage）不能在service worker中使用
- 出于安全考量，Service workers只能由HTTPS承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险。



#### 生命周期
- 由事件驱动的,具有生命周期
- 其生命周期与页面无关



#### 兼容性
- Safari 对于Service workers的全线不支持
- 在Firefox浏览器的用户隐私模式，Service Worker不可用