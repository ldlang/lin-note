---
sidebar: auto
---

# 类型操作

## 1、泛型

预定义一个类型，在使用这个类型的时候再传入一个类型指定它。相当于先定义了一个函数，接收的参数就是这个预定义的类型，在使用这个函数的时候传递实参，形参接收到值，预定义的类型也就确定了。传入泛型的时候必须使用`<>`，尖括号内的就是要传入的类型。

**注意：** 泛型在定义的时候代表的是任何类型

```typescript
// 定义泛型 T
interface Person<T> {
  name: T;
  age: number;
  sex: T;
}

// 使用 接口Person，并传入 string 给 T 赋值
const obj: Person<string> = {
  name: "Tom",
  age: 0,
  sex: "男",
};
```

### 使用泛型类型变量

原先预定义的泛型参数是可以当作变量来使用的

```typescript
function fun<T>(x: T[]): T[] {
  return x;
}

// 此时上面 T 的类型就是代表string，并且这个 T 可以当作类型变量，在函数中随意使用
fun<string>(["a"]);
```

### 泛型类

在`class`中使用泛型。

```typescript
class Point<T> {
  style: T;
  sub(p: T): T {
    return p;
  }
}

const p = new Point<string>();
```

### 泛型约束

借助`extends `来对泛型进行约束，约束后泛型就必须有余数类型的特征。

```typescript
interface myFun {
  length: number;
}

function fun<T extends myFun>(arg: T): T {
  // 这里约束了T必须有length属性
  console.log(arg.length);
  return arg;
}

fun("a"); // 字符串有length属性可以传
fun(5); // 数字没有number属性，不能传
fun([1]); // 数组可以传
```

### 泛型默认值

一个泛型在定义的时候是可以给默认值的，就像函数一样，如果没有传入类型，那么将使用默认值的类型。

**注意：**

- 如果一个类型参数有一个默认值，它就被认为是可选的。
- 必需的类型参数不能跟在可选的类型参数之后。
- 类型参数的默认类型必须满足类型参数的约束（如果存在）。
- 指定类型参数时，只需为需要的类型参数指定类型参数即可。 未指定的类型参数将解析为其默认类型。
- 如果指定了默认类型并且推断无法选择候选者，则推断默认类型。
- 与现有类或接口声明合并的类或接口声明可能会为现有类型参数引入默认值。
- 与现有类或接口声明合并的类或接口声明可以引入新的类型参数，只要它指定默认值即可。

```typescript
function fun<T = number>(x: T): T {
  return x;
}

// function fun<number>(x: number): number
fun();

// function fun<string>(x: string): string
fun<string>("a");
```

## 2、keyof 类型运算符

取出对象的`key `的类型，或者字面量组成联合类型。

1. 取出 interface 定义对象类型

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   type PersonKeys = keyof Person;
   // 等价于：
   type PersonKeys = "name" | "age";
   ```

2. 对 interface 定义类型，并且 key 也制定了类型

   KeyT 是 string | number - 这是因为 JavaScript 对象键总是被强制转换为字符串，所以 obj[0] 总是与 obj["0"] 相同。

   ```typescript
   interface T {
     [prop: string]: number;
   }

   type KeyT = keyof T;
   // 等价于：
   type KeyT = string | number;
   ```

3. 对于 type 定义的对象类型。

   ```typescript
   type Point = { 5: number; y: number };
   type P = keyof Point;

   let obj: P = 5;
   // 等价于：
   type P = 5 | "y";
   ```

## 3、typeof 类型运算符

可以检测一个表达式，或者函数的类型，用来当类型使用。

```typescript
let str = "hello world";
// let P: string
let P: typeof str = "p";

// 或者

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// type Person = {
//    name: string;
//    age: number;
// }
type Person = (typeof MyArray)[number];
```

## 4、索引访问类型

可以通过类似于对象读取属性的方式，读取对象类型删定义的类型。

```typescript
interface Person {
  name: string;
  age: number;
}

// type PersonName = string
type PersonName = Person["name"];
```

1. 索引类型也是一种类型，也可以使用联合类型

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   // type PersonName = string | number
   type PersonName = Person["name" | "age"];
   // 或者
   type PersonKeys = "name" | "age";
   type PersonName = Person[PersonKeys];
   ```

2. 同时获取接口上定义的所有类型

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   // type PersonName = string | number
   type PersonName = Person[keyof Person];
   ```

## 5、条件类型

类似于 js 中的三元运算符，只不过最后得到的是一个类型而已。

```typescript
interface A {
  a: string;
}

interface B extends A {
  b: string;
}

// type z = number
type z = B extends A ? number : string;
```

## 6、映射类型

如果预先定义了一个对象的类型，一个新的对象类型和原来这个对象类型的所有字段都一致，只不过是是类型不一致，就可以通过类型映射类型快速的转换过去。

```typescript
// 得到所有的key，并将value的值改为 Boolean 类型
type Option<Type> = {
  [Property in keyof Type]: boolean;
};

type Option1 = {
  fun: () => void;
  add: () => void;
};

// type convertOptions = {
//    fun: boolean;
//    add: boolean;
// }
type convertOptions = Option<Option1>;

const obj: convertOptions = {
  fun: true,
  add: false,
};
```

### 映射修饰符

通过`+`或`-`，对映射过来属性的修饰符进行增加，或者删除，如果不写则默认为`+`。

1. 删除原有的 readonly 修饰符

   ```typescript
   interface x {
     readonly x: number;
     readonly y: number;
   }

   //
   type CreateMutable<Type> = {
     -readonly [key in keyof Type]: Type[key];
   };

   // type objType = { x: number;  y: number; }
   type objType = CreateMutable<x>;
   ```

2. 增加对属性的可选修饰符

   ```typescript
   interface x {
     readonly x: number;
     readonly y: number;
   }

   // + 可以省略不写
   type CreateMutable<Type> = {
     [key in keyof Type]?: Type[key];
   };

   // type objType = {
   //    readonly x?: number | undefined;
   //    readonly y?: number | undefined;
   // }
   type objType = CreateMutable<x>;
   ```

### 通过 `as` 重新映射键

涉及一些莫名的 ts 方法[直接参考](https://ts.nodejs.cn/docs/handbook/2/mapped-types.html#%E9%80%9A%E8%BF%87-as-%E9%87%8D%E6%96%B0%E6%98%A0%E5%B0%84%E9%94%AE)

## 7、 模板字面类型
