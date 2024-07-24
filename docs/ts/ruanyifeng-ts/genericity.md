---
sidebar: auto
---

# 泛型

## 1、基础说明

在定义函数或者接口等类型的时候，还不确定某些值的具体类型，此时就可以使用泛型进行预定义类型，等真正使用的时候再给泛型传入类型来确定类型。

```typescript
// 函数使用泛型
function fun<T>(arr: T[]): T {
    return arr[0]
}

// 简单的类型 TS 能自动推断，即使不传入 TS 也能推断出来
fun([1, 2, 3])
// 也可以显示的传入
fun<number>([1, 2, 3])

// interface 使用泛型
interface Person<T> {
    name: string
    age: T
}

const p: Person<string> = {
    name: 'zhang',
    age: '18'
}
```

## 2、泛型的写法

泛型主要用在四个场合：函数、接口、类和别名，泛型也可以同时传入多个。

### 函数使用泛型

* 普通函数使用泛型

  ```typescript
  function fun<T>(arr: T[]): T {
      return arr[0];
  }
  
  // 传入泛型
  fun<number>([1, 2, 3]);
  ```

* 箭头函数使用泛型

  ```typescript
  const fun:<T>(arr: T[]) => T = (arr) => arr[0];
  // 或者
  const fun:{ <T>(arr: T[]): T } = (arr) => arr[0];
  
  // 传入泛型
  fun<number>([1, 2, 3]);
  ```

### 接口使用泛型

* 基本用法

  ```typescript
  interface IPerson<T> {
      name: string;
      address: T;
  }
  
  const person: IPerson<{ city: string; }> = {
      name: "张三",
      address: { city: "KM" },
  };
  ```

* 用于`class`

  类本身也是一种类型，可以直接当做类型使用。

  ```typescript
  interface IPerson<T> {
      name: string;
      address: T;
  }
  
  // 把 Person 当做类型传递给 IPerson
  class Person implements IPerson<Person> {
    name: string;
    address: Person;
    constructor(value: Person){
      this.address = value;
    }
  }
  
  // 或者class接受一个泛型传递给 IPerson
  class Person<T> implements IPerson<T> {
    name: string;
    address: T;
  }
  ```

### class 使用泛型

* 基本用法

  ```typescript
  class Person<T> {
    name: string;
    address: T;
  }
  
  // 在 new 的时候传入类型
  const person = new Person<string>();
  
  // 在继承的时候传入类型
  class Person2 extends Person<string> {}
  ```

* 构造函数式

  ```typescript
  type MyClass<T> = new (...args: any[]) => T;
  
  // 或者
  // interface MyClass<T> {
  //   new(...args: any[]): T;
  // }
  
  function createInstance<T>(AnyClass: MyClass<T>, ...args: any[]):T {
    return new AnyClass(...args);
  }
  
  createInstance<Person<string>>(Person, '123');
  ```

* `class`的静态属性和方法不能使用泛型，因为泛型是类实例的描述。

  ```typescript
  class Person<T> {
    name!: string;
    static address: T; // 静态成员不能引用类类型参数
  }
  ```

### 类型别名（type）使用泛型

* 基本用法

  ```typescript
  type TPerson<T, U> = {
      name: T;
      code: U;
  }
  
  const person: TPerson<string, number> = {
      name: 'ZS',
      code: 533
  }
  ```

* 递归用法

  ```typescript
  type TMenuItem<T> = {
    id: number;
    image: string;
    children: TMenuItem<T>[];
  }
  ```


## 3、泛型默认值

* 泛型也可以指定默认值，如果在使用的时候没有传入指定的类型，那么泛型就是默认值的类型，但是如果在使用的时候`TS`能够推断出来类型，那么也会覆盖掉默认值的类型。

    ```typescript
    interface IPerson<T = string> {
        name: string;
        age: T;
    }

    // 没有指定 T 的类型，那么 T 就是 string 类型
    const person: IPerson = {
      name: 'John',
      age: "25"
    }

    // 指定 T 的类型为 number ，那么 age 就只能是 number 类型
    const person1: IPerson<number> = {
      name: 'John',
      age: 25
    }
    ```
    
    被约束的必须满足约束的条件
    
    ```typescript
    interface IPerson<T, U extends T> {
        name: T;
        hobbies: U;
    }
    
    const person: IPerson<{a: string, b: number}, {a: string, b: number, c: number}> = {
        name: {a: 'a', b: 1},
        hobbies: {a: 'a', b: 1, c: 1},
    };
    ```
    
* 泛型如果指定了默认值，那么这个泛型就是可选的，且带有默认值的泛型必须放在最后。

    ```typescript
    interface IPerson<T, U = string> {
        name: T;
        age: U;
    }
    ```
    
* 前一个泛型可以成为后一个的默认值

    ```typescript
    interface IPerson<T, U = T> {
        name: T;
        age: U;
    }
    
    // 如果 U 没有指定类型，那么 U 的类型就是传入的 T 的类型
    const person: IPerson<string> = {
        name: 'ZS',
        age: '25',
    };
    ```

    

## 4、数组的泛型

* 使用内部实现的一个类型（`Array`）去表示数组类型

    ```typescript
    const arr: Array<number> = [1, 2, 3];
    ```
    
* 只读数组`ReadonlyArray`

    ```typescript
    const arr: ReadonlyArray<string> = ['a', 'b', 'c'];
    ```

## 5、泛型参数的约束条件

* 给泛型参数增加约束条件，使用`extends`关键字，比如各一个泛型增加必须要有`length`属性的约束，实际上相当于接口的继承，被约束的泛型，必须满足约束条件。

  ```typescript
  interface IPerson<T extends { length: number } >{
      name: string;
      hobbies: T;
  }
  
  // 此时传入给 T 的类型必须要有 length 属性
  let person: IPerson<string[]> = {
      name: 'ZS',
      hobbies: ['sports','music']
  }
  ```

* 使用定义的类型给泛型增加约束

  ```typescript
  interface IHobbies {
      [key: number]: string;
  }
  
  // 使用 IHobbies 给T增加约束
  interface IPerson<T extends IHobbies>{
      name: string;
      hobbies: T;
  }
  
  const person: IPerson<IHobbies> = {
      name: "ZS",
      hobbies: ['1', '2']
  }
  ```

## 6、约束的同时增加默认值

泛型增加约束的同时，也可以指定默认值，但是默认值必须满足约束条件。

```typescript
interface IHasLenght {
    length: number;
}

// 这个这里的 Array<string> 必须满足 IHasLenght 的约束条件，
// 也就是说 Array<string> 必须有 length属性
function getLength<T extends IHasLenght = Array<string>>(obj: T): number {
    return obj.length;
}

getLength<Array<number>>([1, 2, 3]);
```

* 泛型可以成为互相的约束条件，不论先后都可以成为对方的约束条件

  ```typescript
  // 后者成为前者的约束条件
  interface IPerson<T extends U, U> {
      name: T;
      hobbies: U;
  }
  
  // 前者成为后者的约束条件
  interface IPerson<T, U extends T> {
      name: T;
      hobbies: U;
  }
  ```








