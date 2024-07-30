---
sidebar: auto
---

# 类型映射

## 1、简介

映射（mapping）指的是，将一种类型按照映射规则，转换成另一种类型，通常用于对象类型。

## 2、类型修饰符

`+`，`-`，`?`，`readonly`

```typescript
// 增加
type MyObj<T> = {
  +readonly [P in keyof T]+?: T[P];
};

// 移除
type MyObj<T> = {
  -readonly [P in keyof T]-?: T[P];
};
```

## 3、键名重映射

### 语法

键名重映射的语法是在键名映射的后面加上`as + 新类型`子句。这里的“新类型”通常是一个模板字符串，

```typescript
type TX = {
  x: string;
  y: string;
};

type TY = {
  [prop in keyof TX as `${prop}_ID`]: number;
};
```

一般通过泛型的传入类型，以达到复用。

```typescript
type TX = {
  x: string;
  y: string;
};

type TY<T> = {
  [prop in keyof T as prop extends string ? `${prop}_ID` : never]: number;
};
```

### 属性过滤

如果`as`为`never`类型就可以过滤掉不需要的类型。

```typescript
type TX = {
  x: string;
  y: number;
};

// 如果 value 的类型不是 string 则将其过滤掉
type TY<T> = {
  [prop in keyof T as T[prop] extends string ? prop : never]: number;
};

// type TZ = { x: number}
type TZ = TY<TX>;
```

### 联合类型映射

由于键名重映射可以修改键名类型，所以原始键名的类型不必是`string|number|symbol`，任意的联合类型都可以用来进行键名重映射。

```typescript
interface IPerson {
  name: "ZS";
  age: number;
}

interface IPerson1 {
  name: "LS";
  sex: number;
}

type TPerson<T extends { name: string }> = {
  [prop in keyof T as T["name"]]: (e: string) => void;
};

type TPerson1 = TPerson<IPerson | IPerson1>;

const person: TPerson<IPerson | IPerson1> = {
  ZS: (e) => {},
  LS: (e) => {},
};
```
