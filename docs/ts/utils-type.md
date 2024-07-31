---
sidebar: auto
---

<style scoped>
  .sidebar{
    width: 650px;
  }
</style>

# 实用工具类型

## Awaited<`Type`> 取出 promise 的返回值类型

这种类型旨在模拟 `async` 函数中的 `await` 之类的操作，或 `Promise` 上的 `.then()` 方法 - 特别是它们递归解包 `Promise` 的方式。

```typescript
type A = Awaited<Promise<string>>;
```

## Partial<`Type`> 变为可选

构造一个将 `Type` 的所有属性设置为可选的类型。 此实用程序将返回一个表示给定类型的所有子集的类型。

```typescript
interface A {
  a: string;
  b: number;
}

// 在B类型中所有的属性都变为可选属性
type B = Partial<A>;
```

## Required<`Type`> 变为必选

构造一个由设置为 required 的 `Type` 的所有属性组成的类型。 与 Partial 相反。

```typescript
interface A {
  a?: string;
  b?: number;
}

// 在B类型中所有的属性都变为必选属性
type B = Required<A>;
```

## Readonly<`Type`> 变为只读

构造一个将 `Type` 的所有属性设置为 `readonly` 的类型，这意味着构造类型的属性不能重新分配。

```typescript
interface A {
  a: string;
  b: number;
}

// 在B类型中所有的属性都变为了只读属性
type B = Readonly<A>;
```

## Record<Keys, Type> 返回 keys 和 Type 组成对象类型

构造一个对象类型，其属性键为 `Keys`，其属性值为 `Type`。 此实用程序可用于将一种类型的属性映射到另一种类型。

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## Pick<Type, Keys> 挑选`Keys`是`Type`里面被选定的键名

通过从 `Type` 中选取一组属性 `Keys`（字符串字面或字符串字面的并集）来构造一个类型。

```typescript
interface A {
  x: number;
  y: number;
}

type T1 = Pick<A, "x">; // { x: number }
type T2 = Pick<A, "y">; // { y: number }
type T3 = Pick<A, "x" | "y">; // { x: number; y: number }
```

## Omit<Type, Keys> 删除指定的属性`Keys`

通过从 `Type` 中选择所有属性然后删除 `Keys`（字符串字面或字符串字面的并集）来构造一个类型。 与 Pick 相反。

```typescript
interface A {
  x: number;
  y: number;
}

type T1 = Omit<A, "x">; // { y: number }
type T2 = Omit<A, "y">; // { x: number }
type T3 = Omit<A, "x" | "y">; // { }
```

## Exclude<UnionType, ExcludedMembers> 交集之外的

通过从 `UnionType` 中排除所有可分配给 `ExcludedMembers` 的联合成员来构造一个类型。

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
```

## Extract<Type, Union> 交集

通过从 `Type` 中提取所有可分配给 `Union` 的联合成员来构造一个类型。

```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"
```

## NonNullable<`Type`>从 `Type` 中排除 `null` 和 `undefined` 来构造一个类型。

通过从 `Type` 中排除 `null` 和 `undefined` 来构造一个类型。

```typescript
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number
```

## Parameters<`Type`> 函数类型`Type`里面提取参数类型，组成一个元组返回。

从函数类型 `Type` 的参数中使用的类型构造元组类型。

```typescript
type T1 = Parameters<() => string>; // []

type T2 = Parameters<(s: string) => void>; // [s:string]

type T3 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

type T4 = Parameters<(x: { a: number; b: string }) => void>; // [x: { a: number, b: string }]

type T5 = Parameters<(a: number, b: number) => number>; // [a:number, b:number]
```

## ConstructorParameters<`Type`> 提取构造方法`Type`的参数类型，组成一个元组类型返回。

从构造函数类型的类型构造元组或数组类型。 它生成一个包含所有参数类型的元组类型（如果 `Type` 不是函数，则生成类型 `never`）。

```typescript
type T1 = ConstructorParameters<new (x: string, y: number) => object>; // [x: string, y: number]
```

## ReturnType<`Type`> 读取函数返回值类型

构造一个由函数 `Type` 的返回类型组成的类型。

```typescript
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string
```

## InstanceType<`Type`> 提取构造函数的返回值的类型

构造一个由 `Type` 中的构造函数的实例类型组成的类型。

```typescript
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C
let c: T0 = new C();
```

## ThisParameterType<`Type`> 提取函数类型中`this`参数的类型。

提取函数类型的此参数的类型，如果函数类型没有 `this` 参数，则提取 unknown。

```typescript
function toHex(this: number) {
  return this.toString(16);
}

type T = ThisParameterType<typeof toHex>; // number
```

## OmitThisParameter<`Type`> 函数类型中移除 this 参数。

从 `Type` 中删除 this 参数。 如果 `Type` 没有显式声明的 `this` 参数，则结果只是 `Type`。 否则，将从 `Type` 创建一个没有 `this` 参数的新函数类型。 泛型被删除，只有最后一个重载签名被传播到新的函数类型中。

```typescript
function toHex(this: Number) {
  return this.toString(16);
}

type T = OmitThisParameter<typeof toHex>; // () => stringfunction toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

## ThisType<`Type`> 不返回类型，只用来跟其他类型组成交叉类型

此实用程序不返回转换后的类型。 相反，它用作上下文 this 类型的标记。

```typescript
interface HelperThisValue {
  logError: (error: string) => void;
}

let helperFunctions: { [name: string]: Function } & ThisType<HelperThisValue> =
  {
    hello: function () {
      this.logError("Error: Something wrong!"); // 正确
      this.update(); // 报错
    },
  };
```

## ReadonlyArray 只读数组

`ReadonlyArray<Type>`用来生成一个只读数组类型，类型参数`Type`表示数组成员的类型。
