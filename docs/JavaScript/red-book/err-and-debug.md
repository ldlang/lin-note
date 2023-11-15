---
sidebar: auto
---

# 错误处理与调试

## 错误处理

### try/catch 语句

所有可能会出错的代码都应该放置于 try/catch 语句中，catch 接收的一个参数，是捕获到的 try 中抛出的错误，如果没有错误则不会走到 catch 中，在上面全都执行完毕后则会执行 finally。如果同时在 3 个地方 return，那么只有 finally 的 return 才是有效的。

```js
try {
  // 抛出错误，确保能走到catch
  throw new Error("出错了");
  return 2;
} catch (error) {
  return 1;
} finally {
  return 0;
}
```

### 抛出错误

通过 throw 抛出错误后，代码会被立即中断执行，除非使用 try/catch 捕获了他的错误。

错误类型：

- Error：错误的基本类型，所有的错误都是继承该类型
- InternalError：递归过多，栈移除，也就是死循环。
- EvalError：使用 eval()函数发生异常时抛出。
- RangeError：错误会在数值越界时抛出。例如，定义数组时如果设置了并不支持的长度。
- ReferenceError：会在找不到对象时发生。这种错误经常是由访问不存在的变量而导致的。
- SyntaxError：经常在给 eval()传入的字符串包含 JavaScript 语法错误时发生。
- TypeError：主要发生在变量不是预期类型，或者访问不存在的方法时。
- URIError：只会在使用 encodeURI()或 decodeURI()但传入了格式错误的 URI 时发生。

抛出指定类型的错误：

- throw new Error("错误");

- throw new SyntaxError("错误");

- throw new InternalError("错误");

- throw new TypeError("错误");

- throw new RangeError("错误");

- throw new EvalError("错误");

- throw new URIError("错误");

- throw new ReferenceError("错误");

## 调试技术

### 把消息打印到控制台

console 对象上面有很多的方法，一些方法可以把消息打印到控制台。

常用的打印消息方式：

- console.log()：在控制台中记录错误消息
- console.error()：在控制台中记录信息性内容
- console.warn()：在控制台记录常规消息
- console.info()：在控制台中记录警告消息

不常用的：可以通过 console.log(console)打印所有的方法

- console.dir()

- console.table()

- console.assert()

- console.clear()

- console.count()

- console.time()

- console.timeEnd()

- console.group()

- console.groupEnd()

- console.groupCollapsed()

- console.trace()

- console.debug()

  ......

注意：相比于使用警告框，打印日志消息是更好的调试方法。这是因为警告框会阻塞代码 执行，从而影响对异步操作的计时，进而影响代码的结果。
