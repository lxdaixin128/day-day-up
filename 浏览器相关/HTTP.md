# HTTP1.0 / HTTP1.1 / HTTP2.0

## HTTP1.0

- 每次发送请求建立一次 TCP, 发送完毕关闭 TCP 连接

## HTTP1.1

- 默认采用持续连接 Connection: keep-alive(TCP 连接不关闭)
- 可以被多个请求复用
- 管道机制(多个请求放入一个 TCP 管道中发送, 发送过程中不需要等待上一个请求的响应), 一个管道对应一个 TCP

## HTTP2.0

- 同域名下所有通信都在单个连接上完成
- 多路复用技术: 同一个连接并发多个请求
- 增加服务器推送功能, 服务器 -> 客户端

## 同域名下浏览器默认并发请求数

chrome 6 个

## 突破同域名并发请求限制

通过建立域名池

面试题: 为什么常见的 `cdn域名` 和 `业务域名`不一样？

// www.baidu.com 业务域名 // cdn.baidu-aa.com cdn 域名

1. 安全问题
2. cdn request header 会携带 cookie 增加带宽消耗
3. 绕过并发请求数

## 精选好文

[探秘 HTTPS，面试不要慌](https://mp.weixin.qq.com/s/EeK90gXc9NYBuArF9xi9ZQ)
