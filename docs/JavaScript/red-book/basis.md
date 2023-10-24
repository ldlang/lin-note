---
sidebar: auto
---

# js 红宝书笔记

### html 中的 js

1. **script**的位置

   - 放在`head`中

     > 如果放在`head`中，浏览器会把所有的`js`文件下载，解析和解释完毕后，才会渲染页面，
     > 此时 body 里面的标签就会被这个操作延迟渲染，会出现白屏等情况

   - 放在`body`中，并且`script`位于标签的后面

     > 这样页面就会先渲染出来，就会让用户觉得加载很快，体验也会更好

2. **script**标签的属性

   - `defer`延迟加载`script`引入的脚本

     ```js
     <script defer src="./greeter.js"></script>
     ```

     > 这样把 script 放在 head 中，虽然刚开始就下载了 js 的脚本，但是会在页面渲染完成以后
     > 才会，解析执行 js 的脚本，一定程度上等同于，把 script 放置于 body 的最后，但是 defer
     > 只对外部的 js 脚本有效，也就是引入的 js 文件。defer 属性被大多数的浏览器忽略了，所以
     > 还是把 script 放置于 body 的最后才是最优选

   - `async`同时下载脚本

     ```js
     <script async src="./greeter.js"></script>
     ```

     > 页面上引入两个 script 的脚本，如果都加入了 async 那么浏览器就不会先下载完上面那个脚本，
     > 才会下载第二个脚本，而是同时下载两个脚本，并且这种方式也不会阻塞页面的渲染，前提是你必须
     > 保证这两个脚本之间没有任何的关联。不过这个属性依然不推荐使用

3. 动态的加载脚本

   ```js
   let script = document.createElement("script");
   script.src = "./greeter.js";
   document.head.appendChild(script);
   ```

   > 这样就会异步的加载这个 js 的脚本，这有在执行到这段代码时，对应的 js 文件才会被下载，你可以通
   > 过 link 先将这个文件下载下来，等执行到这段代码的时候，文件已经存在，就不会去下载，能够直接解析
   > 脚本

   ```html
   <link rel="preload" as="script" href="./greeter.js" />
   告诉浏览器哪些资源可能在将来需要，这样浏览器就可以在后台提前获取这些资源，从而提高页面加载速度,
   as去指定下载文件的类型
   ```

4. `noscript`标签

   > 主要是针对以前不直接 js 的浏览器设计的，但现在主要的用途是检测浏览器是否关闭了对 js 的支持，
   > 只要满足条件 noscript 中的内容就会被渲染

### js 语言基础

1. 语句

   > 在 js 语句的末尾到底是加上`;`好，还是不加好，虽然`;`不是必须的，但是还是加上好，因为加分号也
   > 有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误。

2. **var**声明变量

   - 在函数内部声明变量，函数执行完以后，函数内部的变量就已经被销毁了，即使在函数执行前也不行

     ```js
     function fun() {
       var msg = 5;
     }
     fun();
     console.log(msg); // 报错
     ```

   - 在函数内部不使用`var`创建变量，那么他将会是一个全局的变量，虽然在外部能访问到这个变量，但是要在
     函数执行完之后才有会这个变量

     ```js
     function fun() {
       msg = 5;
     }
     console.log(msg); // 报错，此时函数还没有执行，不存在这个变量
     fun();
     console.log(msg); // 5
     ```

   - 同时声明多个变量

     ```js
     var a = 5,
       b = 6,
       c = 7;

     等同于;

     var a = 5,
       b = 6,
       c = 7;
     ```

   - 变量提升，通过`var`声明的变量会被提升到作用域的顶部，只不过在变量声明之前调用的结果是 undefined 而已

     ```js
     function fun() {
       console.log(msg); // undefined,并不会报错
       var msg = 5;
     }
     fun();

     等同于;

     function foo() {
       var msg;
       console.log(msg); // undefined
       age = 26;
     }
     foo();
     ```

