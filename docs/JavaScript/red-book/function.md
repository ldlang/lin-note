---
sidebar: auto
---

# 函数

1. 每个函数都会被默认添加上一个`name` 属性，一般等于这个函数的函数名，即使是匿名函数也有一个空串

   ```js
   function fun() {}
   fun.name = "hhhhh"; // 强制的改动是无用的
   console.log(fun.name); // fun
   ```

2. **arguments**

   - 除了箭头函数，每个函数都有一个`arguments`对象，他是一个数组，保存着函数调用时传递过来的参数，
     可以任意个参数，即使函数没有显示的什么形参去接收，`arguments`依然能够拿到传递过来的参数，他将
     参数保存在一个数组里面，只需要和读取数组同样的方式就能接收到参数。

     ```js
     function fun() {
       console.log(arguments);
     }

     fun(5, 10); // arguments  ==> [5, 10]
     ```

   - `arguments`保存的参数能和声明接收的形参混用

     ```js
     function fun(a, b) {
       console.log(a + arguments[1]); // 15
       // 此时的arguments[1]就等同于参数b
     }

     fun(5, 10);
     ```

   - `arguments`保存的参数能和形参接收的值是同步的更改的，无论是改 arguments 还是该形参结果都一样

     ```js
     function fun(a, b) {
       arguments[0] = 0; // 如果是 a = 0，此时 arguments[0]同样改变为 0
       console.log(a); // 0
       console.log(a + arguments[1]); // 10
     }

     fun(5, 10);
     ```

   - 如果并没有传递第二个参数，然后显示的更改`arguments[1]`形参是不会同步更改的

     ```js
     function fun(a, b) {
       arguments[1] = 5;
       console.log(arguments); // [5,5]
       console.log(b); // undefined
       console.log(a + b); // NaN
     }

     fun(5);
     ```

   - 箭头函数没有`arguments`

3. 同名函数后一个会覆盖前一个

   ```js
   function fun(a) {
     return a + 10;
   }

   function fun(a) {
     return a + 15;
   }

   console.log(fun(5)); // 20
   ```

4. **参数默认值**

   - 函数的形参可以设置默认值，默认值只有在不传入参数或者显示的传入`undefined`时才会生效，
     即使显示的传入`null`也不会生效

     ```js
     function fun(a = 9) {
       return a + 10;
     }

     console.log(fun()); // 19
     console.log(fun(undefined)); // 19
     console.log(fun(null)); // 10
     console.log(fun(10)); // 15
     ```

   - 默认值并不会同步到`arguments`中

     ```js
     function fun(a = 9) {
       console.log(arguments); // [], argument不会捕获到默认值
       return a + 10;
     }

     fun();
     ```

   - 可以使用前面的参数去初始化后面的参数

     ```js
     function fun(a = 9, b = a) {
       // 用a的值去给b添加默认值
       console.log(a, b); // 5, 5
       return a + b;
     }

     console.log(fun(5)); // 10
     ```

5. **参数扩展与收集**

   - 扩展参数

     - 将一个函数的每个值，拆开为多个参数同时传进去

       ```js
       let values = [1, 2, 3, 4, 5];
       function fun() {
         let sum = 0;
         for (let i = 0; i < arguments.length; ++i) {
           sum += arguments[i];
         }
         return sum;
       }

       ES6的方式;
       console.log(fun(...values)); // 15

       ES6之前的方式;
       console.log(fun().apply(null, values)); // 15
       ```

     - **apply**是所有函数对象的方法，接收两个参数，第一个是函数的执行的上下文，也就是函数
       this 的指向，第二个参数一般是数组，并且会将这个数组拆分为每一项，同时作为参数传入函数
       ，等同于`...`的效果。

       ```js
       let values = [1, 2, 3, 4, 5];
       function fun() {
         let sum = 0;
         for (let i = 0; i < arguments.length; ++i) {
           sum += arguments[i];
         }
         return sum;
       }
       console.log(fun.apply(null, values));
       ```

   - 收集参数

     - 收集多个参数 es6 之前用`arguments`,es6 之后可以用`...`收集，但是用`...`收集必须为最后
       一个形参，被`...`收集的参数会组合为一个数组

       ```js
       let values = [1, 2, 3, 4, 5];
       function fun(...arr) {
         let sum = 0;
         for (let i = 0; i < arr.length; ++i) {
           sum += arr[i];
         }
         return sum;
       }

       console.log(fun(...values));
       ```

