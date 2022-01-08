# infer关键字


先来看看官方工具类 `ReturnType` 的定义

[泛型工具类型 => ReturnType用法](./*泛型工具类型.md) 
```ts
// node_modules/typescript/lib/lib.es5.d.ts
/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```
- `<T extends (...args: any) => any>` 确保 `T` 一定是个函数
- `T extends (...args: any) => infer R ? R : any;` 是 `类型分发`
  - `T extends (...args: any) => infer R ? R : any;`
  -  条件类型(`类型分发`), `extends` 会进行类型关系检测
      ```ts
      T extends U ? X : Y
      ```
- ReturnType 定义中的 infer 声明了一个 R泛型 用来表示接收函数的返回值的类型, 如果去掉关键字infer只剩R, 编译器会不清楚R是什么
- `type ReturnType<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : any;`
  - 我们稍微修改一下ReturnType的定义, 返回的是传入函数参数的类型






#### 来看另一个例子: 

我们使用 `infer` 关键字进行 `类型抽取`

```ts
interface Dictionary<T = any> {
  [key: string]: T;
}
 
type StrDict = Dictionary<string>

type DictMember<T> = T extends Dictionary<infer V> ? V : never

type StrDictMember = DictMember<StrDict> // string
```

- `T extends Dictionary<infer V>` 中的 T 实际是`StrDict`类型
- 即: `Dictionary<string> extends Dictionary<infer V>`
- 该`类型推断`为真, infer V === string