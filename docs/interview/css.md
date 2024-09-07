---
sidebar: auto
---

# css 面试题

## 1、可继承的属性(7 类)

- **字体**系列属性

  ```css
  font
  font-family
  font-weight
  font-size
  font-style
  font-variant /* 浏览器会显示小型大写字母的字体 */
  ```

- **文本**系列属性

  ```css
  text-indent /* 缩进 */
  text-align
  line-height
  word-spacing /* 单词与单词的间距 */
  letter-spacing /* 字符与字符的间距 */
  text-transform /* 英文大小写 */
  direction /* 文本书写的方向 */
  color
  ```

- **可见性**属性

  ```css
  visibility
  ```

- **表格布局**属性

  ```css
  caption-side
  border-collapse
  border-spacing
  empty-cells
  table-layout
  ```

- **列表**属性

  ```css
  list-style-type /* 列表项前面小点的样式 */
  list-style-position /* 列表项前面小点的位置 */
  list-style
  ```

- **引用**

  ```css
  quotes /* 设置嵌套引用的引号类型 */
  ```

- **光标**

  ```css
  cursor
  ```

## 2、文本溢出隐藏

- 单行模式

  ```css
  overflow: hidden; /* 文字长度超出限定宽度，则隐藏超出的内容 */
  white-space: nowrap; /* 设置文字在一行显示，不能换行 */
  text-overflow: ellipsis; /* 规定当文本溢出时，显示省略符号来代表被修剪的文本 */
  ```

- 多行模式

  ```css
  -webkit-line-clamp: 2; /* 用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性 */
  display: -webkit-box; /* 和 1 结合使用，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 */
  overflow: hidden; /* 文本溢出限定的宽度就隐藏内容 */
  text-overflow: ellipsis; /* 多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本 */
  ```

## 3、浏览器默认最小字体(12px)

谷歌浏览器默认浏览器字体最小一般是**12px**，所以一般设置小于**12px**的字体就需要通过缩放来实现。

> 显示新版的谷歌浏览器默认最小好像是 0，所以对于新版浏览器来说，设置小于 12px 的字体也是生效的，可以通过 chrome://settings/fonts 查看当前浏览器支持的最小是多少。

- zoom

  缩放，CSS 属性缩放目标元素，这可能会**影响页面布局**。缩放时，缩放的元素将从 `top` 使用默认值 `writing-mode` 开始缩放 `center` （兼用性有问题）。

- transform: scale(x);

  缩放使用的 `scale()` 元素**不会导致布局重新计算**或移动页面上的其他元素

## 4、回流和重绘

回流必将引起重绘，而重绘不一定会引起回流。

1. 回流

   当 render 树中的一部分或者全部因为大小边距等问题发生改变而需要重建的过程叫做回流（**改变大小**）。

2. 重绘

   当元素的一部分属性发生变化，如外观背景色不会引起布局变化而需要重新渲染的过程叫做重绘（**改变样式**）。

## 5、block、inline 和 inline-block

- block

  - block 元素会独占一行，多个 block 元素会各自新起一行。默认情况下，block 元素宽度自动填满其父元素宽度。
  - block 元素可以设置 width,height 属性。块级元素即使设置了宽度,仍然是独占一行。
  - block 元素可以设置 margin 和 padding 属性。

- inline

  - inline 元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
  - inline 元素设置 width,height 属性无效。
  - inline 元素的 margin 和 padding 属性，**只有水平方向**的 padding-left, padding-right,margin-left, margin-right 产生边距效果；

- inline-block

  简单来说就是将对象呈现为 inline 对象，但是对象的内容作为 block 对象呈现。之后的内联对象会被排列在同一行内。

## 6、盒子模型

- 标准盒模型 （box-sizing: content-box;）

  盒子总宽：content + padding + border + margin

  > 设置 width 也就是设置 content 的宽度

- IE 怪异盒模型 （box-sizing: border-box;）

  盒子总宽：width + margin

  > 设置 width 也就是设置 content + padding + border 的总宽度

## 7、BFC (块级格式化上下文)

`BFC`就相当于是一个隔离的的独立容器，容器里面的盒子不会影响到外面的元素，同一个`BFC`两个相邻的盒子的 margin 会发生塌陷；

如何触发`BFC`：

1. 在外出包裹一个父级，并且父级上有`display: flex`或者`overflow: hidden;`
2. 给当前元素是设置`display: inline-block;`或者`position: fixed | absolute`

## 8、定位（position）

- `relative`和`sticky`所有方向设为 0 盒子不会被拉伸
- `absolute`会铺满父级盒子，`fixed`会铺满整个页面

## 9、css3 动画

- `animation`要配合`@keyframes`才能实现动画
- `transform`
  - translate： 位移
  - scale：缩放
  - rotate：旋转
  - skew：倾斜
- `transition` 过渡动画
