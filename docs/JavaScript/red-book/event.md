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

3. 屏幕坐标

   是距离屏幕左边（screenX）和顶部的距离（screenY）,和浏览器的位置就无关了，永远都是基于屏幕的位置。

   ```js
   const btn = document.getElementById("btn");
   btn.addEventListener("click", (event) => {
     const { screenX, screenY } = event;
     console.log(screenX, screenY);
   });
   ```

4. 修饰键

   修饰键 Shift、Ctrl、Alt 和 Meta，分别对应 event 的 shiftKey、ctrlKey、altKey 和 metaKey，
   比如在 windonw 上多选的时候会按住 Ctrl 键，然后使用鼠标左键进行多选。event 上的修饰键也是同样的，比如按住了 Ctrl 键，那么在用鼠标左键点击的时候，`event.ctrlKey`就会返回 true，否则返回 false。

   ```js
   btn.addEventListener("click", (event) => {
     const { shiftKey } = event;
     console.log(shiftKey); // 按着键盘的shift点击鼠标左键则返回true，否则为false
   });
   ```

5. 相关元素

   `relatedTarget`，只有监听在 muoseover 和 mouseout 事件时，event 身上才会有这个属性，如果监听的是 muoseout，那么这个属性得到的是从当前节点移出后，遇到第一个节点的信息，如果是 muoseover，那么得到的节点信息是，从那个节点移入到当前节点。

   ```js
   const btn = document.getElementById("btn");
   btn.addEventListener("mouseout", (event) => {
     const { relatedTarget } = event;
     console.log(relatedTarget); // 从当前节点移出后遇到的第一个节点的节点信息
   });
   ```

6. 鼠标按键

   在 event 上有一个`button`属性，通常情况下 0 表示鼠标主键（左键）、1 表示鼠标中键（通常 也是滚轮键）、2 表示鼠标副键。

7. 额外事件信息

   在 event 上的`detail`属性，如果鼠标在当前节点上没有移动，并且快速单击鼠标左键，那么 detail 的值就会累加，统计你点击了多少次。

   ```js
   const btn = document.getElementById("btn");
   const input = document.querySelector("input");
   btn.addEventListener("click", (event) => {
     const { detail } = event;
     console.log(detail); // 鼠标不动，且不停的单击，detail的值就会累加
   });
   ```

8. mousewheel 事件

   监听 mousewheel 事件时，event 上会有一个`wheelDelta`的属性，鼠标滚轮往上滚的时得到的是一个 120 的值，往下滚得到的是 -120 的值，所以只需要判断正负就可以了

   ```js
   const btn = document.getElementById("btn");
   btn.addEventListener("mousewheel", (event) => {
     const { wheelDelta } = event;
     console.log(wheelDelta); // 往上滚为120，往下滚为-120
   });
   ```

### 键盘与输入事件

- keydown 用户按下键盘的摸个键时触发，如果按住不放就会连续触发
- textInput 当用户编辑的文本，被输入到输入框的时候触发
- keyup 用户释放键盘上的某个键时。

键盘事件也支持修饰键，shiftKey、ctrlKey、altKey 和 metaKey。比如可以判断用户是否同时按下了 ctrl + c 进行复制。

阻止用户使用 ctrl + c 复制网页的内容

```js
window.addEventListener("keydown", (event) => {
  const { ctrlKey, code, keyCode } = event;
  if (keyCode === 67 && ctrlKey) {
    event.preventDefault();
    console.log("用户同时按下了ctrl + c 进行了复制,并且被阻止了");
  }
});
```

1. 键码

   键盘上的每个键都有自己`keyCode`，从 event 上获取每个键的`keyCode`

   ```js
   window.addEventListener("keydown", (event) => {
     const { keyCode } = event;
     console.log("keyCode", keyCode);
   });
   ```

2. **textInput**事件

   作 为对 keypress 的替代，textInput 事件的行为有些不一样。一个区别是 keypress 会在任何可以获 得焦点的元素上触发，而 textInput 只在可编辑区域上触发。另一个区别是 textInput 只在有新字 符被插入时才会触发，而 keypress 对任何可能影响文本的键都会触发（包括退格键）。

### 合成事件

- 在 compositionstart 事件中，包含正在编辑的文本（例如，已经选择了文本但还没替换）；

- 在 compositionupdate 事件中，包含要插入的新字符（正在输入）；

- 在 compositionend 事件中，包含本次合成过程中输入的全部内容（输入完成）。

  ```js
  const btn = document.getElementById("btn");

  btn.addEventListener("compositionstart", (event) => {
    console.log("开始输入", event.data);
  });

  btn.addEventListener("compositionupdate", (event) => {
    console.log("正在输入", event.data);
  });

  btn.addEventListener("compositionend", (event) => {
    console.log("结束输入", event.data);
  });
  ```

### HTML5 事件 （有兼容性问题，谨慎使用）

1. **contextmenu** 事件

   监听鼠标右键的点击

   ```js
   window.addEventListener("contextmenu", (event) => {
     event.preventDefault();
     console.log("右键被点击了");
   });
   ```

2. **beforeunload** 事件

   如果当前这个窗口要打开一个新的网页，则会触发这个事件，并且弹出一个 confirm 的选择框

   ```js
   window.addEventListener("beforeunload", (event) => {
     event.preventDefault();
   });
   ```

3. **DOMContentLoaded** 事件

   `load`事件时页面完全加载完毕（包括图片，css 等），而`DOMContentLoaded`则会在 dom 数构建完毕就触发，而不会等外部的资源加载完毕。

   ```js
   window.addEventListener("DOMContentLoaded", (event) => {
     console.log("dom树已经加载完毕");
   });
   ```

4. **hashchange** 事件

   监听路由中`#`后面值的变化，得到的是完整的路径，event 对象中会新增两个值，分别是 oldURL 和 newURL

   ```js
   window.addEventListener("hashchange", (event) => {
     console.log(event.oldURL, event.newURL);
     console.log(location.hash); // 得到#后面的内容，包括#号
   });
   ```

## 内存与性能

### 事件委托

通过个父级添加事件，利用事件的冒泡，给子级对应事件添加处理。

```js
const ulDom = document.querySelector("#ulDom");
ulDom.addEventListener("click", (e) => {
  switch (
    Number(e.target.innerText) // 通过判断子级的文本来确定点击的子级
  ) {
    case 1:
      alert("你点击了1");
      break;
    case 2:
      alert("你点击了2");
      break;
    default:
      alert("你点击了其他");
      break;
  }
});
```

### 删除事件处理程序

如何一个节点不是被`removeChild`或者`repalceChild`删除的，那么节点上注册的事件就不会在内存中被删除，依然会贮存在内存中，最好的方式就是如果这个节点不是被上面两个方式移除的，那么将他注册的事件一并移除。事件委托也能很好的解决这个问题。
