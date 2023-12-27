---
sidebar: auto
---

# 模块

基本上和 es6 的导入模块语法一致，能够导入类型。

## ts 中的模块

### import type

只能导入类型，不能导入值，如果导入的是值就会报错。

```typescript
// app.ts 导出
export type Cat = {
  color: string;
  year: number;
};

export interface Dog {
  color: string;
  year: number;
}

// greeter.ts 导入
import type { Cat, Dog } from "./app";

let cat: Cat = {
  color: "",
  year: 0,
};

let dog: Dog = {
  color: "",
  year: 0,
};
```

### 内敛 type

在同一个导入语句中，如果导入的是值可以正常使用，如果导入的是类型，可以使用 type 去指定。

```typescript
// app.ts 导出
export type Cat = {
  color: string;
  year: number;
};

export interface Dog {
  color: string;
  year: number;
}

export const fun = () => "fun";

// greeter.ts 导入
import { fun, type Cat, type Dog } from "./app";

let cat: Cat = {
  color: "",
  year: 0,
};

let dog: Dog = {
  color: "",
  year: 0,
};

let fn = fun();
```
