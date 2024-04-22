---
sidebar: auto
---

# 日常类型

## 类型基础

### **boolean** 布尔值

```typescript
let isDone: boolean = true;
```

### **number** 数字

```typescript
let num: number = 15;
```

### **string** 字符串

```typescript
let name: string = "张三";
```

### **Array** 数组

普通写法

```typescript
// 表示一个数组里面每个元素都是字符串
let list: string[] = ["15", "a"];

// 数组对象
let arr: { suit: string; card: number }[];
arr = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
];
```

泛型写法

```typescript
// 表示一个数组里面都是数字类型
let list: Array<number> = [1, 2, 3, 5];
```

### **tuple** 元组

元组其实就是一个数据的造型，给元组赋值满足定义时的形状。

定义一个元组，第一个只能是 string 类型，第二个只能是 number 类型，并且这个数组只能有两个元素，不能同意元组以外的元素。

```typescript
let list: [string, number];

list = ["a", 15];
list = ["a", 15, 2]; // 报错
```

### **any** 任意值

1. 当你想要调用一个属性里面的方法或者属性，但是里面的方法和属性没有你不知道其类型，你就可以给他赋值为 any，就可以任意调用里面的方法和属性。
2. 可能认为 Object 有相似的作用，就像它在其它语言中那样。 但是 Object 类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法。
3. 被定义为 any 类型的值，相当于关闭了 ts 对他的类型检查
4. 造成类型污染，如果将一个`any`类型的值赋值给另一个值，那么这个值的类型也会变成`any`。

```typescript
let color: any = "15";
color = 15;
```

### **void** 空值

当一个值被指定为 void 时，这个值只能被赋值为 null 和 undefined，因为他不能是任何值

```typescript
let variable: void = undefined;
```

### **null** 和**undefined**

```typescript
null 和 undefined是所有类型的子类型
```

### **never** 永远不存在的值

永远不存在的值的类型，never 类型是任何类型的子类型

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
```

### **unknown** 未知类型，类型安全的 any

它表示一个类型未知的值。和 any 类型类似，unknown 也可以被赋值为任何类型的值，但是在使用 unknown 类型值时，需要先进行类型检查或类型断言，以确保类型安全。当一个值未知类型时最好用 unknown，不要用 any。

1. unknown 可以被赋值为任何类型的值

   ```typescript
   let a: unknown;
   a = true;
   a = 15;
   a = "str";
   ```

2. 虽然最后被赋值为了一个字符串，但是本质类型上是一个 unknown，所以不能赋值给其他类型，要赋值也行，先判断类型，就可以给其他类型的值赋值，或者使用类型断言 as,我们知道 a 是一个 string，但是编辑器不知道，此时就可以使用类型断言(as)告诉编辑器 a 就是一个 string。

   ```typescript
   let b: string
   b = a // 报错

   // 判断类型再赋值
   if (typeof a == "string"){
       b = a
   }
   或者
   b = a as string   等同于  b = <string>a
   ```

3. 能够使用的运算符也是有限的，只能进行比较运算（运算符`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符`!`）、`typeof`运算符和`instanceof`运算符这几种，其他运算都会报错。

### **enum** 枚举

- 枚举的时候不直接赋值，那么枚举的属性的值就是从 0 开始的数值

  ```typescript
  enum Color {
    red, // 没有进行赋值，red的值就是0
    green, // 值是1
    blue = 2, // 因为默认值就是2，其他枚举不赋值也不会报错
  }
  let c = Color.red; //c的值是0
  ```

- 枚举的时候直接赋值，那么每个枚举的属性都要赋值

  ```typescript
  enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
  }
  let c = Color.Red;
  ```

### object

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

- 常用方式（元组）

  ```typescript
  let b: { name: string };
  b = { name: "张三" };
  b = { name: "张三", age: "李四" }; // 报错，结构必须和定义的一致
  ```

- 不常用方式

  ```typescript
  let a: object;
  a = function m() {};
  a = {};
  ```

- 任意值

  定义一个 key 为 string，value 为任意值的属性，可以有多个传入的属性

  ```typescript
  let b: {
      name: string,
      [prop: string]: any
  }
  //此时除了name是必须的其他任意都是可选的
  b = {
      name: '张三',
      age: 15，
      school: '学校'
  }
  ```

### 联合类型

将几种类型使用`|`联合起来表示一个值的类型，该值可以是联合类型中的任意一种类型。但是如果对这个值某种类型独有属性的操作就必须先确定他的类型，可以使用`typeof`或者`类型断言`，如果是该值所有类型共同的方法，那么则可以不用确定类型。

