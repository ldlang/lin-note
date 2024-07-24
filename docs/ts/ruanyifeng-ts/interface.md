---
sidebar: auto
---

# interface

`interface`是对象的模板，一般用于指定对象的`‘形状‘`，使用了`interface`的对象必须和声明的`interface`的`'形状'`一致。

```typescript
interface IPerson {
  name: string;
  sex: number;
}

const person: IPerson = {
  name: "张三",
  sex: 0,
};
```

1. 读取`interface `中的某个属性的类型，可以使用`[]`读取。

   ```typescript
   interface IPerson {
     name: string;
     sex: number;
   }

   // 此时A的类型就是string
   type A = IPerson["name"]; // string
   ```

## 1、interface 表示对象的各种语法

### 对象属性

- 为每个属性指定数据类型

  ```typescript
  interface IPerson {
    name: string;
    sex: number;
  }
  ```

- 指定可选的属性

  指定了`name`为可选的属性，在使用`IPerson`这个接口的时候，对象上就可以不用声明`name`属性

  ```typescript
  interface IPerson {
    name?: string;
    sex: number;
  }

  // name为可选属性，可以不用声明
  const person: IPerson = {
    sex: 0,
  };
  ```

- `readonly`只读属性

  声明属性为只读属性时，那么这个属性只能在初次使用这个接口的时候被赋值，之后将不能被更改，只能被读取。

  ```typescript
  interface IPerson {
    readonly name: string;
    sex: number;
  }

  const person: IPerson = {
    name: "",
    sex: 0,
  };
  // 报错，只读属性，不能再次被赋值
  person.name = "张三";
  ```

### 对象的属性索引

对象的索引类型只有三种，`string`、`number`和`symbol`，一个`interface`中只能定义一个字符串索引，约束之后所有`key`为`string`类型的必须符合索引的约束。

```typescript
// 约束了所有的key只能是字符串类型，并且value只能是的number类型
interface IPerson {
  [prop: string]: number;
  name: string; //报错，类型“string”的属性“name”不能赋给“string”索引类型“number”。
  sex: number;
}
```

1. `key`为`string`类型，字符串索引，不仅是对类型声明的约束，同时也是多使用类型值的约束。

   ```typescript
   interface IPerson {
     [prop: string]: string
     sex: boolean // 报错 value 被约束只能是string类型
   }
   
   // 声明只能是key，value为string的索引
   interface IPerson {
     [prop: string]: string
   }
   
   const person: IPerson ={
     name: 'zhangsan',
     sex: false // 报错 value 被约束只能是string类型
   }
   ```
   
2. `key`为`number`类型，数值索引。

   因为数组的`key`是数字，所以也可以用来描述数组。

   ```typescript
   interface IPerson {
     [prop: number]: string;
   }
   
   const person: IPerson = {
     5: "张三",
   };
   
   const list: IPerson = ["张三", "李四"];
   ```

3. 如同时声明了字符串索引和数值索引，那么数值索引必须服从字符串索引，因为在 JavaScript 中，数值属性名最终是自动转换成字符串属性名。

   ```typescript
   interface A {
     [prop: string]: number;
     [prop: number]: string; // 报错
   }

   interface B {
     [prop: string]: number;
     [prop: number]: number; // 正确
   }
   ```

### 对象中的方法

对象的中的方法一共有三种写法

```typescript
// 方式一
interface IFun {
  fun(x: boolean): string;
}

// 方式二
interface IFun {
  fun: (x: boolean) => string;
}

// 方式三
interface IFun {
  fun: { (x: boolean): string };
}

const funObj: IFun = {
  fun(x: boolean) {
    return "fun";
  },
};
```

- 对象名也可以使用表达式或变量

  ```typescript
  const fun = "funConst";

  interface IFun {
    [fun](x: boolean): string;
  }

  const funObj: IFun = {
    funConst(x: boolean) {
      return "fun";
    },
  };
  ```

- 对象中函数的重载

  interface 里面的函数重载，不需要给出实现。但是，由于对象内部定义方法时，无法使用函数重载的语法，所以需要额外在对象外部给出函数方法的实现。

  ```typescript
  interface A {
    f(): number;
    f(x: boolean): boolean;
    f(x: string, y: string): string;
  }

  interface A {
    f(): number;
    f(x: boolean): boolean;
    f(x: string, y: string): string;
  }

  function MyFunc(): number;
  function MyFunc(x: boolean): boolean;
  function MyFunc(x: string, y: string): string;
  function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
    if (x === undefined && y === undefined) return 1;
    if (typeof x === "boolean" && y === undefined) return true;
    if (typeof x === "string" && typeof y === "string") return "hello";
    throw new Error("wrong parameters");
  }

  const a: A = {
    f: MyFunc,
  };
  ```

### 函数

`interface`也可以用来单独声明函数。

```typescript
interface IFun {
  (name: string, age: number): string;
}

const fun: IFun = (name, age) => {
  return name + age;
};
```

### 构造函数

接口`ErrorConstructor`内部有`new`命令，表示它是一个构造函数。TypeScript 里面，构造函数特指具有`constructor`属性的类。

