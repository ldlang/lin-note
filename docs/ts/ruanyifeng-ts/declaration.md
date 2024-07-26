---
sidebar: auto
---

# .d.ts 类型声明文件

## 1、基础说明 

单独使用的模块一般都有一个单独的类型声明文件，里面描述该模块的属性、方法等，以供使用者了解和编译器检查。类型声文件一般为`[模块名].d.ts`的形式。

1. 一个模块的实现和声明文件的实现

   * 模块实现

     ```typescript
     const num:number = 5
     const fun:(num: number)=> string = (num: number)=> num.toString()
     ```

   * 模块的声明文件

     ```typescript
     export const num: number;
     export const fun: (num: number) => string;
     ```

2. 声明文件的使用

   * 声明文件的定义

     ```typescript
     export interface Base {
       fun(num: number): string;
       num: number;
     }
     ```

   * 声明文件的使用

     * 方式一：直接导入

       ```typescript
       import type { Base } from './type.d.ts'
       
       export const base:Base = {
         fun:(num: number)=> num.toString(),
          num: 0
       }
       ```

     * 方式二：在`tsconfig.json`中配置

       类型声明文件也可以包括在项目的 tsconfig.json 文件里面，这样的话，编译器打包项目时，会自动将类型声明文件加入编译，而不必在每个脚本里面加载类型声明文件。

       ```json
       {
         "compilerOptions": {},
         "files": [
           "type.d.ts"
         ]
       }
       ```

## 2、类型文件的来源方式

- TypeScript 编译器自动生成。
- TypeScript 内置类型文件。
- 外部模块的类型声明文件，需要自己安装。

### 自动生成

* 配置`tsconfig.json`

  ```typescript
  {
    "compilerOptions": {
      "declaration": true
    }
  }
  ```

* 通过命令

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
   declare var $:any
   
   // 或者
   declare type JQuery = any;
   declare var $:JQuery;
   
   // 或者
   declare module '模块名';
   ```

## 3、declare

类型声明文件中只有类型的声明，`declare`也只能声明类型，也不包含实现，所以在类型声明文件中就非常适合使用`declare`来描述类型。也可以声明一些全局公共的类型，或者变量类型，然后加入到`tsconfig.json`，在使用的时候就不用到处`import`或者定义了，也可以添加`export`进行导出。

例如：

1. 声明全局类型文件`global.d.ts`

   ```typescript
   declare interface IResult <T> {
       code: number,
       msg: string,
       data: T
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
       msg: 'msg',
       data: 'data'
   }
   ```

