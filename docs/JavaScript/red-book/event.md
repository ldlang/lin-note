---
sidebar: auto
---

# 事件

## 事件流

### 事件冒泡

所有的浏览器都支持事件冒泡，如果页面中的 div 有一个 click 事件，那么点击他会先触发他的 click
事件，然后再触发他父级的 click 的事件，直到触发到 document 上。

### 事件捕获

和事件冒泡完全反过来，如果页面中的一个 div 有一个 click 事件，那么点击他，会从 document
上开始查找事件，直到查找到 div 上的这个事件。由于旧版本浏览器不支持，因此实际当中几乎不会
使用事件捕获。通常建议使用事件冒泡，特殊情 况下可以使用事件捕获。

### DOM 事件流

DOM2 Events 规范规定事件流分为 3 个阶段：事件捕获、到达目标和事件冒泡。事件捕获最先发生，
为提前拦截事件提供了可能。

## 事件处理程序

事件意味着用户或浏览器执行的某种动作。比如，单击（click）、加载（load）、鼠标悬停
（mouseover）。为响应事件而调用的函数被称为事件处理程序（或事件监听器）。事件处理程
序的名字 以"on"开头，因此 click 事件的处理程序叫作 onclick，而 load 事件的处理程序
叫作 onload。有 很多方式可以指定事件处理程序。

### HTML 事件处理程序

直接将一个函数绑定在标签的事件上，其中有一个特殊的参数`event`，包含了节点的一些信息

```js
<div onclick="divClick(event)"></div>;

function divClick(e) {
  console.log("我被点击了", e); //元素节点信息
}
```

### DOM0 事件处理程序

在元素节点的事件上绑定一个函数，如果这个事件触发，那么就会触发这个函数，如果这个函数是
一个普通函数，那么函数里面的`this`就是指向这个节点，这个`this`等同于通过 getElementById
拿到的节点，函数有一个默认的形参，上面存储了这个节点的信息。

```js
<div id="mydiv"></div>;

const myDiv = document.getElementById("mydiv");
myDiv.onclick = function (e) {
  this === myDiv; // true
  myDiv.onclick = null; // 移除事件
};
```

### DOM2 事件处理程序

`addEventListener` 添加事件监听`removeEventListener` 移除事件监听，接收三个参数，事件名，
事件处理函数和布尔值（或者是一个配置对象），最后一个参数 true 表示在捕获阶段调用事件处理程序，
false（默认值）表示在冒泡阶段调用事 件处理程序。同一个 dom 节点可以被多个事件监听，这有利于
对不同事件进行不同的处理。

**注意：**移除事件监听必须和监听的事件是同一个事件处理函数

```js
const myDiv = document.getElementById("mydiv");
const handler = () => {
  console.log("触发了");
};
myDiv.addEventListener("click", handler, false);
myDiv.removeEventListener("click", handler, false);
```

配置对象说明：

| 参数    | 说明                                                                                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| capture | 一个布尔值，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。                                                                                                              |
| once    | 一个布尔值，表示 `listener` 在添加之后最多只调用一次。如果为 `true`，`listener` 会在其被调用之后自动移除。                                                                                       |
| passive | 一个布尔值，设置为 `true` 时，表示 `listener` 永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看使用 passive 改善滚屏性能以了解更多。 |
| siganl  | AbortSignal，该 `AbortSignal` 的 abort()方法被调用时，监听器会被移除                                                                                                                             |

## 事件对象

所有的 DOM 事件调用的函数，都会默认接收到一个形参`event`对象，这个对象包含了一些信息，
比如导致事件的元素、发生的事件类型，以及可能与特定事件相关的任何其他数据。

### DOM 事件对象

所有的 DOM 处理事件中，接受到的 event 都是一样的，并且在事件处理的普通函数中，
`event.currentTarget` === `event.target` === `this` === `dom节点`，
event.type 就可以判断触发事件的类型，比如触发的是 click 事件，那么 event.type 的值就是 click

