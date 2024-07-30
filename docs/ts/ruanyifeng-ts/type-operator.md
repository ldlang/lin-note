---
sidebar: auto
---

# 类型运算符

## 1、keyof 运算符

**`keyof` 接受一个对象作为参数，返回该对象所有键名（`key`）组成的联合类型。**

### 简介

- `keyof` 接受一个对象作为参数，返回该对象所有键名（`key`）组成的联合类型。

  ```typescript
  interface IPerson {
    name: string;
    age: number;
    fun(): void;
  }

  // TPerson 的类型:  name | age | fun
  type TPerson = keyof IPerson;

  const person: TPerson = "fun";
  ```

- 因为`js`中对象`key`的类型，只能是`string | number | symbol`，所以给`keyof`传入`any`只能返回这三个类型。

  ```typescript
  // keyT 的类型： string | number | symbol
  type keyT = keyof any;
  ```

- 用`&`（交集）取其中一个类型

  ```typescript
  // keyT 的类型： string
  type keyT = keyof any & string;
  ```

- `object`类型本身没有属性，所以`keyof object`得到的`never`

  ```typescript
  type KeyT = keyof object; // never
  ```

- 取索取签名的类型

  JavaScript 属性名为字符串时，包含了属性名为数值的情况，因为数值属性名会自动转为字符串，所以后面那个的类型是`string | number`

  ```typescript
  interface INumber {
    [prop: number]: any;
  }

  // TNum 类型： number
  type TNum = keyof INumber;

  interface IString {
    [prop: string]: any;
  }

  // TStr 类型： string | number
  type TStr = keyof IString;
  ```

- 给`keyof`传入数组得到的结果不仅仅是`key`，还有数组身上的所有属性方法

  ```typescript
  type TArr = ["a", "b", "c"];

  // TArrKey的类型： '0'| '1' | '2' | 'length' | 'pop' | 'push' ......
  type TArrKey = keyof TArr;

  const arr: TArrKey = "0";
  ```

- 联合类型只能放回两个类型共有的`key`，如果没有共有的`key`那么得到的是`never`

  ```typescript
  interface IPerson {
    name: string;
    age: number;
  }

  interface IPerson1 {
    name: string;
    sex: string;
  }

  // KeyT 的类型： "name"
  type KeyT = keyof (IPerson | IPerson1);
  ```

- 交叉类型返回两个类型的所有`key`

  ```typescript
  interface IPerson {
    name: string;
    age: number;
  }

  interface IPerson1 {
    name: string;
    sex: string;
  }

  // type KeyT = "name" | "age" | "sex"
  type KeyT = keyof (IPerson & IPerson1);
  // 等同于
  type KeyT = keyof IPerson | keyof IPerson1;
  ```

- 取出所有联合类型的`value`类型组成联合类型

  ```typescript
  interface IPerson {
    name: string;
    age: number;
  }

  interface IPerson1 {
    name: string;
    sex: boolean;
  }

  type KeyT = keyof IPerson | keyof IPerson1;
  // ValueT 的类型： string | number | boolean
  type ValueT = (IPerson & IPerson1)[KeyT];
  ```

### keyof 的用途

1. 确定对象`val`的类型

   ```typescript
   interface IPerson {
     name: string;
     age: number;
   }

   // T 被 keyof T 约束了，那么 K 就只能是 IPerson 的 key 的联合类型
   function fun<T, K extends keyof T>(person: T, key: K): T[K] {
     return person[key];
   }

   fun<IPerson, "age">({ name: "张三", age: 18 }, "age");
   ```

