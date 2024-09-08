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

## 14、字符串常用方法

| 方法          | 说明                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| charAt()      | 返回在指定位置的字符。                                                  |
| concat()      | 连接两个或更多字符串，并返回新的字符串。                                |
| endsWith()    | 判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。              |
| indexOf()     | 返回某个指定的字符串值在字符串中首次出现的位置。                        |
| includes()    | 查找字符串中是否包含指定的子字符串。                                    |
| lastIndexOf() | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。 |
| match()       | 查找找到一个或多个正则表达式的匹配。                                    |
| repeat()      | 复制字符串指定次数，并将它们连接在一起返回。                            |
| replace()     | 在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。                |
| replaceAll()  | 在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。            |
| search()      | 查找与正则表达式相匹配的值。                                            |
| slice()       | 提取字符串的片断，并在新的字符串中返回被提取的部分。                    |
| split()       | 把字符串分割为字符串数组。                                              |
| startsWith()  | 查看字符串是否以指定的子字符串开头。                                    |
| substr()      | 从起始索引号提取字符串中指定数目的字符。                                |
| substring()   | 提取字符串中两个指定的索引号之间的字符。                                |
| toLowerCase() | 把字符串转换为小写。                                                    |
| toUpperCase() | 把字符串转换为大写。                                                    |
| trim()        | 去除字符串两边的空白。                                                  |

## 15、数组常用方法

| 方法          | 描述                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------- |
| concat()      | 连接两个或更多的数组，并返回结果。                                                               |
| copyWithin()  | 从数组的指定位置拷贝元素到数组的另一个指定位置中。                                               |
| every()       | 检测数值元素的每个元素是否都符合条件。                                                           |
| fill()        | 使用一个固定值来填充数组。                                                                       |
| filter()      | 检测数值元素，并返回符合条件所有元素的数组。                                                     |
| find()        | 返回符合传入测试（函数）条件的数组元素。                                                         |
| findIndex()   | 返回符合传入测试（函数）条件的数组元素索引。                                                     |
| forEach()     | 数组每个元素都执行一次回调函数。                                                                 |
| includes()    | 判断一个数组是否包含一个指定的值。                                                               |
| indexOf()     | 搜索数组中的元素，并返回它所在的位置。                                                           |
| join()        | 把数组的所有元素放入一个字符串。                                                                 |
| lastIndexOf() | 搜索数组中的元素，并返回它最后出现的位置。                                                       |
| map()         | 通过指定函数处理数组的每个元素，并返回处理后的数组。                                             |
| pop()         | 删除数组的最后一个元素并返回删除的元素。                                                         |
| push()        | 向数组的末尾添加一个或更多元素，并返回新的长度。                                                 |
| reduce()      | 将数组元素计算为一个值（从左到右）。                                                             |
| reduceRight() | 将数组元素计算为一个值（从右到左）。                                                             |
| reverse()     | 反转数组的元素顺序。                                                                             |
| shift()       | 删除并返回数组的第一个元素。                                                                     |
| slice()       | 选取数组的一部分，并返回一个新数组。                                                             |
| sort()        | 对数组的元素进行排序。                                                                           |
| splice()      | 从数组中添加或删除元素。                                                                         |
| unshift()     | 向数组的开头添加一个或更多元素，并返回新的长度。                                                 |
| Array.at()    | 用于接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。 |
| flat()        | 扁平化数组，参数为扁平化的层数。                                                                 |
| flatMap()     | 扁平化数组，只能扁平化一层，并且可以对每个成员执行`map`方法。                                    |

### reduce 详解

- reduce 接受两个参数，分别是回调函数和初始值

  1. 回调函数，并且接受四个参数

     - pre（必传）

       如果有初始值，那么第一次循环`pre`就是初始值的值，如果没有初始值，那么`pre`的值就是数组第一项的值，此时假如数组长度是 6，那么只会进行 5 次循环；对于第二次及以后的循环，那么`pre`则是上一次循环`return`的值，如果没有`return`则是`undefined`

     - cur（必传）

       数组的每一项，如果有初始值那么从第二项开始，否则从第一项开始

     - index （可选索引）

     - array （可以，数组原始值）

  2. 初始值 （可选）

- 求数字的总和或乘积

  ```js
  const arr = [1, 2, 3, 4, 5, 6];
  arr.reduce((acc, cur) => acc + cur); // 21
  arr.reduce((acc, cur) => acc * cur); // 720
  ```

- 统计每个字符出现的次数

  ```js
  let names = ["张三", "李四", "王五", "张三", "张三", "王五"];
  let nameNum = names.reduce((pre, cur) => {
    cur in pre ? pre[cur]++ : (pre[cur] = 1);
    return pre;
  }, {}); // 初始值设一个对象，pre就会是一个对象
  console.log(nameNum); // {张三: 3, 李四: 1, 王五: 2}
  ```

- 数组去重

  ```js
  const arr = [1, 2, 3, 3, 9, 2];
  // 这里一定要用concat，因为concat有返回值，如果使用push，那么返回值是undefined之后的pre就会是undefined了
  const sum = arr.reduce((pre, cur) => {
    return pre?.includes(cur) ? pre : pre.concat(cur);
  }, []);
  console.log(sum); // [1, 2, 3, 9]
  ```

- 将二维数组转换为一维数组

  ```js
  const arr = [1, 2, 3, 3, [9, 2]];
  const sum = arr.reduce((pre, cur) => {
    return pre.concat(cur);
  }, []);
  console.log(sum); // [1, 2, 3, 3, 9, 2]
  ```

- 将多维数组转换为一维数组

  ```js
  const arr = [1, 2, 3, 3, [9, [2]]];
  const sum = function flatArr(arr1) {
    return arr1.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
    }, []);
  };
  console.log(sum(arr));
  ```

## 16、如何实现图片懒加载

`IntersectionObserver`

`IntersectionObserver` 是浏览器原生提供的构造函数，接受两个参数：

- callback：可见性发现变化时的回调函数
- option：配置对象（可选）里面的配置对象有：
- **threshold**: 决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到 0 时触发回调函数。用户可以自定义这个数组。比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。
  - **root**: 用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素
  - **rootMargin**: 用来扩大或者缩小视窗的的大小，使用 css 的定义方法，10px 10px 30px 20px 表示 top、right、bottom 和 left 的值

构造函数的返回值是一个观察器实例。实例一共有 4 个方法：

- observe：开始监听特定元素
- unobserve：停止监听特定元素
- disconnect：关闭监听工作
- takeRecords：返回所有观察目标的对象数组

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: aquamarine;
        margin: 100px;
      }

      img {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div id="box">
      <div class="box">1</div>
    </div>

    <script>
      const box = document.getElementById("box");
      let imgNode = "";
      for (let i = 1; i < 1000; i++) {
        imgNode += `<img lazyUrl="https://picsum.photos/${i}0/200"
						src='./loading.png' title="图片${i}" />`;
      }
      box.innerHTML = imgNode;
      const imgList = document.querySelectorAll("img");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((item) => {
            if (item.isIntersecting) {
              item.target.src = item.target.getAttribute("lazyUrl");
              // 如果该图片已经出现过，那么关闭它的观察器
              observer.unobserve(item.target);
            }
          });
        },
        {
          threshold: 0,
        }
      );

      // 为每个创建观察器
      for (let i = 0; i < imgList.length; i++) {
        observer.observe(imgList[i]);
      }
    </script>
  </body>
</html>
```