[event 实例属性说明](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)

**注意** event 对象只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁。

- **preventDefault**

  阻止默认行为，比如，链接的默认行为就是在被单击时导 航到 href 属性指定的 URL。

  ```js
  // 此时再次点击a标签，就不会发生跳转了
  const adom = document.querySelector("a");
  adom.addEventListener("click", (e) => {
    e.preventDefault();
  });
  ```

- **stopPropagation**

  阻止事件冒泡方式事件向外传播。

  ```js
  adom.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  ```

## 事件类型

用户界面事件（UIEvent）：涉及与 BOM 交互的通用浏览器事件。

焦点事件（FocusEvent）：在元素获得和失去焦点时触发。

鼠标事件（MouseEvent）：使用鼠标在页面上执行某些操作时触发。

滚轮事件（WheelEvent）：使用鼠标滚轮（或类似设备）时触发。

输入事件（InputEvent）：向文档中输入文本时触发。

键盘事件（KeyboardEvent）：使用键盘在页面上执行某些操作时触发。

合成事件（CompositionEvent）：在使用某种 IME（Input Method Editor，输入法编辑器）输入

字符时触发。

### 用户界面事件

1. **load**事件

   - 在 window 上添加对`load`事件的监听，这个监听事件则会在整个页面加载完毕后触发

     ```js
     window.addEventListener("load", () => {
       console.log("页面加载完毕");
     });
     ```

   - 在 img 上添加`load`事件，则会在整张图片都渲染完毕后触发事件。

     ```js
     const img = document.querySelector("img");
     img.addEventListener("load", () => {
       console.log("图片加载完成了");
     });
     ```

   - 根据 DOM2 Events，load 事件应该在 document 而非 window 上触发。可是为了

     向后兼容，所有浏览器都在 window 上实现了 load 事件，

     但是通过获取 dom 添加事件测试并未生效，只能在节点上加事件。

     ```js
     // 有效
     <body onload="console.log('加载完毕了')">

     // 并未生效
     document.body.addEventListener('load', () => {
         console.log('页面加载完毕');
     })
     ```

2. **unLoad**事件

   监听页面卸载

   ```js
   window.addEventListener("unload", () => {
     localStorage.setItem("close", "关闭");
   });
   ```

3. **resize**事件

   监听浏览器窗口尺寸变化

   ```js
   window.addEventListener("resize", () => {
     console.log("尺寸变化了");
   });
   ```

4. **scroll**事件

   监听页面滚动，或者一个盒子上有`overflow`，也可以对这个盒子添加`scroll`事件的监听

   ```js
   window.addEventListener("scroll", () => {
     console.log("页面滚动了");
   });
   ```

### 焦点事件

- blur 失去焦点，不会冒泡
- focusout 失去焦点，会向外冒泡
- focus 获取焦点，不会冒泡
- focusin 获取焦点，会向外冒泡

### 鼠标和滚轮事件

- click 在用户单击鼠标主键（通常是左键）或按键盘回车键时触发
- dblclick 在用户双击鼠标主键（通常是左键）时触发
- [mdn 事件说明](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)

1. 客户端坐标

   鼠标事件发生时，鼠标的位置会被保存在 clientX 和 clientY 上，这两个属性表示的是该点距离当前浏览器可视窗口的顶部，和左边的距离。如果页面滑动这两个值距离可视窗口的大小也会改变。

   ```js
   const btn = document.getElementById("btn");
   btn.addEventListener("click", (event) => {
     const { clientX, clientY } = event;
     console.log(clientX, clientY);
   });
   ```

2. 页面坐标

   页面坐标是，该点距离页面顶部（pageY）和页面左边（pageX）的距离，页面无论怎么动，这两个值都不会改变的。如果页面不产生滚动，那么 页面坐标 = 客户端坐标

   ```js
   const btn = document.getElementById("btn");
   btn.addEventListener("click", (event) => {
     const { pageX, pageY } = event;
     console.log(pageX, pageY);
   });
   ```

3.