3. **let**声明变量

   - 作用域`var`只有在函数内才有局部作用域，而`let`的作用域不仅是函数，在`{}`内也是他的作用域

   - 不允许声明相同的变量名，即使是被`var`重复声明也不行

   - 不存在变量提升，声明变量之前调用变量会报错

   - `var`声明的变量会被挂到`window`上，而 let 声明的则不会

     ```js
     var name = "张三";
     console.log(window.name); // '张三'

     let age = 15;
     console.log(window.age); // undefined
     ```

   - 在`for`循环中使用`var`和`let`，如果`for`循环中包含了异步行为，并且在异步中使用`var`声明变量
     ,那么得到的结果将不会是每一次的循环的结果，而每一次得到的都是循环的最终结果，而`let`则会得到预期
     的结果。包括 for-in 和 for-of 也会产生同样的结果。

   - ```js
     for (var index = 0; index < 5; index++) {
         setTimeout(() => {
         	console.log(index);  // 得到 5 次 5
         }, 20);
     }

     产生这样结果的原因：
     	是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的 i 都
        是同一个变量，因而输出的都是同一个最终值。而在使用`let`声明迭代变量时，JavaScript 引擎在
        后台会为每个迭代循环声明一个新的迭代变量。每个 setTimeout 引用的都是不同的变量实例
     ```

4. **const**声明变量

   - 使用`const`声明的基础类型变量是不可以更改的，但是引用类型的里面的值是可以更改的

   - 使用`const`声明 for 循环里面的自增变量是不行的，但是可以声明一个不会被修改的 for 循环变量

     ```js
     for (const i = 0; i < 10; ++i) {} // 报错，声明的i是自增了

     不会报错;
     for (const key in { a: 1, b: 2 }) {
       console.log(key); // a, b
     }

     for (const value of [1, 2, 3, 4, 5]) {
       console.log(value); // 1, 2, 3, 4, 5
     }
     ```

5. 数据类型

   - js 有 6 中简单的数据类型和一种复杂的数据类型`object`

     ```js
     简单数据类型 Undefined、Null、Boolean、Number、String 、Symbol
     复杂数据类型叫 Object

     Symbol的使用场景，比如父组件的插槽中同时插入了三个相同的子组件，但此时想要区分三个组件，
     就可以在子组件中创建一个symbol的值
     ```

6. **typeof** 操作符得到的结果类型

   ```js
   undefined	表示值未定义；
   boolean		表示值为布尔值；
   string		表示值为字符串；
   number		表示值为数值；
   object		表示值为对象（而不是函数）或 null；
   function	表示值为函数；
   symbol		表示值为符号。

   特殊
   	typeof null === 'object'

   传参形式使用
   	typeof(null) === 'object'
   ```

7. **undefined**

   - 声明了变量但为赋值，他的值就是`undefined`
   - 在`if`语句中 undefined 是不会走进去的，但是取反可以

8. **null**

   - 在`if`语句中`null`是不会走进去的，但是取反可以
   - 定义变量是如果不直接赋值最好可以给一个`null`值
   - `null`被`typeof`检测时会得到一个`object`

9. **Boolean**

   | 数据类型  | 转换为 true            | 转换为 false   |
   | --------- | ---------------------- | -------------- |
   | Boolean   | true                   | false          |
   | String    | 非空字符串             | ""（空字符串） |
   | Number    | 非零数值（包括无穷值） | 0、NaN         |
   | Object    | 任意对象（包括空对象） | null           |
   | Undefined | N/A（不存在）          | undefined      |

10. **number**

    - 数字的最大值 Number.MAX_VALUE
    - 数字的最小值 Number.MIN_VALUE
    - 无穷大 Infinity
    - 无穷小 -Infinity
    - 判断一个数字是不是有限大介于 JavaScript 能表示的最小值和最大值之间 isFinite(re) 有限大返回 true
    - 特殊`NaN`表示不是一个数值，如 5 / 'a' ===> NaN
      - NaN == NaN ===> false ,任何两个 NaN 都是不等的
      - isNaN(NaN) ===> true ,判断一个值是不是 NaN

11. **string**

    - 几乎所有类型的值都可以通过`toString`转换为字符串
    - `toString`可以接收参数，表示转换进制，toString(16)表示转换为 16 进制

