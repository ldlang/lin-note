---
sidebar: auto
---

# 类型断言

## 1、基础说明

* 语法

  1. `<类型>值`

     ```typescript
     const person:unknown = 'ZS'
     const personZ:string = <string>person
     ```

  2. `值 as 类型`

     ```typescript
     const person:unknown = 'ZS'
     const personZ:string = person as string
     ```

* 有些时候，`TS`自己的类型推断，推断出来的类型并不是我们想要的类型，这样再去使用这个类型的时候就会报错，使用类型断言就是告诉`TS`这个类型应该被推断为什么样子，这样`TS`就会跳过对这个类型的检查，使用断言后的类型。

  ```typescript
  type TPersons = 'ZS' | 'LS' | 'WZ'
  
  let person = 'ZS'
  
  // person 被推断为了 string ,给 personZ 就会报错
  const personZ: TPersons = person
  
  // 正确方式
  const personZ: TPersons = person as TPersons
  ```

* 对于`unknown`类型就需要使用类型断言来确定类型

  ```typescript
  const person:unknown = 'ZS'
  const personZ:string = person as string
  ```

## 2、类型断言的条件

* 类型断言并不能直接将一个类型断言为与当前类型毫无相关的类型，类型断言的实际类型和断言的类型要兼容，可以将其断言为一个更**广泛**或者更**精准**的类型。

  ```typescript
  const num = 1
  // 类型 "number" 到类型 "string" 的转换可能是错误的，因为两种类型不能充分重叠。
  // 如果这是有意的，请先将表达式转换为 "unknown"。
  const str:string = num as string
  ```

* 非要强行断言为一个毫不相干的类型，可以先断言为`any`或者`unkonwn`类型

  ```typescript
  const num = 1
  const str:string = num as unknown as string
  ```

## 3、as const 断言

**const 断言只能作用于枚举成员、字符串、数字、布尔值、数组或对象字面量，会将字面量的类型断言为不可变类型，缩小成 TypeScript 允许的最小类型。**

### 语法

1. `值 as const`

   ```typescript
   let person = 'ZS' as const
   ```

2. `<const>值`

   ```typescript
   let person = <const>'ZS'
   ```

### 断言为常量

如果使用`let`来定义一个变量，那么一般会被推断为`TS`内置的类型，如果使用`const`来定义，值就会被推断为常量类型(元组)，此时就可以使用`as const`来让他变成常量，之后这个变量的值也不能被更改了。

```typescript
// 如果没有使用 as const 断言，那么 person 会被推断为 string 类型
let person = 'ZS' as const
// 等价于
const person = 'ZS'

type TPersons = 'ZS' | 'LS' | 'WZ'
const personZS: TPersons = person
```

### 断言限制

const 断言只能作用于枚举成员、字符串、数字、布尔值、数组或对象字面量，用于断言表单或者变量就会报错。

```typescript
let person = 'ZS'

type TPersons = 'ZS' | 'LS' | 'WZ'

// 报错 'const' 断言只能作用于枚举成员、字符串、数字、布尔值、数组或对象字面量
const personZS: TPersons = person as const
```

### 断言对象

```typescript
// 类型是 { x: number; y: number; }
const map = {
  x: 1,
  y: 2,
}; 

// 类型是 { x: 1; y: number; }
const map = {
  x: 1 as const,
  y: 2,
}; 

// 类型是 { readonly x: 1; readonly y: 2; }
const map = {
  x: 1,
  y: 2,
} as const; 
```

### 断言数组

* 如果没有使用`as const`对`persons`断言，那`persons`就会被推断为 `string[]`，那么则不能对`personZS`赋值

    ```typescript
    const persons = ['ZS', 'LS', 'WZ'] as const
    type TPersons = 'ZS' | 'LS' | 'WZ'

    const personZS: TPersons = persons[0]
    ```

* 给函数传入`rest`（使用`...`拓展后的不定量参数）参，下面如果没有使用`as const`断言，那么`add`函数不知道`...nums`有几个参数，`add`函数就不能使用`...nums`作为`rest`参数。

    ```typescript
    function add(x:number, y:number) {
      return x + y;
    }
    
    // 类型 readonly [1, 2]
    const nums = [1, 2] as const;
    const total = add(...nums);
    ```

### 断言枚举

```typescript
enum Color {
  red,
  green,
}
// red 的类型为 Color
let red = Color.red;

// green 就能具体到 Color.green 类型
let green = Color.green as const;
```

## 4、非空断言

对于一些**可选属性**或者是**不一定有值**的变量，在使用这些变量的时候，我们知道这个变量是一定有值的，但`TS`不知道，这个时候就可以使用非空断言，告诉`TS`这个一定有值，但是在不一定有值的是有最好还是加上非空的判断。非空断言只有在打开编译选项`strictNullChecks`时才有意义。如果不打开这个选项，编译器就不会检查某个变量是否可能为`undefined`或`null`。

```typescript
// x 是可选属性，不一定有值，所以他可能为 undefined 再去调 toFixed 就会报错，
// 加入 非空断言 TS就认为他是有值的，TS 就不会报错。
const fun = (x?: number)=> {
    return x!.toFixed(2)
}

// 也可以使用链判断运算符
const fun = (x?: number)=> {
    return x?.toFixed(2)
}
```

```typescript
interface IUser {
  id: number;
  name?: string;
}

const user: IUser = {
  id: 1,
  name: 'John',
};

// 如果不加入 非空断言， 那么toName的类型就是 string | undefined，介入非空断言则是 string
let toName = user.name!;
```

## 5、断言函数

断言函数是一种特殊函数，用于保证函数参数符合某种类型。如果函数参数达不到要求，就会抛出错误，中断程序执行；如果达到要求，就不进行任何操作，让代码按照正常流程运行。

**说明：** `asserts x is string`其中`asserts ... is`是关键字，`x`是函数的参数名，`string`是函数参数的预期类型，这里代表的的意思是，告诉`TS`如果传入的参数类型不是`string`，那么程序就会中断。

```typescript
function isString(x: unknown): asserts x is string {
  if (typeof x !== 'string')
    throw new Error('Not a string');
}

function toUpper(x: string|number) {
  isString(x);
  return x.toUpperCase();
}
```

> 断言函数的`asserts`语句等同于`void`类型，所以如果返回除了`undefined`和`null`以外的值，都会报错。