---
sidebar: auto
---

# 常见误区

### 1、结构赋值默认值

只有严格等于 undefined 的时候才会使用默认值

1. 对象的解构赋值

```js
const { a = 1 } = { a: null };
console.log(a); // null

const { a = 1 } = { a: undefined };
console.log(a); // 1

const { a = 1 } = { a: 0 };
console.log(a); // 0

const { a = 1 } = { a: false };
console.log(a); // false

const { a = 1 } = { a: "" };
console.log(a); // ''

const { a = 1 } = { a: NaN };
console.log(a); // NaN
```

2. 数组的解构赋值

```js
const [a = 1] = [undefined];
console.log(a); // 1

const [b = 1] = [null];
console.log(b); // null

const [c = 1] = [0];
console.log(c); // 0

const [d = 1] = [false];
console.log(d); // false

const [e = 1] = [""];
console.log(e); // ''

const [f = 1] = [NaN];
console.log(f); // NaN
```
