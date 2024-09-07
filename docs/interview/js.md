---
sidebar: auto
---

# js 面试题

## 1、节点操作

1. 创建节点

   - `createElement` 创建 dom 节点
   - `createTextNode` 创建文本节点
   - `createDocumentFragment` 创建虚拟的节点对像
   - `createAttribute` 创建节点属性

2. 获取节点

   - `querySelector` 获取单个节点

     ```js
     document.querySelector(".box"); // class
     document.querySelector("#box"); // id
     document.querySelector("div"); // 标签名
     document.querySelector('[name="username"]'); // 属性
     document.querySelector("div + p > span"); // css选择器
     ```

   - `querySelectorAll` 获取所有匹配的节点

   - `getElementById` 通过 ID 获取节点

   - `getElementsByClassName` 通过 class 获取节点

   - `getElementsByTagName` 通过标签名获取节点

   - `getElementsByName` 通过标签上 name 属性的 value 来匹配对应的节点

   - `documentElement` 获取 html 标签

   - `body` 获取 body 标签

   - `document.all` 获取所有节点的数组

3. 更新节点

   - `innerHTML`
   - `innerText` 不会获取隐藏标签的纯文本内容
   - `textContent` 可以获取隐藏标签的纯文本

4. 添加节点

   - `appendChild` 追加为最后一个子节点
   - `insertBefore` 插入指定节点的之前（同为某一节点的子节点）
   - `setAttribute` 设置节点的属性值

5. 删除节点

   - `removeChild` 从父节点中删除指定的子节点

## 2、== 和 ===

1. ==

   一般会将比较的两个值进行**隐式转换**再进行比较。

   - 简单数据类型的比较，字符串和布尔值都会转换为数值
   - 简单数据类型和复杂数据类型比较，会先取复杂数量类型的`valueOf`，取不到则是`[object Object]`
   - 复杂数据类型比较，比较的是引用地址
   - 只要存在`NaN`则为`false`，即使是两个`NaN`比较也是`false`
   - `null`和`undefined`，只有和自身比较，或者相互比较才返回`true`
   - `false == 0 == ''`

2. ===

   两个值在值相等的前提下，数据类型也要一致才相等。

   - 只要存在`NaN`则为`false`，即使是两个`NaN`比较也是`false`
   - `null`和`undefined`只严格和自身相等

## 3、如何准确判断一个变量的数据类型

使用`Object.prototype.toString.call`来判断，会返回一个`[object Number]`这样的字符串，`Number`就是变量的数据类型。

```js
const int1 = BigInt(15);
Object.prototype.toString.call(int1); // [object BigInt]
Object.prototype.toString.call(int1).slice(8, -1); // BigInt
```

为什么不用`typeof`和`instanceof`

1. `typeof`只能准确判断基本数据类型，`null`除外，对于引用数据类型，除了`function`都只能得到`object`
2. `instanceof` 主要用于检查一个对象是否是其原型链上某个构造函数的实例。由于这种机制依赖于原型链和构造函数，它特别适用于复杂数据类型（如对象、数组、函数等），而不适用于没有原型链的基本数据类型。

## 4、new 操作符具体做了什么

> 函数拥有`prototype`对象拥有`__proto__`

`new`运算符允许开发人员创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

1. 创建了一个新的对象
2. 将对象与构造函数通过原型链连接起来
3. 将构造函数中的`this`绑定到新创建的对象上
4. 被实例化的函数如果有`return`，基础数据类型会被忽略，复杂数据类型则新对象永远都是改返回值。

## 5、事件委托

1. 什么事件委托

   事件委托，通俗来说是**将元素的事件委托给它的父级或者更外级元素处理**。
   事件委托也叫事件代理，就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。**事件委托就是利用事件冒泡机制实现的。**

2. 事件委托的作用

   - 提高性能：每一个函数都会占用内存空间，只需添加一个时间处理程序代理所有事件，**所占用的内存空间更少**
   - 动态监听：使用事件委托可以自动绑定动态添加的元素，即新增的节点不需要主动添加也可以具有和其它元素一样的事件。

3. 注意事项

   - 事件委托的实现依靠**事件冒泡**，因此不支持事件冒泡的事件就不适合用事件委托。

事件委托示例

```html
<ul>
  <li>按钮1</li>
  <li>按钮2</li>
  <li>按钮3</li>
  <li>按钮4</li>
</ul>
<script>
  //给每个Li绑定click事件
  let ul = document.querySelector("ul");
  ul.onclick = function (e) {
    let e = e || window.event; ////获取事件对象
    if (e.nodeName === "Li") {
      console.log(e.target.innerText);
    }
  };
</script>
```

## 6、闭包

最简单的解释就是函数里面套函数，里面的函数能够访问到外部函数的作用域。

```js
function fun(i) {
  return function () {
    return ++i;
  };
}
// 或者
function fun() {
  let i = 0;
  return function () {
    return ++i;
  };
}

const f = fun(0);
console.log(f()); // 1
console.log(f()); // 2
console.log(f()); // 3
```

> 对于上面函数 fun 在第一次执行的时候就创建了 i 变量，并且后面一直调用的是 f 函数，所以 i 变量就一直贮存在了内存中，因此只要执行 f 函数，那么 i 就会一直递增

1. 优点
   - 保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突
   - 在内存中维持一个变量，可以做缓存
   - 匿名自执行函数可以减少内存消耗
2. 缺点
   - 私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为 null；
   - 其次由于闭包涉及跨域访问，所以会导致性能损失

使用场景

1. 创建私有变量
2. 延长变量的生命周期

## 7、JSON.parse 深拷贝存在的问题