- 单独访问某种属性的特性，必须先确定类型

  ```typescript
  function fun(x: string | number) {
    if (typeof x === "string") {
      console.log(x.length);
    } else {
      // 因为只有两种类型，确定了一种，这种也就确定了
      console.log(x.toFixed());
    }
  }
  ```

  ```typescript
  interface type1 {
    aar(): void;
    bar(): void;
  }

  interface type2 {
    bar(): void;
    car(): void;
  }

  const obj: type1 | type2 = {
    aar() {},
    bar() {},
    car() {},
  };

  // 该方法为两个类型中共有的方法，能直接访问
  obj.bar();

  // aar为tyep1这个类型独有的所以得先确定类型，泛型的方式
  (<type1>obj).aar();

  // car为type2独有的类型，通过类型断言确定为type2的类型
  (obj as type2).car();
  ```

- 访问联合类型共有的属性，可以直接访问

  ```typescript
  function fun(x: x | y) {
    x.toString();
  }
  ```

## 高级类型

### 类型别名

使用关键字`type`来指定类型别名，可以使用类型别名来为任何类型命名。

- 为一个自定义类型指定一个联合类型

  ```typescript
  // x类型就代表 string 和 number 的联合类型
  type x = string | number;

  function fun(params: x) {
    if (typeof params === "string") {
      console.log(params.length);
    } else {
      console.log(params.toFixed());
    }
  }
  ```

- 指定一个对象的类型别名，类似于`interface`

  ```typescript
  type y = {
    name: string;
    age: number;
  };

  // 使用y这个类型的对象，必须保持和y的造型一致
  const obj2: y = {
    name: "Bob",
    age: 20,
  };
  ```

- 如果类型别名指定的不是类型，而是值，那么则相当于是枚举值

  ```typescript
  // z 相当于枚举了 'a' | 2 | 'c'
  type z = "a" | 2 | "c";
  let str: z;

  // 'a'是z类型中枚举的值，可以赋值
  str = "a";

  // 's'不是z类型中枚举的值，所有不可以赋值
  str = "s"; // 报错，不能将类型“"s"”分配给类型 z。
  ```

### interface 接口

是一种声明对象类型的方式，`interface`的所有功能都在`type`中可用，他们之间可以任意选择，主要区别在于无法重新打开类型以添加新属性，而接口始终可扩展。

```typescript
interface y {
  name: string;
  age: number;
}

const obj2: y = {
  name: "Bob",
  age: 20,
};
```

![image](/ts/type-and-interface.png)

### 类型断言

有时候你比 ts 更加了解该数据的类型，此时就可以`as`关键字进行类型断言。

**注意：**

1. 联合类型可以被断言为其中一个类型
2. 父类可以被断言为子类
3. 任何类型都可以被断言为 any
4. any 可以被断言为任何类型
5. 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

- 断言为一致类型来使用这个类型的属性

  ```typescript
  function fun(x: string | number) {
    return (x as string).length;
  }
  ```

- 双重断言

  ```typescript
  function fun(x: number) {
    return (x as any as string).length;
  }
  ```

### 字面类型

- 使用 var、let 定义变量并赋值为简单的数据类型，那么 ts 会自动推断他的类型

  ```typescript
  // 推断str为 string类型
  let str = "a";
  ```

- 使用 const 定义变量并赋值为简单的数据类型，那么这个变量的类型就是字面类型

  ```typescript
  // 推断str为 'a' 类型
  const str = "a";

  等同于;
  const str: "a" = "a";
  ```

- 通过字面量组合成为联合字面量，类似于枚举值

  ```typescript
  // 此时 y只能被赋值为 'letf' 或 'center'
  function fun(y: "letf" | "center") {}
  ```

- 字面量也可以和非字面类型结合使用

  ```typescript
  interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {}
  configure({ width: 100 });
  ```

1. 字面推断

   ```typescript
   function fun(delay: number, methods: "post") {}

   const req = { method: "post", delay: 5 };

   // 此时req.method 只被推断为string的类型，不能赋值给'post'类型
   fun(req.delay, req.method);
   ```

   解决方式一，将 req 变为字面量类型

   ```typescript
   const req = { method: "post", delay: 5 } as const;
   ```

   解决方式二，将 req.method 断言为 'post'

   ```typescript
   fun(req.delay, req.method as "post");
   ```

### 非空断言运算符（后缀 `!`）

如果一个值可能是 null 或者 undefined，此时在同他身上读取属性是不行的，此时就可以使用非空断言，或者是 js 中的链判断运算符也行。非空断言是我们告诉程序这个值一定不会是空的，而链判断运算符是如果这个值为空就不往后面执行。

非空断言其实也是类型断言，只不过是断言为该值不是 `null` 或 `undefined`。

```typescript
function fun(delay?: number) {
  // 非空断言
  return delay!.toString();
  // 链判断运算符
  return delay?.toString();
}
```
