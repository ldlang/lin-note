---
sidebar: auto
---

# 类型缩小

## typeof 类型保护

一个值如果是联合类型，但是我们只对其中一种类型进行特殊的处理，那么就可以使用 typeof 将其缩小为我们需要的类型，在进行特殊的处理。

```typescript
function fun(str: string | string[] | null) {
  // 虽然缩小为了 object类型，但是null也是 object，所以还是会报错
  if (typeof str === "object") {
    str.map((item) => item);
  }
  // 解决方式，因为在if中 null 会被隐式转为false，所以进到if里面的一定不是null
  if (str && typeof str === "object") {
    str.map((item) => item);
  }
}
```

## 相等性缩小

在 ts 中还可以使用`switch` 语句和 `===`、`!==`、`==` 和 `!=` 等相等性检查来缩小类型。

用`===`来缩小类型，其实就是如果两个值的类型有一个相同的部分，那么`===`才成立，也能进行类型缩小，但是值也要相同。

```typescript
function main2(x: number | string, y: number | boolean) {
  if (x === y) {
    x.toFixed();
  }
}

或者;
interface a {
  a: number;
}
interface b {
  b: number;
}
interface c {
  c: number;
}
function main(x: a | b, y: b | c) {
  if (x === y) {
    console.log(x.b);
  }
}
```

JavaScript 对 `==` 和 `!=` 的更宽松的相等性检查也正确地缩小了类型。 如果你不熟悉，检查某事 `== null` 是否实际上不仅检查它是否具体是值 `null` - 它还检查它是否可能是 `undefined`。 这同样适用于 `== undefined`： 它检查一个值是 `null` 还是 `undefined`。

```typescript
function main3(x: number | null | undefined) {
  if (x != null) {
    x.toFixed();
  }
}
```

## `in` 运算符缩小

JavaScript 有一个运算符来确定对象或其原型链是否具有名称属性： `in` 运算符。ts 页认为能进行类型缩小，但感觉实用性不强。

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}
```

## `instanceof` 缩小

和 typeof 类似。**instanceof** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```typescript
function fun(x: string[] | string) {
  if (x instanceof Array) {
    x.map((item) => item);
  }
}
```
