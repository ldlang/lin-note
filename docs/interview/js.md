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

   - `emoveChild` 从父节点中删除指定的子节点

## 2、== 和 ===

1. ==

   一般会将比较的两个值进行**隐式转换**再进行比较。

   - 简单数据类型的比较，字符串和布尔值都会转换为数值
   - 简单数据类型和复杂数据类型比较，会先取复杂数量类型的`valueOf`
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

为什么不用`typeof`和`instanceof`

1. `typeof`只能准确判断基本数据类型，`null`除外，对于引用数据类型，除了`function`都只能得到`object`
2. `instanceof` 主要用于检查一个对象是否是其原型链上某个构造函数的实例。由于这种机制依赖于原型链和构造函数，它特别适用于复杂数据类型（如对象、数组、函数等），而不适用于没有原型链的基本数据类型。对于基本数据类型

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
