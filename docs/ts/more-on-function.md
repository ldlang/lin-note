---
sidebar: auto
---

# 关于函数

## 函数类型表达式

函数类型表达式类似于一个箭头函数，`(x:string)=>void`该函数类型表达式，表示的是一个函数接收必传的一个 string 类型 x 参数，并且该函数的没有返回值。

```typescript
const fun: (x: string) => void = (x) => {};
```

## 调用签名

1. 描述签名

   ```typescript
   type description = {
     text: string; // 签名
     // 描述函数，这里就不是通过=> 的方式描述返回值，而是通过 :
     // 描述一个函数接收一个number类型的参数，返回一个布尔值
     (x: number): boolean;
   };
   ```

2. 调用签名

   ```typescript
   type description = {
     text: string;
     (x: number): boolean;
   };
   function fun(fn: description) {
     console.log(fn.text + "" + fn(6));
   }

   function myFunc(x: number) {
     return x > 3;
   }
   myFunc.text = "我是文本"; // 使用签名
   fun(myFunc);
   ```

## 构造签名

可以在调用签名前使用`new`来编写签名。

```typescript
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

## 泛型函数

在 ts 中，想要描述两个值之间的对应关系时，会使用泛型

```typescript
function fun2<T>(arr: T[]): T[] {
  return arr;
}

// ts会自动推断泛型 T 为number的类型
fun2([1, 2, 3]);
```

### 推断

在使用泛型函数的时候，可以不明确的指定泛型的类型，ts 会自动推断他的类型，也可以使用多个泛型。

```typescript
function fun<T, Y>(arr: T[], str: Y): Y[] {
  return arr.map((x) => x + "" + str) as Y[];
}

// 会自动推断为先的类型
// function fun<number, string>(arr: number[], str: string): string[]
const parsed = fun<number, string>([1, 2, 3], "a");
```

### 约束条件

可以个泛型增加约束的条件，通过 `extends`关键字，使泛型的范围在约束条件之内。

```typescript
// 指定T 必须有 length 属性
function fun<T extends { length: number }>(x: T): T[] {
  return [x];
}

// function fun<number[]>(x: number[]): number[][]
fun([1, 2, 3]);

// function fun<string>(x: string): string[]
fun("a");
```

### 指定参数类型

在使用泛型函数的时候，我们可以在调用函数的时候指定某个泛型的类型，因为 ts 的推断并不会总是正确的。

```typescript
function fun<T>(x: T[], y: T[]): T[] {
  return x.concat(y);
}

// 如果没有指定泛型的类型，那么泛型就会被推断为先书写的类型，后面的类型就不通过了
// function fun<string>(x: string[], y: string[]): string[]
fun(["a"], [1, 2, 3]);

// 指定类型
// function fun<string | number>(x: (string | number)[], y: (string | number)[]): (string | number)[]
fun<string | number>(["a"], [1, 2, 3]);
```

### 可选参数

函数接收的形参是如果不用`?`指定为可选的，那么是必传的，

**注意：**

1. 但是如果一个参数变为了可选参数，那么这个参数的联合类型就会增加一个`undefined`
2. 可选参数必须至于参数的最后，假如有两个参数，其中第一个是可选参数，只给函数传递了一个参数，那么是给第一个参数赋值，并不是给后面那个必传的参数赋值。

```typescript
// 参数x变为非必传的
function fun(x?: number) {
  // x的联合类型改变 x: number | undefined
  return x!.toFixed();
}

fun(5);
```

## 函数重载

同一个函数里面对传入的同一个参数类型的不同，要进行不同的处理，就可以为同一个函数提供多个函数类型来进行重载，说白了就是给一个函数写多种传入参数和返回值不同的情况，ts 自动去匹配使用那种情况。

**注意**：

1. 原始的函数必须满足所有重载函数的参数

   ```typescript
   function fun(num: number, str: string): number;
   function fun(str: string): string;
   // 重载的函数有一个参数的也有三个参数的，原始函数就必须满足有重载函数的造型
   // 第一个参数在重载函数中既有number，也有string，所有原始函数的参数至少是这两个类型
   function fun(x: number | string, y?: string): string | number {
     return x;
   }
   ```

2. 重载函数的参数命名不一定要和原始函数一致，只要位置一致就行。

3. 参数个数会优先匹配重载函数，如果匹配了重载函数，就不会去匹配原始函数了。

## 声明 this 的类型

直接使用 this，则 this 的类型为 any，需要声明才有类型。

```typescript
interface Deck {
  str: string;
  fun(this: Deck): () => string; // 显示的去传入this，并指定类型
}
let point: Deck = {
  str: "字符串",
  fun: function (this: Deck) {
    return () => {
      return this.str; // 这里的this的类型就是Deck
    };
  },
};
```

