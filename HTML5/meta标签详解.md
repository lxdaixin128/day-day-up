# meta标签详解

- 文档级元数据元素

- 表示那些不能由其它 HTML 元相关（meta-related）元素（(`<base>、<link>, <script>、<style> 或 <title>`）之一表示的任何元数据信息。

- 如果设置了 `name` 属性，meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面。
  - 与 `content` 配合使用
  - [标准元数据名称](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name)
    :  `<meta> `元素可用于提供 名称-值 对形式的文档元数据，`name` 属性为元数据条目提供名称，而 `content` 属性提供值。

  - 例: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`




- 如果设置了 `http-equiv` 属性，meta 元素则是编译指令，提供的信息与类似命名的HTTP头部相同。




- 如果设置了 `charset` 属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。

  例: `<meta charset="UTF-8" />`


- 如果设置了 `itemprop` 属性，meta 元素提供用户定义的元数据。




