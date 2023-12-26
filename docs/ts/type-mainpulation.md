---
sidebar: auto
---

# 类型操作

## 泛型

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
    sex: "男"
}
```

### 使用泛型类型变量

原先预定义的泛型参数是可以当作变量来使用的

```typescript
function fun<T>(x: T[]): T[] {
    return x;
}

// 此时上面 T 的类型就是代表string，并且这个 T 可以当作类型变量，在函数中随意使用
fun<string>(['a'])
```

### 泛型类

在`class`中使用泛型。

```typescript
class Point<T> {
    style: T;
    sub(p: T): T {
        return p
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

function fun<T extends myFun>(arg: T): T { // 这里约束了T必须有length属性
    console.log(arg.length)
    return arg;
}

fun('a')  // 字符串有length属性可以传
fun(5) // 数字没有number属性，不能传
fun([1]) // 数组可以传
```

### 泛型默认值



