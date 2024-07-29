---
sidebar: auto
---

# 类型运算符

## 1、keyof运算符

**`keyof` 接受一个对象作为参数，返回该对象所有键名（`key`）组成的联合类型。**

### 简介

* `keyof` 接受一个对象作为参数，返回该对象所有键名（`key`）组成的联合类型。

    ```typescript
    interface IPerson {
        name: string;
        age: number;
        fun(): void;
    }

    // TPerson 的类型:  name | age | fun
    type TPerson = keyof IPerson;

    const person: TPerson = "fun"

    ```
    
* 因为`js`中对象`key`的类型，只能是`string | number | symbol`，所以给`keyof`传入`any`只能返回这三个类型。

    ```typescript
    // keyT 的类型： string | number | symbol
    type keyT = keyof any
    ```

* 用`&`（交集）取其中一个类型

    ```typescript
    // keyT 的类型： string
    type keyT = keyof any & string
    ```

* `object`类型本身没有属性，所以`keyof object`得到的`never`

    ```typescript
    type KeyT = keyof object;  // never
    ```

* 取索取签名的类型

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

* 给`keyof`传入数组得到的结果不仅仅是`key`，还有数组身上的所有属性方法

    ```typescript
    type TArr = ['a', 'b', 'c']
    
    // TArrKey的类型： '0'| '1' | '2' | 'length' | 'pop' | 'push' ......
    type TArrKey = keyof TArr
    
    const arr:TArrKey = "0"
    ```

* 联合类型只能放回两个类型共有的`key`，如果没有共有的`key`那么得到的是`never`

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

* 交叉类型返回两个类型的所有`key`

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
    type KeyT = keyof (IPerson & IPerson1)
    // 等同于
type KeyT = keyof IPerson | keyof IPerson1
    ```
    
* 取出所有联合类型的`value`类型组成联合类型

    ```typescript
    interface IPerson {
        name: string;
        age: number;
    }
    
    interface IPerson1 {
      name: string;
      sex: boolean;
    }
    
    type KeyT = keyof IPerson | keyof IPerson1
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
   
   fun<IPerson, 'age'>({ name: '张三', age: 18 }, 'age');
   ```

2. 属性映射，即将一个类型的所有属性逐一映射成其他值。

   公共接口
   
   ```typescript
   interface IPerson {
       readonly name: string;
       readonly age: number;
   }
   ```

   * 将所有的 value 类型都被设置为了 string 类型
   
       ```typescript
       type TNewIPerson<T> = {
        [key in keyof T]?: string;
       };
   
       const newPerson: TNewIPerson<IPerson> = {
           name: '张三',
           age: '18'
       };
       ```
       
   * 将所有的属性设置为可选属性
   
       ```typescript
       type TNewIPerson<T> = {
           [key in keyof T]?: T[key];
       };
       
       const newPerson: TNewIPerson<IPerson> = {}
       ```
   
   * 深度将所有属性变为可选属性
   
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
           name: '张三',
           address: {
               city: '北京',
           }
       }
       ```
   
   * 去掉所有属性的可读
   
       ```typescript
       type TPerson<T> = {
           -readonly [key in keyof T]: T[key];
       }
       
       const person: TPerson<IPerson> = {
         name: '张三',
         age: 0
       }
       
       person.name = '李四'
       ```
   

## 2、in 运算符

在`js`中`in`是用来判断对象是否包含某个`key`，返回布尔值。

```js
const person = {
    name: '张三',
    age: 0
};
if ('name' in person) {
    person.name = '李四'
}
```

在`TS`中则是相当于循环，依次取出联合类型的每一个成员。

```typescript
type TPersons = "ZS" | "LS" | "WS";

type TPersonObj = {
  [key in TPersons]: { name: string }
}
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
}
```

## 3、[] 运算符

* 取出对象中某个`key`的`value`类型。

    ```typescript
    interface IPerson {
        name: string;
        age: number;
    }

    // 取出 IPerson 中 name 的 value 的 类型，为 string
    type TName = IPerson['name'];

    const tName: TName = '张三';
    ```
    
* 如果取的联合类型，那么得到的也是联合类型，相当于是将联合类型中所有的`key`的`value`都遍历一遍拿出来组成联合类型

    ```typescript
    interface IPerson {
        name: string;
        age: number;
    }
    // TName 的类型: string | number
    type TName = IPerson[keyof IPerson];
    
    const tName: TName = 5;
    ```

* 对数组也适用

    ```typescript
    const MyArray = ['a', 5,'c'];
    
    // Person 的类型： string | number
    type Person = typeof MyArray[number];
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

**子类型说明：如果一个类型A包含了B的所有属性，那么A是B的子类型。**

```typescript
type T = A extends B ? A : B
```

* 若果是联合类型进行运算，那么将会被展开运算，但是只有返回的是数组好像才有这个问题。

  ```typescript
  (A|B) extends U ? X : Y
  
  // 等同于
  (A extends U ? X : Y) |
  (B extends U ? X : Y)
  ```

  ```typescript
  type ToArray<Type> =
    Type extends any ? Type[] : never;
  
  // string[]|number[]
  type T = ToArray<string|number>;
  ```

  使用`[]`将类型包裹起来，可以解决这个问题。

  ```typescript
  type ToArray<Type> =
    [Type] extends [any] ? Type[] : never;
  
  // (string | number)[]
  type T = ToArray<string|number>;
  ```

* 类似以三元运算符，也可以嵌套使用。

  ```typescript
  A extends B ? B extends C ? A : B : C
  ```

## 5、infer 运算符

一般在和条件运算符`extends`配合使用，相当于定义一个被`TS`推断的类型出来。下面使用`infer`推断了一个`U`的类型，`U`类型就可以在后面使用。

```typescript
type TInfer<T> = T extends (infer U)[] ? U : T;

// (infer U)[]推断为是一个 U[]，也就是说如果传入 T是一个数组，那么 U[] 就是这个数组的类型。
type TInfer2 = TInfer<number[]>
```

如果没有进行`infer`推断上面，那么上面就要显示传入`U`的类型，就会比较麻烦。

```typescript
type TInfer<T, U> = T extends U[] ? U : T;

type TInfer3 = TInfer<number[], number>
```

例：

* 传入函数返回函数的`promise`版本

  ```typescript
  type ReturnPromise<T> = T extends (...args: infer A) => infer R  ? (...args: A) => Promise<R> : T;
  
  // type ReturnPromise2 = (a: number) => Promise<number>
  type ReturnPromise2 = ReturnPromise<number>
  ```

* 传入对象，提取对象`value`的类型，组成数组。

  ```typescript
  type TInferObj<T> = T extends { a: infer U, b: infer K } ? [U, K] : T;
  
  // type TInferObj2 = [number, string]
  type TInferObj2 = TInferObj<{ a: number, b: string }>
  ```

### 6、Is 运算符
















