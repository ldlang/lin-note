---
sidebar: auto
---

# Dom 扩展

## Selectors API

1. **querySelector**

   获取匹配条件的第一个 dom 节点，主要是通过 class 名，获取的是快照，获取的这个节点在其
   他地方被更改，并不会实时检测到，但是对这个获取到的节点进行操作依然是有效的。

   - 通过标签名获取

     ```js
     // 获取页面上第一个div标签的dom
     const dom = document.querySelector("div");
     ```

   - 通过 id 获取标签

     ```js
     // 获取页面上第一个 id 为 myDiv 的dom
     const dom = document.querySelector("#myDiv");
     ```

   - 通过 class 的名获取

     ```js
     // 获取页面上第一个有 bd 这个class的dom
     const dom = document.querySelector(".bd");
     ```

   - 获取指定标签下，指定的 class 的标签

     ```js
     // 获取页面上第一个 div标签有 bd 这个class的标签
     const dom = document.querySelector("div.bd");
     ```

2. **querySelectorAll**

等同于 querySelector，只不过得到是所有符合条件的节点数组快照，没有实时获取是因为如果同时获取并更改大量的 dom，会有性能上的问题。

## html5

### css 类扩展

1. **getElementsByClassName**

   通过 class 获取 dom，返回所有匹配的节点数组

   ```js
   // 得到所有class上有 aa 属性的节点
   document.getElementsByClassName("aa");
   ```

### 焦点管理

1. **activeElement**

   获取当前页面中有焦点的dom

   ```js
   <button id="btn">按钮</button>
   
   const dom = document.getElementById('btn')
   dom.focus()
   const active = document.activeElement
   console.log(dom == active); // true
   ```

2. **hasFocus**

   查询当前页面是否有获取焦点的dom，返回布尔值

   ```js
   const isHas = document.hasFocus()
   ```

### HTMLDocment 扩展

1. **readyState**

   有两个值，`loading`和`complete`，`loading`表示文档正在加载，`complete`表示文档已经加载完成了，但是readyState只是一个静态的值，只能获取一次结果，并不会随着文件加载的变化而变化。

   ```js
   只会判断在这段代码执行的这一时刻，文档有无加载完成，并不会实时的监听。
   if (document.readyState == 'complete') {
       console.log('页面加载完成');
   }
   ```

   注意：实时的监听文档加载完成只能通过事件监听去处理

   ```js
   window.addEventListener('load', () => {
       console.log('页面加载完成')
   })
   ```

2. **compatMode**

   判断一个页面是以标准还是混杂模式渲染，值是`CSS1Compat`为标准模式，`BackCompat`为混杂模式。

   ```js
   document.compatMode
   console.log(comp); // CSS1Compat 标准模式
   console.log(comp); // BackCompat 混杂模式
   ```

3. **head**

   直接获取`head`的dom

   ```js
   const head = document.head
   console.log(head);
   ```

### 字符集属性

1. **characterSet**

   获取和设置当前文档的字符集

   ```js
   获取
   const char = document.characterSet
   console.log(char); // UTF-8
   
   设置
   document.characterSet = 'utf-16'
   ```

### 自定义属性

给标签设置自定义属性，要以`data-`开头，这样浏览器就知道这属性时不渲染的，同时也能通过`dataset`访问其属性。

```js
<div id="mydiv" data-appid="123" data-my="my"></div>

const dom = document.getElementById("mydiv")
dom.dataset.appid // 123
dom.dataset.my // my
```

### 插入标记

1. **innerHTML**

   获取当前节点下的所有子节点的字符串，或者给当前节点插入一段真实的dom节点

   * 获取，得到了myDiv下面的所有子节点，包括缩进格式，但是并不能操作

     ```js
     const dom = document.getElementById("mydiv")
     console.log(dom.innerHTML); 
     ```

   * 设置，可以插入任意数量和深度的节点，这些插入的节点也能被操作

     ```js
     const dom = document.getElementById("mydiv")
     dom.innerHTML = '<span>innerHTML</span>'
     ```

2. **outerHTML**

   获取当前节点及当前节点下所有的子节点，或者将当前节点及其子节点全部替换为一段节点，除了得到的节点包含自身之外，表现和`innerHTMl`一致。

3. **innerText**

   给当前节点插入一段文本内容

4. **outerText**

   将当前节点替换为一段文本内容

5.  **insertAdjacentHTML()**

   接收两个参数，第一个是插入的位置，是插入的节点

   ```js
   const dom = document.getElementById("mydiv")
   dom.insertAdjacentHTML("afterend", "<strong>" + 'strong' + "</strong>")
   ```

   第一个参数配置

   | 参数        | 说明                                                     |
   | ----------- | -------------------------------------------------------- |
   | beforebegin | 插入当前元素前面，作为前一个同胞节点                     |
   | afterbegin  | 插入当前元素内部，作为新的子节点或放在第一个子节点前面   |
   | beforeend   | 插入当前元素内部，作为新的子节点或放在最后一个子节点后面 |
| afterend    | 插入当前元素后面，作为下一个同胞节点                     |
   
6. **insertAdjacentText()**

   插入文本内容，参数和表现与`insertAdjacentHTML`一致

7. **scrollIntoView()** 

   将节点滚动到指定的位置，接收两种参数，第一种是boolean，第二种的配置对象

   * Boolean，`true`让节点顶部滚动到页面顶部，`false`将节点底部滚动至页面底部

     ```js
     const dom = document.getElementsByTagName('li')
     dom[2].scrollIntoView(true)
     ```

   * 配置对象

     ```js
     const dom = document.getElementsByTagName('li')
     dom[2].scrollIntoView({ behavior: 'smooth', block: 'center' })
     ```

     | 参数     | 可选值                                | 说明                     |
     | -------- | ------------------------------------- | ------------------------ |
     | behavior | smooth（平滑滚动）、auto（瞬间滚动）  | 定义过渡动画，可选       |
     | block    | start、center、end、nearest（默认值） | 定义垂直方向的对齐，可选 |
     | inline   | start、center、end、nearest（默认值） | 定义水平方向的对齐，可选 |

