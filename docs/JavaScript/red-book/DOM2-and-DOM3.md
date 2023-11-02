---
sidebar: auto
---

# DOM2和DOM3

## 样式

### 存取元素样式

1. 存取元素样式

   每个`css`都有对应的`js`，除了`float`是`cssFloat` ，所有通过`-`连接的`css`都必须改为驼峰的形式，如`padding-top`改为`paddingTop`。可以通过js读取或者设置dom节点的样式，但是通过css类名设置的样式不能被读取到

   ```js
   <div id="mydiv" style="background: aquamarine;" class="mydiv"></div>
   
   const mydiv = document.getElementById("mydiv");
   
   读取
   mydiv.style.background // aquamarine
   
   设置
   mydiv.style.background = 'red'
   ```

2.  DOM 样式属性和方法

   ```js
   <div id="mydiv" style="color: aquamarine; width: 50px;" class="mydiv"></div>
   
   const mydiv = document.getElementById("mydiv");
   mydiv.style.cssText // color: aquamarine; width: 50px;
   ```

   | 参数                                         | 说明                                                         |
   | -------------------------------------------- | ------------------------------------------------------------ |
   | cssText                                      | style中所有的css代码                                         |
   | length                                       | style中的css数量                                             |
   | parentRule                                   | 表示 CSS 信息的 CSSRule 对象                                 |
   | getPropertyPriority                          | 如果 CSS 属性 *propertyName* 使用了!important则返回"important"，否则返回空字符串。 |
   | getPropertyValue                             | 返回属性 *propertyName* 的字符串值                           |
   | item(*index*)                                | 返回索引为 *index* 的 CSS 属性名。                           |
   | removeProperty(*propertyName*)               | 从样式中删除 CSS 属性 *propertyName*。                       |
   | setProperty(*propertyName, value, priority*) | 设置 CSS 属性 *propertyName* 的值为*value*，*priority* 是"important"或空字符串。 |

3. 计算样式

   得到dom节点上任意地方设置的css（直接通过style，或者css上设置的）。只读，不能修改

   ```js
   <div id="mydiv" style="color: aquamarine; width: 50px;" class="mydiv">
         
   const myDiv = document.getElementById("mydiv");
   document.defaultView.getComputedStyle(myDiv, null).height  //css中设置500px
   ```

### 元素尺寸

1. 偏移尺寸(只读)

   不能用判断盒子距离浏览器可视窗口的位置，因为如果该节点的父盒子设置了`position: relative;`，那么`offsetLeft`和`offsetTop`就是相对于父盒子的。

   ```js
   <div id="mydiv" style="width: 50px;background: #ccc;">盒子</div>
   const myDiv = document.getElementById("mydiv");
   myDiv.offsetLeft // 0 元素左边框外侧距离包含元素左边框内侧的像素数
   ```

   | 参数         | 说明                                                         |
   | ------------ | ------------------------------------------------------------ |
   | offsetHeight | 元素在垂直方向上占用的像素尺寸，包括它的高度、水平滚动条高度（如果可见）和上、下边框的高度 |
   | offsetLeft   | 元素左边框外侧距离包含元素左边框内侧的像素数                 |
   | offsetTop    | 元素上边框外侧距离包含元素上边框内侧的像素数                 |
   | offsetWidth  | 元素在水平方向上占用的像素尺寸，包括它的宽度、垂直滚动条宽度（如果可 |

   ![Image](/red-book/offset.png)

2. 客户端尺寸（只读）

   `clientHeight`和`clientWidth`是元素内部的空间，不包含滚动条的空间，所有这两个属性常用于确定浏览器视口尺寸。

   ```js
   一般用于表示视口（<html>或<body>元素）的尺寸。
   const { clientHeight, clientWidth } = document.documentElement
   ```

3. 滚动尺寸

   除了html标签，其他的必须要有`overflow`才能滚动。

   如果发生了滚动，那么改变的是父盒子的scrollTop的值，子盒子的还是0，滚动后可以将scrollTop或者scrollLeft设为0就可以将对齐方向滚动到起始位置。

   ```html
   <div style="width: 200px; height: 200px; overflow: scroll;" id="mydiv">
   	<div style="width: 300px; height: 300px;background: sandybrown;" id="childDiv">盒子</div>
   </div>
   ```

   ```js
   const myDiv = document.getElementById("mydiv");
   const childDiv = document.getElementById("childDiv");
   
   myDiv.addEventListener("scroll", (e) => {
       myDiv.scrollTop // 在垂直方向的滚动的距离
       myDiv.scrollHeight // 被父盒子撑开了高度也是，300
       childDiv.scrollTop // 永远是0
       childDiv.scrollHeight // 盒子自身的高度，300
   })
   ```

   | 参数         | 说明                                                         |
   | ------------ | ------------------------------------------------------------ |
   | scrollHeight | 没有滚动条出现时，元素内容的总高度。                         |
   | scrollLeft   | 内容区左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置。 |
   | scrollTop    | 内容区顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置。 |
   | scrollWidth  | 没有滚动条出现时，元素内容的总宽度。                         |

   ![image](/red-book/scroll.png)

4. 确定元素尺寸及位置

   每个元素身上的`getBoundingClientRect()`方法，返回一个元素尺寸级位置的对象。

   ![image](/red-book/getBoundingClientRect.png)

### 遍历

