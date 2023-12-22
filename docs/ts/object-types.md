---
sidebar: auto
---

# 对象类型

描述一个对象时，通常使用`interface`或者`type`。

## interface

定义了一个数据的形状，使用这个`interface`属性的形状必须和`interface`的形状保持一致。

- 方式一

  /men 里有的属性必须和是 person 这个接口里面定义的过的，不能多也不能少

  ```typescript
  interface person {
    name: string;
    age: number;
  }

  let men: person = {
    name: "张三",
    age: 15,
  };
  ```

- 方式二

  只能往 point 身上添加 IPoint 定义过得属性，但所有定义过得属性都变成可选属性了

  ```typescript
  interface IPoint {
    x: number;
    y: string;
  }

  let point = <IPoint>{};
  point.x = 5;
  ```

- 方式三

  在函数中使用，只要满足了`interface`所必须的就行了，多了一个也可以通过校验的，但是少了不行。

  ```typescript
  interface Iobj {
    label: string;
  }

  function print(labelObj: Iobj) {
    console.log(labelObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  ```

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。就可以将这个属性变为可选属性，他存不存在也无所谓，但是依然不能多出来属性。

```typescript
// 此时age就是一个可选的属性，使用这个接口的属性，里面age属性就变得可有可无了
interface person {
  name: string;
  age?: number;
}
```

### 只读属性

readonly 的属性只能被读取，不能被修改，只能在调用这个接口的时候进行赋值一次，之后则只能读取他的值，而不能赋值。

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = {
  x: "15",
  y: 2,
};
p.x = "a"; // 报错
```

### 只读数组

`ReadonlyArray<T>`类型，它与 `Array<T>`相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。

```typescript
// list不能被修改
let list: ReadonlyArray<number> = [1, 2, 3];

let a: number[] = [1, 2, 3, 4];
// 此时的ro依然是不能修改的
let ro: ReadonlyArray<number> = a;

// 但是可以通过类型断言去赋值
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
let b: number[] = [3, 4, 5];
a = b as number[]; // 此时再次赋值就可以
```

### 任意属性

一个接口拥有任意属性后，除了必须的属性要存在，可以添加任意个 interface 为定义的属性，但是任意属性 value 的类型，必须是其他类型的父类型。

```typescript
interface Point {
  x: string;
  [prop: string]: any;
}

let p: Point = {
  // 只有x属性时必须存在的其他的可有可无
  x: "15",
  y: 9,
  z: false,
};
```

### 函数类型

使用`interface`去描述函数，下面这个`interface`描述了使用这个接口的函数，有两个参数，分别为下 x 和 y，且函数的返回值类型为 string。

```typescript
interface Point {
    (x: string, y: number): string
}

let fun: Point
fun = function (x: string, y: number)：string {
    return x + y
}
fun('a', 5)
```

### 可索引的类型

其实就是用 interface 去描述调用这个 interface 的数据属性的特征。下面定义了 arr 接口，它具有索引签名， 这个索引签名表示了当用 number 去索引 arr 时会得到 string 类型的返回值。

```typescript
// 数组的特征就是有索引，即下标，且为数字类型，里面的参数就随意定义类型了
interface arr {
  [index: number]: string;
}

let list: arr = ["a", "8"];
```

### 继承

一个`interface`定义了一些公共的参数，另一个`interface`在使用的时候就可以不用重复的书写公共的属性，直接继承公共的接口即可。

```typescript
interface IPoint {
  x: number;
}

interface APoint {
  y: string;
}

// 此时BPoint同时继承了IPoint和APoint
interface BPoint extends IPoint, APoint {
  z: number;
}

// point必须实现上面三个接口的形状
let point: BPoint = {
  x: 5,
  y: "15",
  z: 2,
};
```

### 交集

上面继承的情况也可以通过交集的方式实现。

```typescript
interface IPoint {
  x: number;
}

interface APoint {
  y: string;
}

type BPoint = IPoint & APoint & { z: number };

// point必须实现上面三个接口的形状
let point: BPoint = {
  x: 5,
  y: "15",
  z: 2,
};
```

## 接口使用泛型

在一些相同的或者会变化的类型就可以通过泛型去传递类型

```typescript
// 定义了一个T类型，T具体的类型就需要在使用的时候才能确定
interface Person<T> {
  name: T;
  age: number;
  sex: T;
}

// 给T传递string类，确定T的类型
const obj: Person<string> = {
  name: "Tom",
  age: 0,
  sex: "男",
};
```