6. **回调函数**

   可以直接将函数作为

   ```js
   function fun(option) {
     option.sum(option.count);
   }

   fun({
     count: 5,
     sum: (e) => {
       console.log(e);
     },
   });
   ```

7. **递归函数**

   ```js
   在函数内部调用自身，但这样和函数名紧密的耦合 在函数内部可以调用 arguments.callee() 代替函数
       function fun(num) {
           if (num > 1) {
               return fun(num - 1)  // arguments.callee(num - 1)
           } else {
               return 'fun'
           }
       }
   ```

8. **this 指向**

   - 普通函数的`this`指向的是，调用这个函数的上下文，如在全局中调用，那么他的`this`就是指向`window`
     ，如果作为对象身上的方法被调用，那么`this`就指向这个对象。

     ```js
     function fun() {
       console.log(this);
     }
     fun(); // 在全局作用域下调用，则指向 window

     const obj = {};
     obj.fun = fun;
     obj.fun(); // 作为对象身上的方法调用，则指向 obj这个对象
     ```

   - 箭头函数的`this`在定义时就确定了，也可以说没有自己的`this`，他的`this`都是继承来的，在全局作用
     域下，他的`this`是指向`window`，作为对象里面的方法调用，依然指向`window`，但是如果在普通函数里
     面嵌套的箭头函数，那么箭头函数的`this`,就是继承普通函数的`this`，所以说他其实没有自己的`this`

     ```js
     const obj = {
       fun() {
         const fu = () => {
           console.log(this); //fu是继承了fun的this，fun又是obj上的方法，所以this指向obj
         };
         fu();
       },
       fun1: () => {
         console.log(this); // 箭头函数没有自己的this，他又没有可继承的this，所以指向window
       },
     };

     obj.fun();
     obj.fun1();
     ```

9. **new.target**

   检测函数是否被作为构造函数使用，也就是函数是否被`new`过，如果没被`new`过，那么`new.target`的
   值为 undefined，否则就是他自身这个函数体

   ```js
   function fun() {
     console.log(new.target);
   }
   fun(); // undefined
   const p = new fun(); // fun的函数体
   ```

10. 函数也是 length 属性

    函数的 length 取决去定义函数时，显示书写的形参，有几个形参 length 就是多少

11. **函数表达式**

    - 创建函数一般是两种方式，一种是 `function` 后面直接跟函数名，另一种函数不跟函数名，而是将函
      数体赋值到一个新的变量里面，通过`function`的方式创建函数，可以在任意地方调用这个函数，而通过
      变量赋值的方式只能在，定义这个函数之后调用

      ```js
      fun(); // 正常
      function fun() {}
      fun1(); // 报错
      const fun1 = function () {};
      ```

    ```

    ```

12. **闭包**

    函数里面嵌套了一个函数，就是闭包函数，闭包会保留它们包含函数的作用域，所以比其他函数更占用内存。
    过度使用闭 包可能导致内存过度占用，因此建议仅在十分必要时使用。

13. **立即执行函数**

    函数执行完了就销毁了，就不会存在闭包函数的内存泄露情况

    ```js
    (function () {
      console.log("匿名函数自执行了");
    })();
    ```

### 箭头函数与普通函数的区别

1. 普通函数有`arguments`对象，而箭头函数则没有
2. 普通函数的`this`指向调用他的上下文，箭头函数没有自己的 this，他的 this 是继承来的，但是在全局作用域下，他们两的 this 都是指向`window`
3. 箭头函数不能用做为构造函数，因此也没有`new.target`属性，因为箭头函数没有自己的`this`,
4. 箭头函数不能被`apply`、`call`和`bind`改变 this 指向，但是可以传递参数，还是因为他没有自己的`this`
5. 箭头函数没有`prototype`

### 改变 this 指向的函数

apply、call 和 bind，都能都改变`this`的指向

**apply** 会立即执行函数，接收两个参数，第一个就是函数执行的上下文，也就是函数的`this`，第二个是一
个数组或者类数组，并且会将这个数组拆分为很多个参数传递给函数，等同于岁数组使用`...`的效果

**call** 会立即执行参数，可以接收任意个参数，第一个参数为函数执行的上下文，后面的参数都作为传递给函数的参数

**bind** 不会立即执行函数，而是创造一个新的函数，也可以接收任意个参数，第一个参数为函数执行的上下文，后面的参数都作为传递给函数的参数

```js
window.color = "red";
const obj = {
  color: "blue",
};

function fun() {
  console.log(this.color);
}
fun(); // red
fun.apply(obj); // blue
fun.call(obj); // blue
fun.bind(obj)(); // blue
```
