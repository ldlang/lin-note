---
sidebar: auto
---

# .d.ts 类型声明文件

## 1、基础说明

单独使用的模块一般都有一个单独的类型声明文件，里面描述该模块的属性、方法等，以供使用者了解和编译器检查。类型声文件一般为`[模块名].d.ts`的形式。

1. 一个模块的实现和声明文件的实现

   - 模块实现

     ```typescript
     const num: number = 5;
     const fun: (num: number) => string = (num: number) => num.toString();
     ```

   - 模块的声明文件

     ```typescript
     export const num: number;
     export const fun: (num: number) => string;
     ```

2. 声明文件的使用

   - 声明文件的定义

     ```typescript
     export interface Base {
       fun(num: number): string;
       num: number;
     }
     ```

   - 声明文件的使用

     - 方式一：直接导入

       ```typescript
       import type { Base } from "./type.d.ts";

       export const base: Base = {
         fun: (num: number) => num.toString(),
         num: 0,
       };
       ```

     - 方式二：在`tsconfig.json`中配置

       类型声明文件也可以包括在项目的 tsconfig.json 文件里面，这样的话，编译器打包项目时，会自动将类型声明文件加入编译，而不必在每个脚本里面加载类型声明文件。

       ```json
       {
         "compilerOptions": {},
         "files": ["type.d.ts"]
       }
       ```

## 2、类型文件的来源方式

- TypeScript 编译器自动生成。
- TypeScript 内置类型文件。
- 外部模块的类型声明文件，需要自己安装。

### 自动生成

- 配置`tsconfig.json`

  ```typescript
  {
    "compilerOptions": {
      "declaration": true
    }
  }
  ```

- 通过命令

  ```typescript
  tsc --declaration
  ```

### 内置声明文件

在安装`TS`的时候，就安装了一些内部声明好的文件。TypeScript 编译器会自动根据编译目标`target`的值，加载对应的内置声明文件，所以不需要特别的配置。但是，可以使用编译选项`lib`，指定加载哪些内置声明文件。

```typescript
{
  "compilerOptions": {
    "lib": ["dom", "es2021"]
  }
}
```

### 外部类型声明文件

使用第三方库的时候，就需要这个库的声明文件。

1. 这个库自带了声明文件，那么直接导入这个库的类型声明文件即可。

