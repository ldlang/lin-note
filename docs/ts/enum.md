---
sidebar: auto
---

# 枚举

## 数字枚举

如果其中一个枚举值不是数字，那么所有的枚举值都必须进行手动赋值。

- 如果只枚举属性，而不对其进行赋值，那么枚举的值将会是从零开始的数值。

  ```typescript
  enum color {
    pink, // 值为0
    red, // 1
    green, // 2
  }
  ```

- 如果只对其中的一个值进行数字赋值，那么那个值之前的会从 0 开始自增长，那个值之后的会从被复制的那个值自增长。

  ```typescript
  enum color {
    pink, // 0
    yellow, // 1
    red = 5, // 5
    green, // 6
  }
  ```

## 字符串枚举

只要有一个枚举被赋值了字符串，那么所有的枚举值都必须赋值。

```typescript
enum color {
  yellow = "yellow",
  red = "red",
  green = "green",
}
```

## 异构枚举

通常情况下，一个枚举里面赋值的类型，应该是一样的，虽然 string 和 number 能混用，但并不建议使用，并且布尔类型、对象类型、以及 null 和 undefined 类型都不能作为枚举的成员类型。

```typescript
enum color {
  pink = 15,
  yellow = "str",
  red = "red",
  green = "green",
}
```

## 使用运算符

枚举的值可以使用运算符计算

```typescript
enum color {
  pink = 15 + 6,
  yellow = 5 / 5,
  red = 6,
  green = red, // 如果枚举的值是number类型的，则可以赋值给另一个枚举
}
```

## 枚举与 interface 的混用

* 枚举的值是数值类型

  ```typescript
  enum color {
      pink,
      yellow,
  }
  
  interface Icolor {
      rgb: color.pink
      rgba: number
  }
  
  let myColor: Icolor = {
      rgb: 0,  // 可以直接将枚举的值赋值给对应的属性
      rgb: color.pink, // 最好使用这种方式
      rgba: 15
  }
  ```

* 枚举的值是字符串类型，那么只能将枚举赋值给对应的属性

  ```typescript
  enum color {
      pink = 'pink',
      yellow = 'yellow',
  }
  
  interface Icolor {
      rgb: color.pink
      rgba: number
  }
  
  let myColor: Icolor = {
      rgb: color.pink,  // 只能这么赋值，不能将枚举的值直接赋值给对应属性
      rgba: 15
  }
  ```

## 函数使用枚举

```typescript
enum E {
    Foo,
    Bar,
}
// 此时x能接收的值就只有0和1，或者E.Bar和E.Foo
function f(x: E) {}  
```

## 反向映射

如果枚举的值是number类型就可以反向映射，如果是字符串就不行

```typescript
enum Enum {
    A
}
let a = Enum.A
// A, 就类似于用enum中枚举的value去读取key
Enum[a] 
```

## 同名枚举

名字相同枚举最终会合并，在其中一个枚举中声明过得枚举不能再次出现，如果出现就会报错。

```typescript
enum color {
    red = 'red'
}

enum color {
    pink = 'pink'
}
```

## const 枚举

使用const定义的枚举，在编译阶段会把枚举去掉，在使用枚举的地方都是使用枚举真实的值。

* 未使用const

  ```typescript
  enum color {
      red = 'red'
  }
  console.log(color.red);
  
  // 编译后的结果
  var color;
  (function (color) {
      color["red"] = "red";
  })(color || (color = {}));
  console.log(color.red);
  ```

* 使用const

  ```typescript
  const enum color {
      red = 'red'
  }
  console.log(color.red);
  
  // 编译后的结果，枚举的属性全部被去除了，只剩下他的值
  console.log("red");
  ```

## 外部枚举

外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。

```typescript
declare enum Enum {
    A = 1,
    B,
    C = 2
}
```