```typescript
interface ErrorConstructor {
  new (message?: string): Error;
}
```

## 2、interface 的继承

### 继承 `inteface`

通过`extends`实现接口的继承，继承后其实就是两个接口的合并。

- 继承一个接口

  ```typescript
  interface IName {
    name: string;
  }

  interface ISex extends IName {
    sex: number;
  }
  // 此时的ISex，等价于
  interface ISex {
    name: string;
    sex: number;
  }
  ```

- 继承多个接口

  ```typescript
  interface IName {
    name: string;
  }

  interface ISex {
    sex: number;
  }

  interface IPerson extends IName, ISex {
    age: number;
  }

  // 此时的IPerson, 等价于
  interface IPerson = {
    name: string,
    sex: number,
    age: number,
  }
  ```

- 接口继承时不能出现相同`key`的`value`类型不相同的情况，这样继承将会报错。

  ```typescript
  interface IName {
    name: string;
    sex: string;
  }

  // 报错 接口“ISex”错误扩展接口“IName”，属性“sex”的类型不兼容。
  interface ISex extends IName {
    sex: number;
  }
  ```

### 继承 `type`

**注意：** 如果`type`定义的不是对象那么将不能被继承。

```typescript
type IName = {
  name: string;
};

interface IPerson extends IName {
  age: number;
}

const persen: IPerson = {
  name: "张三",
  age: 0,
};
```

### 继承 `class`

感觉意义不大

```typescript
class A {
  x: string = "";
  y(): boolean {
    return true;
  }
}

interface B extends A {
  z: number;
}

const b: B = {
  x: "",
  y: function () {
    return true;
  },
  z: 123,
};
```

## 3、`interface`的合并

1. 如果声明了两个同名的接口，那么他们将会自动合并，但是如果同名接口中同名`key`的`value`的类型不同将会报错。

   ```typescript
   interface IPerson {
     sex: number;
   }
   
   interface IPerson {
     age: number;
   }
   
   const persen: IPerson = {
     age: 0,
     sex: 0,
   }
   ```

2. 同名接口，中函数名也同名，那么将会进行函数重载。

   优先级：字面量 > 后出现的 > 先出现的

   ```typescript
   interface Document {
     createElement(tagName: any): Element;
   }
   interface Document {
     createElement(tagName: "div"): HTMLDivElement;
     createElement(tagName: "span"): HTMLSpanElement;
   }
   interface Document {
     createElement(tagName: string): HTMLElement;
     createElement(tagName: "canvas"): HTMLCanvasElement;
   }
   
   // 等同于
   interface Document {
     createElement(tagName: "canvas"): HTMLCanvasElement;
     createElement(tagName: "div"): HTMLDivElement;
     createElement(tagName: "span"): HTMLSpanElement;
     createElement(tagName: string): HTMLElement;
     createElement(tagName: any): Element;
   }
   ```

3. 两个接口组成联合类型，如果其中有同名的key，那么他们也会组成一个联合类型

   ```typescript
   interface IPerson {
     sex: string
   }
   
   interface IPerson2 {
     sex: number
   }
   
   // 此时的 sex 类型就是 string | sex
   const person: IPerson | IPerson2 = {
     // sex: 0 
     sex: '男'
   }
   ```

## 4、interface和type的异同

### 同

很多对象类型既可以用 `interface` 表示，也可以用 `type` 表示。而且，两者往往可以换用，几乎所有的 `interface` 命令都可以改写为 `type` 命令。

### 异

1. `type`能够表示非对象类型，而`interface`只能表示对象类型（包括数组、函数等）。

2. `interface`可以继承，`type`不能，`type`只能通过`&`将多个类型合并成一个新的类型。

   ```typescript
   type TPerson = {
     name: string
   }
   
   interface IPerson {
     sex: number
   }
   
   // type 类型合并
   type TPerson2 = TPerson & {
     sex: number
   }
   
   // type 与 interface 合并
   type TPerson2 = TPerson & IPerson
   
   // interface 继承 type
   interface IPerson2 extends TPerson {
     sex: number
   }
   ```

3. 同名`interface`会进行合并，而同名的`type`则会报错。

4. `interface`不能包含属性映射（mapping），`type`可以。

   ```typescript
   // 正确
   type TPerson = {
     [Key in keyof Point]: Point[Key];
   };
   
   // 报错
   interface IPerson {
     [Key in keyof Point]: Point[Key];
   };
   ```

5. `this`关键字只能在`interface`上使用。

   ```typescript
   interface IPerson {
     add(num:number): this;
   };
   ```

6. `type`可以扩展原始数据类型，`interface` 不行。

   ```typescript
   type MyStr = string & {
     type: 'new'
   };
   ```

7. `interface`无法表达某些复杂类型（比如交叉类型和联合类型），但是`type`可以。

   ```typescript
   type A = { /* ... */ };
   type B = { /* ... */ };
   
   type AorB = A | B;
   type AorBwithName = AorB & {
     name: string
   };
   ```


## 5、递归用法

在定义接口的同时，就能使用本身这个类型

```typescript
interface IMenuItem {
  id: number;
  image: string;
  children: IMenuItem[];
}
```