如果 value 的值为`undefined`、`Symbol`或`function`则该键值对会被忽略。

## 8、一些概念

### 8.1、柯里化函数

接受多参数的函数转换为接受一个参数的函数

```js
function add(x, y) {
  return x + y;
}
add(1, 2);

// 柯里化
function curryingAdd(x) {
  return function (y) {
    return x + y;
  };
}
curryingAdd(1)(2);
```

### 8.2、高阶函数

高阶函数是指可以接受一个或多个函数作为参数，或者返回一个函数的函数。如`map`、`filter`、`find`本身就是一些高阶函数。

## 9、事件循环

js 是单线程，但是 js 为了不发生阻塞，会使用事件循环的方式去解决。在 js 中**异步任务也分为宏任务和微任务**，

1. 微任务
   - promise.then
   - MutationObserver
   - Object.observe(已废弃，Proxy 对象代替)
   - process.nextTick (node.js)
   - await 后面的也会被放入微任务
2. 宏任务
   - setTimeout 和 setInterval
   - I/O 操作
   - DOM 事件：例如点击事件、输入事件等。
   - AJAX 请求的回调函数：AJAX 完成时，其回调函数会被放入宏任务队列中。
   - postMessage 和 MessageChannel

执行流程

```
1. 执行 script 宏任务
   -> 遇到 setTimeout，推入宏任务队列
   -> 遇到 Promise.then，推入微任务队列

2. script 宏任务执行完毕
   -> 检查并执行所有微任务队列中的 Promise.then

3. 微任务队列清空
   -> 浏览器渲染（如果需要）

4. 回到事件循环
   -> 从宏任务队列中取出 setTimeout 执行
   -> 重复上述过程
```

举个例子

```js
console.log("script start");

async function async1() {
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2 end");
}

async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

// 执行结果
/* 	  
script start
async2 end
Promise
script end
async1 end
promise1
promise2
setTimeout
*/
```

执行结果分析

1. `console.log('script start')`为同步代码直接执行，输出结果`script start`。
2. 运行`async1()`函数，因为`await`会阻塞`promise`所以执行`async2()`，输出`async2 end`，同时将`console.log('async1 end');`放入微任务队列。
3. `setTimeout`直接放入宏任务队列等待执行
4. 输出`Promise`，后面的两个`.then`放入微任务队列
5. 执行`console.log('script end')`，输出`script end`
6. 开始往下执行微任务，输出
   1. async1 end
   2. promise1
   3. promise2
7. 执行宏任务队列，输出`setTimeout`

## 10、触底加载

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }

      img {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div id="container" style="height: 500px; overflow-y: scroll">
      <div id="box"></div>
    </div>

    <script>
      const box = document.querySelector("#box");
      const container = document.querySelector("#container");

      for (let i = 0; i < 20; i++) {
        box.innerHTML += `<img src="./logo.png">`;
      }
      // 获取容器的高度
      let containerHeight = container.getBoundingClientRect().height;

      container.onscroll = function () {
        // 获取容器滚出的高度
        let scrollTop = container.scrollTop;
        // 获取内容的高度
        let scrollHeight = box.scrollHeight;
        // 容器滚出的高度 + 获取容器的高度 >= 内容的高度 则触底加载
        if (scrollTop + containerHeight >= scrollHeight) {
          for (let i = 0; i < 8; i++) {
            box.innerHTML += `<img src="./logo.png">`;
          }
        }
      };
    </script>
  </body>
</html>
```

## 11、js 继承的方式

1. 原型链继承

   直接将实例赋值给函数的`prototype`上

   ```js
   function Parent() {
     this.name = "parent1";
   }
   function Child() {
     this.type = "child2";
   }
   Child.prototype = new Parent();
   ```

2. 构造函数继承

   ```js
   function Parent(value) {
     this.value = value;
   }

   function Child(value) {
     Parent.call(this, value);
   }

   var child = new Child(true);
   console.log(child.value); // true
   ```

3. 组合继承

   ```js
   function Parent(value) {
     this.value = value;
   }

   Parent.prototype.getValue = function () {
     return this.value;
   };

   function Child(value) {
     Parent.call(this, value);
   }

   Child.prototype = new Parent();

   var child = new Child(true);
   console.log(child.getValue()); // true
   ```

4. ES6 class 的 extends 关键字

   ```js
   class Parent {
     constructor(value) {
       this.value = value;
     }

     getValue() {
       return this.value;
     }
   }

   class Child extends Parent {
     constructor(value) {
       super(value);
     }
   }

   const child = new Child(true);
   console.log(child.getValue()); // true
   ```

## 12、数字计算精度问题如何解决

转换为整数进行计算

```js
/**
 * 精确加法函数，用于处理浮点数加法时的精度问题
 * @param {number} num1 第一个加数
 * @param {number} num2 第二个加数
 * @returns {number} 两个加数的和，保持最大精度
 */
function add(num1, num2) {
    // 获取num1的小数位数
    const decimal1 = (num1.toString().split('.')[1]?.length;
    // 获取num2的小数位数
    const decimal2 = (num2.toString().split('.')[1]?.length;
    // 确定转换基数，即10的多少次方，以确保两个数相加时小数部分不会丢失精度
    const baseFactor = Math.pow(10,Math.max(decimal1,decimal2));
    // 将两个数转换为整数（通过乘以基数），相加，然后再转换回原来的比例
    return (num1 * baseFactor + num2 * baseFactor) / baseFactor;
}
```

## 13、箭头函数与普通函数有什么区别

1. 箭头函数没有自己的`this`
2. 不能被实例化，也就是不能使用`new`
3. 没有`arguments`，但可以使用`rest`参数代替