2. 不带有声明文件，可以去[DefinitelyTyped 仓库](https://github.com/DefinitelyTyped/DefinitelyTyped)中找，里面所有的类型库都放在了`@types`命名空间下，如果这个类型声明文件的声明文件是`index.d.ts`，那么安装库后不需要做任何操作即可，否则就要修改`tsconfig.json`来改变指定文件。

   ```json
   // 修改自动加载 node_modules/@types ，改为tsconfig.json同级的typings和vendor/types子目录，加载类型模块
   {
     "compilerOptions": {
       "typeRoots": ["./typings", "./vendor/types"]
     }
   }
   ```

   ```typescript
   // 默认情况下，TypeScript 会自动加载typeRoots目录里的所有模块，编译选项types可以指定加载哪些模块。
   {
     "compilerOptions": {
       "types" : ["jquery"]
     }
   }
   ```

3. 完全没有声明文件，就需要自己手写了，如果不想写就可以将整个库的类型指定为`any`那么就不会报错了。

   ```typescript
   declare var $: any;

   // 或者
   declare type JQuery = any;
   declare var $: JQuery;

   // 或者
   declare module "模块名";
   ```

## 3、declare

类型声明文件中只有类型的声明，`declare`也只能声明类型，也不包含实现，所以在类型声明文件中就非常适合使用`declare`来描述类型。也可以声明一些全局公共的类型，或者变量类型，然后加入到`tsconfig.json`，在使用的时候就不用到处`import`或者定义了，也可以添加`export`进行导出。

例如：

1. 声明全局类型文件`global.d.ts`

   ```typescript
   declare interface IResult<T> {
     code: number;
     msg: string;
     data: T;
   }
   ```

2. `tsconfig`配置

   ```typescript
   {
     "include": ["global.d.ts",],
   }
   ```

3. 此时就可以在任何地方不通导入就能使用这个类型

   ```typescript
   let res: IResult<string> = {
     code: 1,
     msg: "msg",
     data: "data",
   };
   ```

## 4、三斜杆命令

如果声明文件被拆分为了很多个文件，但是又需要统一入口，那么就可以通过三斜杆命令将其他的声明文件引入到一个文件中。

**注意：**三斜杆命令前面只能有其他三斜杆命令、单行注释或多行注释，否则三斜杆命令会被当做一个普通的注释。

```typescript
/// <reference path="./types.d.ts" />
```

三斜杆命令的三种参数

- path
- types
- lib

### `/// <reference path="" />`

编译器会在预处理阶段，找出所有三斜杠引用的文件，将其添加到编译列表中，然后一起编译。`path`参数指定了所引入文件的路径。如果该路径是一个相对路径，则基于当前脚本的路径进行计算。编译参数`noResolve`，则忽略三斜杠指令。将其当作一般的注释，原样保留在编译产物中。

**注意事项:**

- `path`参数必须指向一个存在的文件，若文件不存在会报错。
- `path`参数不允许指向当前文件。

1. `/// <reference path="" />`是最常见的三斜杠命令，告诉编译器在编译时需要包括的文件，常用来声明当前脚本依赖的类型文件。

   ```typescript
   function add(a: number, b: number): number {
     return a + b;
   }
   ```

   ```typescript
   /// <reference path="./test.ts" />

   let count = add(1, 2);
   ```

   上面示例表示，当前脚本依赖于`./test.ts`，里面是`add()`的定义。编译当前脚本时，还会同时编译`./lib.ts`。编译产物会有两个 JS 文件，一个当前脚本，另一个就是`./test.js`。

2. 当前脚本依赖于 其他 类型声明文件

   ```typescript
   /// <reference path="node.d.ts"/>
   import * as URL from "url";
   let myUrl = URL.parse("https://www.typescriptlang.org");
   ```

### `/// <reference types="" />`

types 参数用来告诉编译器当前脚本依赖某个 DefinitelyTyped 类型库，通常安装在`node_modules/@types`目录。

types 参数的值是类型库的名称，也就是安装到`node_modules/@types`目录中的子目录的名字。

```typescript
/// <reference types="node" />
```

上面示例中，这个三斜杠命令表示编译时添加 Node.js 的类型库，实际添加的脚本是`node_modules`目录里面的`@types/node/index.d.ts`。

可以看到，这个命令的作用类似于`import`命令。

注意，这个命令只在你自己手写类型声明文件（`.d.ts`文件）时，才有必要用到，也就是说，只应该用在`.d.ts`文件中，普通的`.ts`脚本文件不需要写这个命令。如果是普通的`.ts`脚本，可以使用`tsconfig.json`文件的`types`属性指定依赖的类型库。

### `/// <reference lib="" />`

`/// <reference lib="..." />`命令允许脚本文件显式包含内置 lib 库，等同于在`tsconfig.json`文件里面使用`lib`属性指定 lib 库。

前文说过，安装 TypeScript 软件包时，会同时安装一些内置的类型声明文件，即内置的 lib 库。这些库文件位于 TypeScript 安装目录的`lib`文件夹中，它们描述了 JavaScript 语言和引擎的标准 API。

库文件并不是固定的，会随着 TypeScript 版本的升级而更新。库文件统一使用“lib.[description].d.ts”的命名方式，而`/// <reference lib="" />`里面的`lib`属性的值就是库文件名的`description`部分，比如`lib="es2015"`就表示加载库文件`lib.es2015.d.ts`。

```
/// <reference lib="es2017.string" />
```

上面示例中，`es2017.string`对应的库文件就是`lib.es2017.string.d.ts`。