2. 属性映射，即将一个类型的所有属性逐一映射成其他值。

   公共接口

   ```typescript
   interface IPerson {
     readonly name: string;
     readonly age: number;
   }
   ```

   - 将所有的 value 类型都被设置为了 string 类型

     ```typescript
     type TNewIPerson<T> = {
       [key in keyof T]?: string;
     };

     const newPerson: TNewIPerson<IPerson> = {
       name: "张三",
       age: "18",
     };
     ```

   - 将所有的属性设置为可选属性

     ```typescript
     type TNewIPerson<T> = {
       [key in keyof T]?: T[key];
     };

     const newPerson: TNewIPerson<IPerson> = {};
     ```

   - 深度将所有属性变为可选属性

     ```typescript
     interface IPerson {
       name: string;
       age: number;
       address: {
         city: string;
         street: string;
       };
     }

     // 递归调用
     type TPartialDeep<T> = {
       [P in keyof T]?: TPartialDeep<T[P]>;
     };

     const person: TPartialDeep<IPerson> = {
       name: "张三",
       address: {
         city: "北京",
       },
     };
     ```

   - 去掉所有属性的可读

     ```typescript
     type TPerson<T> = {
       -readonly [key in keyof T]: T[key];
     };

     const person: TPerson<IPerson> = {
       name: "张三",
       age: 0,
     };

     person.name = "李四";
     ```

## 2、in 运算符

在`js`中`in`是用来判断对象是否包含某个`key`，返回布尔值。

```js
const person = {
  name: "张三",
  age: 0,
};
if ("name" in person) {
  person.name = "李四";
}
```

在`TS`中则是相当于循环，依次取出联合类型的每一个成员。

```typescript
type TPersons = "ZS" | "LS" | "WS";

type TPersonObj = {
  [key in TPersons]: { name: string };
};
// TPersonObj 的类型
type TPersonObj = {
  ZS: {
    name: string;
  };
  LS: {
    name: string;
  };
  WS: {
    name: string;
  };
};
```

## 3、[] 运算符

- 取出对象中某个`key`的`value`类型。

  ```typescript
  interface IPerson {
    name: string;
    age: number;
  }

  // 取出 IPerson 中 name 的 value 的 类型，为 string
  type TName = IPerson["name"];

  const tName: TName = "张三";
  ```

- 如果取的联合类型，那么得到的也是联合类型，相当于是将联合类型中所有的`key`的`value`都遍历一遍拿出来组成联合类型

  ```typescript
  interface IPerson {
    name: string;
    age: number;
  }
  // TName 的类型: string | number
  type TName = IPerson[keyof IPerson];

  const tName: TName = 5;
  ```

- 对数组也适用

  ```typescript
  const MyArray = ["a", 5, "c"];

  // Person 的类型： string | number
  type Person = (typeof MyArray)[number];
  ```

**注意：** 方括号中不能有运算

```typescript
interface IPerson {
    name: string;
    age: number;
}

type TKey = 'name'
const key = 'name'

// 正确
type T2 = IPerson[TKey]
// 报错，只能用类型去取，而不能用值去取
type T3 = IPerson[key]
// 报错
type T2 = IPerson['a' + 'ge']
```

## 4、extends...?: 条件运算符

类似于三元运算符，如果一个类型`A`是`B`的子类型，那么就返回`A`，否则返回`B`。

**子类型说明：如果一个类型 A 包含了 B 的所有属性，那么 A 是 B 的子类型。**

```typescript
type T = A extends B ? A : B;
```

- 若果是联合类型进行运算，那么将会被展开运算，但是只有返回的是数组好像才有这个问题。

  ```typescript
  (A|B) extends U ? X : Y

  // 等同于
  (A extends U ? X : Y) |
  (B extends U ? X : Y)
  ```

  ```typescript
  type ToArray<Type> = Type extends any ? Type[] : never;

  // string[]|number[]
  type T = ToArray<string | number>;
  ```

  使用`[]`将类型包裹起来，可以解决这个问题。

  ```typescript
  type ToArray<Type> = [Type] extends [any] ? Type[] : never;

  // (string | number)[]
  type T = ToArray<string | number>;
  ```

- 类似以三元运算符，也可以嵌套使用。

  ```typescript
  A extends B ? B extends C ? A : B : C
  ```

## 5、infer 运算符