12. **Symbol**

    - 任何两个 Symbol 都是不相等的

      ```js
      let sym = Symbol();
      let sym1 = Symbol();
      sym == sym1; // false

      let sym = Symbol("foo");
      let sym1 = Symbol("foo");
      sym == sym1; // false
      ```

    - 使用`for`重用同一个 Symbol，注册一个全局的符号

      ```js
      let msg = Symbol.for("foo");
      let str = Symbol.for("foo");
      msg === str; // true
      ```

    - 使用`keyFor`查询通过`for`全局注册的 Symbol

      ```js
      let msg = Symbol.for("foo");
      let str = Symbol.for();
      keyFor(msg); // foo
      keyFor(str); // undefined
      ```

    - 使用 Symbol 作为对象的 key，怎么读取他的 value

      ```js
      方式一：将Symbol作为一个变量
          let msg = Symbol('key')
          const obj = {
              [msg]: 'val'
          }
          obj[msg] // val

      方式二：
          let o = {
            [Symbol('foo')]: 'foo val',
            [Symbol('bar')]: 'bar val'
          };
          let barSymbol = Object.getOwnPropertySymbols(o)
          .find((item) => item.toString().match(/foo/));
          console.log(o[barSymbol]);

       Symbol.match 一个正则表达式方法，该方法用正则表达，去匹配字符串
      ```

### 操作符和语句

1. ++i 和 i++

   - 虽然都是自增，但是如果进行运算时，++i 是先自增在运算，i++是先运行在自增

     ```js
     let i = 2;
     let num = ++i + 3; // num = 6 ，i = 3
     let num = i++ + 3; // num = 5 ，i = 3
     ```

2. **do···while**

   ```js
   do里面的循环体至少执行一次，do里面的代码执行后才会走到while里面的条件，当条
   件为true时，又会执行到do里面的代码

   do {
       ++i;
       console.log(i); // 1 , 2··· 10
   } while (i < 10);
   ```

3. **while**

   ```js
   while里面的代码不一定会执行，当while的条件为true时便会执行里面的代码。
   let i = 0;
   while (i < 5) {
       ++i;
       console.log(i);// 0 ··· 5
   }
   ```

4. **for**

   ```js
   for语句基本上都是等同于while语句的，下面的代码和while语句是等效的
       let count = 10;
       let i = 0;
       for (; i < count; ) {
            console.log(i);
            i++;
       }

   for初始化、条件表达式和循环后表达式都不是必需的。因此，下面这种写法可以创建一个无穷循环
   	for (;;) {
           console.log('循环');
       }
   ```

5. **for···in**

   ```js
   遍历对象，key得到的就是对象的每一个 key 值，并且如果 key 是数字，会被先遍历，字符串的
    key 则会在数字之后按正常顺序输出，并且会被从小到大排序
         let obj = {
           p: "p",
           1: "1",
           2: "2",
           a: "a",
         };
         for (const key in obj) {
           console.log(key);// 1,2，p,a
         }

   遍历数组，index得到的将会是数组的下标
   	  let arr = ["a", "b", "c"];
         for (const index in arr) {
           console.log(arr[key]);
         }
   ```

6. **for···of**

   ```js
   for···of不能遍历对象，只能遍历数组，map，set等

   let arr = ["a", "b", "c"];
   for (const val of arr) {
       console.log(val);  // 得到的是数组的每一个值
   }
   ```

7. **break **和 **continue**

   ```js
   break		直接终止这个循环体
   continue	跳出当前这次循环

   退出语句最好置于循环体的最上面，不然退出语句上面的语句还是会执行
   let arr = [1, 2, 3];
   for (const index in arr) {
       if (index == 1) {
           continue;
       }
       console.log(index);
   }
   ```

8. **with** 不推荐使用

   ```js
   with这意味着在这个语句内部，每个变量首先会被认为是一个局部变量。如果没有找到该局部变量，
   则会搜索 obj 对象，看它是否有一个同名的属性。如果有，则该变量会被求值为 obj 对象的属性。

   let obj = {
       a: "aaa",
       b: "bbb",
       c: "ccc",
   };
   with (obj) {
       let str = a;
       console.log(str); // aaa
   }
   ```

9. **switch**

   ```js
   switch语句会用传入的参数去和每一个case的值进行 === 的比较，如果相等则会执行 case: 后面
   的代码块，如果没有一个条件匹配则会执行到 default: 后面的语句中，default 是可选的参数。

   注意：每个case的条件的最后必须加上 : ，default的后面也要加上 :

   let fruit = "苹果";
   switch(fruit) {
       case "苹果":
           console.log("苹果");  // 执行到这里了，被break，后面的代码就不会被执行了
           break;
       case "香蕉":
           console.log("香蕉");
           break;
       default:
           console.log("不是苹果也不是香蕉");
   }
   ```
