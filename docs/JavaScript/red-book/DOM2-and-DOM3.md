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

2. 客户端尺寸

3. 