一般在和条件运算符`extends`配合使用，相当于定义一个被`TS`推断的类型出来。下面使用`infer`推断了一个`U`的类型，`U`类型就可以在后面使用。

```typescript
type TInfer<T> = T extends (infer U)[] ? U : T;

// (infer U)[]推断为是一个 U[]，也就是说如果传入 T是一个数组，那么 U[] 就是这个数组的类型。
type TInfer2 = TInfer<number[]>;
```

如果没有进行`infer`推断上面，那么上面就要显示传入`U`的类型，就会比较麻烦。

```typescript
type TInfer<T, U> = T extends U[] ? U : T;

type TInfer3 = TInfer<number[], number>;
```

例：

- 传入函数返回函数的`promise`版本

  ```typescript
  type ReturnPromise<T> = T extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T;

  // type ReturnPromise2 = (a: number) => Promise<number>
  type ReturnPromise2 = ReturnPromise<number>;
  ```

- 传入对象，提取对象`value`的类型，组成数组。

  ```typescript
  type TInferObj<T> = T extends { a: infer U; b: infer K } ? [U, K] : T;

  // type TInferObj2 = [number, string]
  type TInferObj2 = TInferObj<{ a: number; b: string }>;
  ```

## 6、Is 运算符

函数返回布尔值的时候，可以使用`is`运算符，限定返回值与参数之间的关系。在 TypeScript 中，使用 is 运算符时，它的左边是函数的参数名，右边是要判断的类型。这种语法被称为类型谓词，用于在函数内部保护参数的类型，从而避免在函数体内执行特定操作时出现检查参数类型的运行时错误。

使用的 pet is Fish 是一个类型保护谓词，它的作用是判断某个对象 pet 是否是 Fish 类型。如果条件成立，则该语句返回 true，并使得编译器将 pet 推断为 Fish 类型，从而避免在后续的代码中出现运行时错误或类型不匹配的问题。如果条件不成立，则该语句返回 false，pet 仍被推断为 Fish | Bird 类型。

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
```

## 7、模板字符串

在`TS`中可以使用模板字符串构建类型，但只支持`string`、`number`、`bigint`、`boolean`、`null`、`undefined`、`Enum`这 7 中类型，其他的类型都会报错。

1. 字面量类型

   ```typescript
   type x = "hello";

   // type y = "hello world"
   type y = `${x} world`;
   ```

2. 一个联合类型，与字面量类型

   联合类型会被展开，分别与字符串拼接，组件联合类型

   ```typescript
   type x = "a" | "b";

   // type y = "a_hello" | "b_hello"
   type y = `${x}_hello`;
   ```

3. 两个联合类型

   会交叉展开联合类型，组成新的联合类型

   ```typescript
   type x = "a" | "b";
   type y = "c" | "d";

   // type z = "ac" | "ad" | "bc" | "bd"
   type z = `${x}${y}`;
   ```

## 8、satisfies 运算符

用于检测某个值是否符合指定类型，一个值一开始没有指定类型，后面就可以使用`satisfies`检测。

如，一个对象一开始没指定类型，但后面想通过类型检测去检查可以使用`Record<>`工具类，虽然能检测出来是否符合这个类型，但是破坏了`TS`原有的对数据的类型推断。此时可以使用`satisfies`，即保留了对`TS`对类型原有的推断，有检测了这个值的类型是否符合要求。

```typescript
type Colors = "red" | "green" | "blue";
type RGB = [number, number, number];

// 虽然能够检查每个键值对是否符合类型，但是每个value的类型都变成了 string|RGB ，不再是 TS 推断出来的
const palette: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
}(
  // 此时green虽然本质上是 string 类型，但是 TS 认为他是 string|RGB， 所以不能正确的调用 substring
  palette.green as string
).substring(1);
```

```typescript
// 这样即保留了 ts 对类型的推断，又对键值对进行了检测。
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

// 因为保留了 TS 的类型推测， palette.green 是string类型， 所以能正常调用 substring 方法
palette.green.substring(1);
```
