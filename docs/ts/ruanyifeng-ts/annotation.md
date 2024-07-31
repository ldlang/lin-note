---
sidebar: auto
---

# 注释指令

## 1、// @ts-nocheck

告诉编译器不对当前脚本进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。

```typescript
// @ts-nocheck
const element = document.getElementById(123);
```

## 2、// @ts-check

如果一个 JavaScript 脚本顶部添加了`// @ts-check`，那么编译器将对该脚本进行类型检查，不论是否启用了`checkJs`编译选项。

```typescript
// @ts-check
let isChecked = true;

console.log(isChceked); // 报错
```

## 3、// @ts-ignore

告诉编译器不对**下一行**代码进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。

```typescript
let x: number;

x = 0;

// @ts-ignore
x = false; // 不报错
```
