---
sidebar: auto
---

# 日常类型

## 类型基础

### **boolean**  布尔值

```typescript
let isDone: boolean = true
```

### **number**  数字 

```typescript
let num: number = 15
```

### **string**  字符串

```typescript
let name: string = '张三'
```

### **Array**  数组

普通写法

```typescript
// 表示一个数组里面每个元素都是字符串
let list: string[] = ["15", 'a']

// 数组对象
let arr: { suit: string; card: number; }[]
arr = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }];
```

泛型写法

```typescript
// 表示一个数组里面都是数字类型
let list: Array<number> = [1, 2, 3, 5]
```

### **tuple**  元组

元组其实就是一个数据的造型，给元组赋值满足定义时的形状。

定义一个元组，第一个只能是string类型，第二个只能是number类型，并且这个数组只能有两个元素，不能同意元组以外的元素。

```typescript
let list: [string, number]

list = ['a', 15]
list = ['a', 15, 2] // 报错
```

### **any**  任意值

1. 当你想要调用一个属性里面的方法或者属性，但是里面的方法和属性没有你不知道其类型，你就可以给他赋值为any，就可以任意调用里面的方法和属性。
2. 可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法。
3. 被定义为any类型的值，相当于关闭了ts对他的类型检查

```typescript
let color:any = '15'
color = 15
```

### **void**  空值

当一个值被指定为void时，这个值只能被赋值为 null 和 undefined，因为他不能是任何值

```typescript
let variable: void = undefined
```

### **null** 和**undefined**

```typescript
null 和 undefined是所有类型的子类型
```

### **never**  永远不存在的值

永远不存在的值的类型，never类型是任何类型的子类型

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

### **unknown** 未知类型，类型安全的any

它表示一个类型未知的值。和 any 类型类似，unknown 也可以被赋值为任何类型的值，但是在使用 unknown 类型值时，需要先进行类型检查或类型断言，以确保类型安全。当一个值未知类型时最好用unknown，不要用any。

1. unknown可以被赋值为任何类型的值

   ```typescript
   let a: unknown
       a = true
       a = 15
       a = "str"
   ```

2. 虽然最后被赋值为了一个字符串，但是本质类型上是一个unknown，所以不能赋值给其他类型，要赋值也行，先判断类型，就可以给其他类型的值赋值，或者使用类型断言 as,我们知道a是一个string，但是编辑器不知道，此时就可以使用类型断言(as)告诉编辑器a就是一个string。

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

### **enum**  枚举

* 枚举的时候不直接赋值，那么枚举的属性的值就是从0开始的数值

  ```typescript
  enum Color { 
      red, 		// 没有进行赋值，red的值就是0
      green, 		// 值是1
      blue = 2	// 因为默认值就是2，其他枚举不赋值也不会报错
  }
  let c = Color.red  //c的值是0
  ```

* 枚举的时候直接赋值，那么每个枚举的属性都要赋值

  ```typescript
  enum Color {
      Red = 'red',
      Green = 'green',
      Blue = 'blue'
  };
  let c = Color.Red;
  ```

### object

object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

* 常用方式（元组）

  ```typescript
  let b: { name: string }
  b = {name: '张三'}
  b = {name: '张三',age: '李四'} // 报错，结构必须和定义的一致
  ```

* 不常用方式

  ```typescript
  let a: object
  a = function m() {}
  a = {}
  ```

* 任意值

* 定义一个key为string，value为任意值的属性，可以有多个传入的属性

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



