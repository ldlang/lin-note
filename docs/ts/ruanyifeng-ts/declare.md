---
sidebar: auto
---

# declare

## 1、基础说明

一般用于描述已经存在外部函数的类型，这个外部函数没有类型说明，编译器无法识别，使用`declare`给他加上说明。`declare`的重要特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。**declare 只能用来描述已经存在的变量和数据结构，不能用来声明新的变量和数据结构**。另外，所有 declare 语句都不会出现在编译后的文件里面。

`declare`可以描述的类型

- 变量（const、let、var 命令声明）
- type 或者 interface 命令声明的类型
- class
- enum
- 函数（function）
- 模块（module）
- 命名空间（namespace）

## 2、variable（变量）

使用`declare`描述已有的变量，因为这个变量是已经存在的了，所以后续还要定义同名变量是不被`TS`允许的。

* 描述一个已有的变量`num`，如果没有指定类型，那么`num`就是`any`，在描述类型的时候是无法指定具体的**值**的。

  ```typescript
  declare let num: number;
  ```

* `num`变量被声明，所以只能使用这个变量，而不能再次重复定义这个变量

  ```typescript
  // 正确
  num = 5
  
  //报错 ，无法重新声明块范围变量“num”
  const num = 1;
  ```

## 3、funciton

使用`declare`描述已有的函数，因为这个函数是已经存在的了，所以后续还要定义同名变量是不被`TS`允许的，可以直接只用这个函数。

* 描述一个已有的函数`fun`

  ```typescript
  declare function fun(num: number): string;
  ```

* 使用`fun`函数

  ```typescript
  // 正确
  fun(6)
  
  // 报错，无法重新声明块范围变量“fun”
  const fun = (num: number) => {
    return num.toString()
  }
  ```

## 4、class

* 描述一个已有的`class` `Person`

  ```typescript
  declare class Person {
      num: number;
      fun(num: number): string;
  }
  ```

* 使用`Person`这个`class`

  ```typescript
  const person = new Person()
  ```

## 5、module、namespace

如果要把变量、函数等描述在一起，就可以使用`module`和`namespace`，`module`后接的是导入的**地址**。

### 描述module和namespace

```typescript
declare namespace NS {
    let num: number;
    function fun(num: number): string;
}

declare module M {
    let num: number;
    function fun(num: number): string;
}
```

### namespace描述外部库

如果一个`lib`库有一个`fun`的方法和`num`的变量，使用`namespace`就可以这样描述着库中的这些属性。

```typescript
declare namespace lib {
    let num: number;
    function fun(num: number): string;
}
```

### module给外部库增加属性方法

在`TS`中如果一个库已有了类型声明，想再往它身上添加属性等，是不被允许的，此时就可以使用`declare module`给这个外部库增加属性等。

1. 增加属性方法

    * 模拟`lib`库

      ```typescript
      export interface ILib{
          fun(num: number): string;
          num: number;
      }

      export const lib: ILib = {
          fun: (num: number): string => {
              return num.toString();
          },
          num: 1,
      }
      ```

    * 在使用它的地方，对其进行扩展属性

      ```typescript
      import { lib } from "./lib";

      // 报错 ，类型“ILib”上不存在属性“str”
      lib.str = "hello";

      // 扩展了str属性后，上面赋值str属性就不会报错了
      declare module "./lib" {
        interface ILib {
          str: string;
        }
      }
      ```
    
2. 对已有类型定义进行扩展。

    * 已有类型

      ```typescript
      export interface ILib{
          fun(num: number): string;
          num: number;
      }
      ```

    * 扩展类型

      ```typescript
      import { ILib } from "./lib";
      
      declare module "./lib" {
        interface ILib {
          str: string;
        }
      }
      
      // 必须满足类型扩展后的样子
      const lib: ILib = { 
        num: 1, 
        fun: (num: number) => num.toString(),
        str: "hello"
       };
      ```

    ### 注意点

    1. `declare module NAME`语法里面的模块名`NAME`，跟 import 和 export 的模块名规则是一样的，且必须跟当前文件加载该模块的语句写法保持一致。

       ```typescript
       // 导入axios
       import axios from 'axios'
       // module的书写方式
       declare module 'axiso' {}
       
       // lib 库导入
       import lib from './lib'
       // module的书写方式
       declare module './lib' {}
       ```

    2. 不能创建新的顶层类型。也就是说，只能对**已有**的模块中**已经存在**的类型进行扩展，不允许增加新的顶层类型。

    3. 不能对默认的`default`接口进行扩展，只能对 export 命令输出的命名接口进行扩充。这是因为在进行类型扩展时，需要依赖输出的接口名。

  ### 可以使用通配符

declare module 描述的模块名可以使用通配符。

```typescript
declare module 'my-plugin-*' {
  interface PluginOptions {
    enabled: boolean;
    priority: number;
  }

  function initialize(options: PluginOptions): void;
  export = initialize;
}
```

上面示例中，模块名`my-plugin-*`表示适配所有以`my-plugin-`开头的模块名（比如`my-plugin-logger`）。

### 例子，扩展vueRouter

```typescript
import { IMenuList, IMenuItem } from '@/api'

declare interface IRouterUtils {
  /**
   * 链接路由格式化
   * @param menuList 菜单列表
   */
  linkRouteFormat(menuList: IMenuItem): void;
  /**
   * 格式化路由
   * @param menuList 菜单列表
   * @params isRecursion 是否递归
   */
  formatRoutes(routes: IMenuList): void;
}

declare module 'vue-router' {
  interface Router {
    routerUtils: IRouterUtils;
  }
}
```

## 6、global

如果要为`js`原生对象上扩展方法，就要借助`declare global`。

* 往`String`上扩展属性，方法。

  ```typescript
  export {}
  
  declare global {
    interface String {
      toNumber(): number;
    }
  }
  
  String.prototype.toNumber = function () {
    return Number(this);
  };
  ```

* 往`Window`上扩展方法

  ```typescript
  export {}
  
  declare global {
    interface Window {
      toNumber(): number;
    }
  }
  
  window.toNumber = function () {
    return Number(this);
  };
  ```

### 7、enum

所有正确的`enum`都可以加上`declare`

```typescript
declare enum E1 {
  A,
  B,
}

declare enum E2 {
  A = 0,
  B = 1,
}

declare const enum E3 {
  A,
  B,
}

declare const enum E4 {
  A = 0,
  B = 1,
}
```

## 8、declare module 用于类型声明文件

我们可以为每个模块脚本，定义一个`.d.ts`文件，把该脚本用到的类型定义都放在这个文件里面。但是，更方便的做法是为整个项目，定义一个大的`.d.ts`文件，在这个文件里面使用`declare module`定义每个模块脚本的类型。









